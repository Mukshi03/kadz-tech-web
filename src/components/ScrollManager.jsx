import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Scrolls to the #hash target after navigation, or to the top for a new page.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default ScrollManager
