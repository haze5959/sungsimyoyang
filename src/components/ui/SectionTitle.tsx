import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export default function SectionTitle({ subtitle, title, description, align = 'center', children }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-10 flex flex-col ${alignClass} md:mb-14`}
    >
      {subtitle && (
        <span className="mb-2 text-sm font-semibold tracking-wider text-primary-500 uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="section-divider mt-4" />
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  )
}
