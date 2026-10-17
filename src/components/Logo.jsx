import { Link } from 'react-router'
import { brand } from '../config'

// Shapes shared with the files in public/logo/. Letters sit on a 40-unit cap height.
const K = 'M0 0H9V40H0Z M9 14L17 0H27L16 20L27 40H17L9 26Z'
const KADZ = [
  [0, K],
  [31, 'M0 40L9 0H19L28 40H19L17.4 32H10.6L9 40Z M12.3 24H15.7L14 15Z'],
  [63, 'M0 0H19L27 8V32L19 40H0Z M9 9V31H15L18 28V12L15 9Z'],
  [94, 'M0 0H26V8L10.5 31H26V40H0V32L15.5 9H0Z'],
]
const TECH = [
  [132, 'M0 0H26V9H17.5V40H8.5V9H0Z'],
  [162, 'M0 0H24V9H9V15.5H21V24.5H9V31H24V40H0Z'],
  [190, 'M8 0H26V9H11L9 11V29L11 31H26V40H8L0 32V8Z'],
  [220, 'M0 0H9V15.5H18V0H27V40H18V24.5H9V40H0Z'],
]

const glyphs = (list) => list.map(([x, d]) => <path key={x} transform={`translate(${x} 0)`} d={d} />)

// Amber badge with a notched corner and the K inside.
export function LogoMark({ className = 'size-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path className="fill-accent" d="M0 0H64V52L52 64H0Z" />
      <path className="fill-accent-ink" fillRule="evenodd" transform="translate(17.5 12)" d={K} />
    </svg>
  )
}

// Mark + wordmark. "KADZ" follows the text color; "TECH" is amber.
// The default suits dark backgrounds (header, footer); pass techClass="fill-accent-text" on light ones.
function Logo({ className = 'h-9', techClass = 'fill-accent' }) {
  return (
    <Link to="/" className="flex items-center" aria-label={`${brand.name} home`}>
      <svg viewBox="0 0 327 64" className={`w-auto ${className}`} role="img" aria-hidden>
        <path className="fill-accent" d="M0 0H64V52L52 64H0Z" />
        <path className="fill-accent-ink" fillRule="evenodd" transform="translate(17.5 12)" d={K} />
        <g transform="translate(80 12)" fillRule="evenodd">
          <g fill="currentColor">{glyphs(KADZ)}</g>
          <g className={techClass}>{glyphs(TECH)}</g>
        </g>
      </svg>
    </Link>
  )
}

export default Logo
