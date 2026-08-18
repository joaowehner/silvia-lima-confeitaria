import { useEffect, useRef, useState } from 'react'

/**
 * Returns true when the element is visible in viewport.
 * Used for scroll-triggered animations.
 */
export function useInView(options?: IntersectionObserverInit): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return [ref, isInView]
}
