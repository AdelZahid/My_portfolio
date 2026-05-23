import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

type FadeInTag = 'div' | 'nav' | 'p' | 'section'

type FadeInProps = {
  as?: FadeInTag
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  children?: ReactNode
}

const motionElements = {
  div: motion.create('div'),
  nav: motion.create('nav'),
  p: motion.create('p'),
  section: motion.create('section'),
}

function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
}: FadeInProps) {
  const MotionComponent = motionElements[as]

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}

export default FadeIn
