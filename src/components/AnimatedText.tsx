import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

type AnimatedTextProps = {
  text: string
  className?: string
}

type AnimatedCharacterProps = {
  character: string
  index: number
  total: number
  scrollProgress: MotionValue<number>
}

function AnimatedCharacter({
  character,
  index,
  total,
  scrollProgress,
}: AnimatedCharacterProps) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(scrollProgress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{character}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {character}
      </motion.span>
    </span>
  )
}

function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = text.split('')
  const totalCharacters = characters.length

  return (
    <p ref={paragraphRef} className={className}>
      {characters.map((character, index) => (
        <AnimatedCharacter
          key={`${character}-${index}`}
          character={character}
          index={index}
          total={totalCharacters}
          scrollProgress={scrollYProgress}
        />
      ))}
    </p>
  )
}

export default AnimatedText
