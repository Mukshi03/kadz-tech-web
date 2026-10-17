import { Inbox } from 'lucide-react'

// Shown where a list has no data yet.
function EmptyState({ title, hint, className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-line bg-surface/60 px-6 py-12 text-center ${className}`}>
      <Inbox className="text-muted" size={32} />
      <p className="font-semibold text-muted">{title}</p>
      {hint && <p className="text-sm text-muted">{hint}</p>}
    </div>
  )
}

export default EmptyState
