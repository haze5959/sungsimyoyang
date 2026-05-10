import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: { src: string; alt: string }[]
  columns?: 2 | 3 | 4
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const colClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 4
        ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        : 'grid-cols-2 sm:grid-cols-3'

  const navigateTo = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return
    if (direction === 'prev') {
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : images.length - 1)
    } else {
      setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0)
    }
  }

  return (
    <>
      <div className={`grid gap-3 md:gap-4 ${colClass}`}>
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group cursor-pointer overflow-hidden rounded-xl bg-surface-muted"
            onClick={() => setSelectedIndex(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* 라이트박스 */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </button>

            {/* 이전 */}
            <button
              className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); navigateTo('prev') }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* 이미지 */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* 다음 */}
            <button
              className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); navigateTo('next') }}
            >
              <ChevronRight size={28} />
            </button>

            {/* 인디케이터 */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
