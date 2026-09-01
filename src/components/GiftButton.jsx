export default function GiftButton({ onClick, children = 'Open the gift' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative inline-flex items-center gap-2 rounded-full border border-[var(--rose-pink)] bg-white/60 px-8 py-3 font-display text-lg italic tracking-wide text-[var(--deep-rose)] backdrop-blur-sm transition-all duration-500 hover:bg-[var(--rose-pink)] hover:text-white hover:shadow-[0_8px_30px_-8px_rgba(232,135,168,0.55)]"
    >
      <span>{children}</span>
      <span className="transition-transform duration-500 group-hover:translate-x-1">🌸</span>
    </button>
  )
}
