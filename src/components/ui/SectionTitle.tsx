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
      className={`flex flex-col ${alignClass}`}
      style={{ marginBottom: '56px', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align === 'center' ? 'center' : 'left', width: '100%' }}
    >
      {subtitle && (
        <span 
          className="text-sm font-semibold tracking-wider text-primary-500 uppercase"
          style={{ marginBottom: '16px', display: 'block' }}
        >
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="section-divider" style={{ marginTop: '24px', marginBottom: '24px' }} />
      {description && (
        <p 
          className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          style={{ marginTop: '24px' }}
        >
          {description}
        </p>
      )}
      {children}
    </motion.div>
  )
}
