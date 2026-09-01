import { useEffect, useRef, useState } from 'react'

const SONG_URL = `${import.meta.env.BASE_URL}music/our-song.mp3`

export default function MusicPlayer({ title = 'our song' }) {
  const audioRef = useRef(null)

  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    const handleError = () => {
      console.error('Music failed to load:', SONG_URL)
      setMissing(true)
      setPlaying(false)
    }

    const handleEnded = () => {
      setPlaying(false)
    }

    audio.addEventListener('error', handleError)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current

    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }

    try {
      await audio.play()

      setPlaying(true)
      setMissing(false)

    } catch (error) {
      console.error('Audio playback failed:', error)
      setPlaying(false)
    }
  }

  return (
    <div className="fixed right-5 top-5 z-50 flex flex-col items-end gap-2 sm:right-8 sm:top-8">

      <audio
        ref={audioRef}
        src={SONG_URL}
        loop
        preload="auto"
      />

      <div
        className={`flex items-center gap-3 rounded-full border border-[var(--rose-pink)]/40 bg-white/85 py-1.5 pl-1.5 pr-4 shadow-[0_6px_20px_-10px_rgba(74,65,69,0.4)] backdrop-blur-sm transition-all duration-400 ${
          expanded
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
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
          {missing ? 'song not found' : title}
        </span>

      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-label="Music player"
        title={missing ? 'Song not found' : title}
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

            animation: playing
              ? 'spin-slow 4.5s linear infinite'
              : 'none',
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>

      </button>

    </div>
  )
}