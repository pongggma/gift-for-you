Real flower photos for the bouquet (optional)
==============================================

The bouquet on the home page currently draws each flower as simple
line-art (SVG). If you'd rather it use real photo/botanical images,
drop transparent PNGs into this folder using these EXACT filenames:

  rose.png
  tulip.png
  daisy.png
  peony.png
  hydrangea.png
  baby-breath.png   (baby's breath)
  greenery.png      (leaves / eucalyptus)

Any file you don't add is fine — that flower just keeps using the
hand-drawn version, so the bouquet always looks complete either way.

What makes a good image:
  - PNG with a TRANSPARENT background (no white box around the flower —
    it will show as a visible square once layered with the others)
  - Similar lighting/angle across all the flowers you add, so the
    bouquet reads as one consistent photo, not a collage of styles
    ("realistic botanical" or "soft editorial" close-up shots work best)
  - Reasonably high resolution (at least ~500px on the long side) since
    a few of these render fairly large in the bouquet
  - Roughly square / centered crop, similar to how the photos in
    public/images/photos/ are handled

Where to find free ones (check each image's individual license before
using — most sites mark commercial/attribution-free ones separately):
  - rawpixel.com/search/flower%20png  — many CC0 / public-domain remixes
  - vecteezy.com/free-png              — free tier, some need attribution
  - pngimg.com                          — free for personal use

Once a file is in place, just refresh the dev server — no code changes
needed, it's picked up automatically.
