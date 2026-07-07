"""Generate crisp OG share card (1200x630) from content/portfolio.json."""
import json
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    raise SystemExit("Run: pip install Pillow")

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content" / "portfolio.json"
OUT = ROOT / "public" / "og-card.png"

W, H = 1200, 630

FONT_CANDIDATES = {
    "bold": [
        ROOT / "scripts/assets/fonts/Inter-Bold.ttf",
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
        Path("C:/Windows/Fonts/segoeuib.ttf"),
        Path("C:/Windows/Fonts/arialbd.ttf"),
    ],
    "medium": [
        ROOT / "scripts/assets/fonts/Inter-Medium.ttf",
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
        Path("C:/Windows/Fonts/segoeui.ttf"),
        Path("C:/Windows/Fonts/arial.ttf"),
    ],
    "regular": [
        ROOT / "scripts/assets/fonts/Inter-Regular.ttf",
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
        Path("C:/Windows/Fonts/segoeui.ttf"),
        Path("C:/Windows/Fonts/arial.ttf"),
    ],
}


def load_font(style: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in FONT_CANDIDATES[style]:
        if path.is_file():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def text_width(draw: ImageDraw.ImageDraw, text: str, font) -> int:
    box = draw.textbbox((0, 0), text, font=font)
    return box[2] - box[0]


def text_height(draw: ImageDraw.ImageDraw, text: str, font) -> int:
    box = draw.textbbox((0, 0), text, font=font)
    return box[3] - box[1]


def wrap_line(draw, text: str, font, max_width: int) -> list[str]:
    words = text.replace(" · ", " · ").split(" ")
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if text_width(draw, trial, font) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or [text]


def draw_centered(
    draw: ImageDraw.ImageDraw,
    y: int,
    text: str,
    font,
    fill: tuple,
    stroke: int = 0,
    stroke_fill: tuple | None = None,
) -> int:
    x = (W - text_width(draw, text, font)) // 2
    draw.text((x, y), text, font=font, fill=fill, stroke_width=stroke, stroke_fill=stroke_fill)
    return y + text_height(draw, text, font)


def main() -> None:
    data = json.loads(CONTENT.read_text(encoding="utf-8"))
    site = data["site"]

    img = Image.new("RGB", (W, H), (15, 23, 42))
    draw = ImageDraw.Draw(img)

    # Soft teal glow behind centered text (safe for square crop)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((340, 80, 860, 550), fill=(45, 212, 191, 28))
    glow_draw.ellipse((420, 140, 780, 490), fill=(99, 102, 241, 18))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
    draw = ImageDraw.Draw(img)

    name_font = load_font("bold", 72)
    role_font = load_font("medium", 36)
    focus_font = load_font("regular", 30)
    url_font = load_font("regular", 22)

    name = site["name"]
    role = site["role"]
    focus = site["focus"]
    url = site["portfolio"].replace("https://", "").rstrip("/")

    max_text_w = 560  # fits inside WhatsApp square crop (630px wide)

    role_lines = wrap_line(draw, role, role_font, max_text_w)
    focus_lines = wrap_line(draw, focus, focus_font, max_text_w)

    block_h = (
        text_height(draw, name, name_font)
        + 18
        + sum(text_height(draw, line, role_font) + 6 for line in role_lines)
        + 12
        + sum(text_height(draw, line, focus_font) + 8 for line in focus_lines)
    )
    y = (H - block_h) // 2

    y = draw_centered(draw, y, name, name_font, (255, 255, 255), stroke=2, stroke_fill=(15, 23, 42))
    y += 18

    for line in role_lines:
        y = draw_centered(draw, y, line, role_font, (45, 212, 191), stroke=1, stroke_fill=(15, 23, 42))
        y += 6
    y += 6

    for line in focus_lines:
        y = draw_centered(draw, y, line, focus_font, (203, 213, 225), stroke=1, stroke_fill=(15, 23, 42))
        y += 8

    draw_centered(draw, H - 52, url, url_font, (100, 116, 139))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT} ({W}x{H})")


if __name__ == "__main__":
    main()
