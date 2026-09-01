Add your song here, named exactly `our-song` with one of these extensions:

  our-song.mp3   (most common — use this if unsure)
  our-song.m4a
  our-song.ogg
  our-song.wav

The music button (top-right corner) plays/pauses whichever one it finds.
You only need one of them, not all four.

If the button stays grey and its tooltip says "No song found yet":
  1. Double check the file is inside public/music/ (not src/, not the
     project root) and the filename matches exactly, including the
     extension.
  2. If you're running `npm run dev`, stop it (Ctrl+C) and run it again
     after adding the file — Vite doesn't always pick up new files in
     public/ while already running.
  3. Hard-refresh the page in the browser (Ctrl+Shift+R) to clear any
     cached "file not found" state.
