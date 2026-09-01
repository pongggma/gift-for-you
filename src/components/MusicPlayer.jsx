import { useEffect, useRef, useState } from 'react'

// Looks for the song under any of these names/formats — drop in whichever
// one you actually have, no need to convert it.
const SOURCES = [
  { src: '/music/our-song.mp3', type: 'audio/mpeg' },
  { src: '/music/our-song.m4a', type: 'audio/mp4' },
  { src: '/music/our-song.ogg', type: 'audio/ogg' },
  { src: '/music/our-song.wav', type: 'audio/wav' },
]

/**
 * A small vinyl-style "our song" control fixed in the top-right corner.
 * Tapping the disc expands a slim pill with the song title and a
 * play/pause button; the disc itself spins while playing.
 * Drop a file at public/music/our-song.mp3 (or .m4a / .ogg / .wav — see
 * public/music/README.txt) — until then it still works, it just has
 * nothing to play, and says so if you open it.
 */
export default function MusicPlayer({ title = 'our song' }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    const handleError = () => {
      // fires once none of the <source> candidates could be loaded
      setMissing(true)
      setPlaying(false)
    }
    audio.addEventListener('error', handleError)
    audio.addEventListener('stalled', handleError)
    return () => {
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('stalled', handleError)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        setMissing(true)
        setPlaying(false)
      })
  }

  return (
    <div className="fixed right-5 top-5 z-50 flex flex-col items-end gap-2 sm:right-8 sm:top-8">
      <audio ref={audioRef} loop preload="metadata">
        {SOURCES.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
      </audio>

      {/* expandable pill: song title + play/pause */}
      <div
        className={`flex items-center gap-3 rounded-full border border-[var(--rose-pink)]/40 bg-white/85 py-1.5 pl-1.5 pr-4 shadow-[0_6px_20px_-10px_rgba(74,65,69,0.4)] backdrop-blur-sm transition-all duration-400 ${
          expanded ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause music' : 'Play music'}
          disabled={missing}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--deep-rose)] text-sm text-white disabled:opacity-50"
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <span className="font-display text-sm italic text-[var(--text)]">
          {missing ? 'add your song' : title}
        </span>
      </div>

      {/* the disc — tap to expand the pill above */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-label="Music player"
        title={missing ? 'No song found yet — add public/music/our-song.mp3' : title}
        className={`flex h-11 w-11 items-center justify-center rounded-full border bg-white/70 backdrop-blur-sm transition-colors hover:bg-white ${
          missing
            ? 'border-[var(--text-soft)]/30 text-[var(--text-soft)]'
            : 'border-[var(--rose-pink)]/50 text-[var(--deep-rose)]'
        }`}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full"
          style={{
            background: missing
              ? 'var(--text-soft)'
              : 'radial-gradient(circle at 50% 50%, var(--deep-rose) 0 3px, #3a2f33 3px 100%)',
            animation: playing ? 'spin-slow 4.5s linear infinite' : 'none',
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      </button>
    </div>
  )
}
