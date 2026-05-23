import { type ReactNode, useEffect, useRef, useState } from 'react'

type MagnetProps = {
  children: ReactNode
  className?: string
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

function Magnet({
  children,
  className = '',
  padding = 120,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)')
  const [active, setActive] = useState(false)

  useEffect(() => {
    const element = containerRef.current

    if (!element) {
      return
    }

    const onMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const withinRange =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding

      if (!withinRange) {
        setActive(false)
        setTransform('translate3d(0px, 0px, 0px)')
        return
      }

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const translateX = (event.clientX - centerX) / strength
      const translateY = (event.clientY - centerY) / strength

      setActive(true)
      setTransform(`translate3d(${translateX}px, ${translateY}px, 0px)`)
    }

    const onMouseLeave = () => {
      setActive(false)
      setTransform('translate3d(0px, 0px, 0px)')
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [padding, strength])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        transform,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

export default Magnet
