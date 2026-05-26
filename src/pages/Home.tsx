import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Phone, Heart, Shield, Users, Home as HomeIcon, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

// import heroImg1 from '@/assets/images/sungsimIntro01.JPG'
import heroImg3 from '@/assets/images/sungsimIntro03.jpg'
import heroImg4 from '@/assets/images/sungsimIntro04.jpg'
import heroImg5 from '@/assets/images/sungsimIntro05.jpg'
import heroImg6 from '@/assets/images/sungsimIntro06.jpg'

import img2 from '@/assets/images/2.JPG'
import img9 from '@/assets/images/9.JPG'
import img14 from '@/assets/images/14.JPG'
import img15 from '@/assets/images/15.JPG'

const heroImages = [heroImg3, heroImg4, heroImg5, heroImg6]

const features = [
  {
    icon: Heart,
    title: '성심(誠心)의 보살핌',
    desc: '전문적인 교육을 받은 사회복지사, 요양보호사들이 성심과 전문성을 기본으로 정성을 다한 보살핌을 추구합니다.',
  },
  {
    icon: HomeIcon,
    title: '쾌적한 독립가옥',
    desc: '한적한 제주 시내 외곽에 어르신들의 정서에 맞추어 설계된 농촌형 독립가옥 형태의 요양원입니다.',
  },
  {
    icon: Shield,
    title: '건강·질병 관리',
    desc: '인근 종합병원과 진료협력 체계를 구축하고 최신 간호장비와 물리치료 기구를 활용하여 건강관리에 만전을 기합니다.',
  },
  {
    icon: Users,
    title: '맞춤형 프로그램',
    desc: '어르신들의 건강상태에 맞추어 수준별 맞춤형 프로그램을 진행하고 있습니다.',
  },
]

const galleryImages = [
  { src: img14, alt: '요양원 전경 1' },
  { src: img2, alt: '요양원 전경 2' },
  { src: img9, alt: '요양원 전경 3' },
  { src: img15, alt: '요양원 전경 4' },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <>
      <Helmet>
        <title>제주 성심노인요양원 - 정부지정 노인전문 요양기관</title>
        <meta name="description" content="제주 성심노인요양원은 2010년 설립된 정부지정 노인전문 요양기관으로, 제주시 황새왓길 48에 위치해 있습니다." />
        <link rel="canonical" href="http://sungsimyoyang.co.kr/" />
        <meta property="og:title" content="제주 성심노인요양원 - 정부지정 노인전문 요양기관" />
        <meta property="og:description" content="2010년 설립된 정부지정 노인전문 요양기관. 제주시 황새왓길 48에 위치해 있습니다." />
        <meta property="og:url" content="http://sungsimyoyang.co.kr/" />
        <meta name="twitter:title" content="제주 성심노인요양원 - 정부지정 노인전문 요양기관" />
        <meta name="twitter:description" content="2010년 설립된 정부지정 노인전문 요양기관. 제주시 황새왓길 48에 위치해 있습니다." />
      </Helmet>

      {/* ===== Hero Section ===== */}
      <section className="relative h-screen min-h-[600px] overflow-hidden" id="hero">
        {/* Background slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt="성심노인요양원"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="hero-gradient absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full items-center justify-center" style={{ paddingTop: '100px' }}>
          <div className="w-full max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto flex max-w-3xl flex-col items-center text-center"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-8 inline-flex items-center justify-center rounded-full bg-primary-500/90 text-[15px] font-bold tracking-wide text-white shadow-lg backdrop-blur-sm"
                style={{ padding: '10px 24px' }}
              >
                정부지정 노인전문 요양기관
              </motion.span>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl" style={{ marginBottom: '32px' }}>
                성심(誠心)을 다하는
                <br />
                <span className="text-primary-300">어르신의 행복한 쉼터</span>
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-primary-100/90 sm:text-lg" style={{ marginBottom: '48px' }}>
                경로효친의 실천현장으로 가정과 같은 분위기에서 어르신들의 행복한 쉼터가 되고,
                부양가족의 정서적‧경제적 부담을 덜어드리는 안심할 수 있는 요양원입니다.
              </p>
              <div className="flex flex-col items-center justify-center sm:flex-row" style={{ gap: '24px' }}>
                <Link
                  to="/introduce"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-lg font-bold text-primary-700 shadow-xl transition-all hover:bg-primary-50 hover:shadow-2xl"
                  style={{ padding: '14px 28px' }}
                >
                  요양원 소개
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:064-757-7780"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/10 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-xl"
                  style={{ padding: '14px 28px' }}
                >
                  <Phone size={18} />
                  상담 전화 연결
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
          <button onClick={prevSlide} className="rounded-full bg-white/15 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/25" aria-label="이전">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
                aria-label={`슬라이드 ${idx + 1}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="rounded-full bg-white/15 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/25" aria-label="다음">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== Features Section ===== */}
      <section className="relative flex flex-col items-center" id="features" style={{ padding: '80px 0' }}>
        <div className="w-full max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle
            subtitle="Why Sungsim"
            title="성심노인요양원을 선택해야 하는 이유"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '32px' }}>
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-hover group flex flex-col items-center rounded-2xl border border-primary-100/50 bg-white text-center shadow-sm"
                style={{ padding: '24px 16px', margin: '8px' }}
              >
                <div 
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-500 transition-colors group-hover:from-primary-400 group-hover:to-primary-500 group-hover:text-white"
                  style={{ marginBottom: '16px' }}
                >
                  <feature.icon size={24} />
                </div>
                <h3 
                  className="text-lg font-bold text-text-primary"
                  style={{ marginBottom: '12px' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-sm text-text-secondary"
                  style={{ lineHeight: '1.7' }}
                >
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Gallery Preview Section ===== */}
      <section className="bg-surface-dim flex flex-col items-center" id="gallery-preview" style={{ padding: '80px 0' }}>
        <div className="w-full max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle
            subtitle="Gallery"
            title="성심노인요양원 전경"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginTop: '40px' }}
          >
            <Link
              to="/introduce#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-primary-200 text-sm font-medium text-primary-600 transition-all hover:bg-primary-50"
              style={{ marginTop: '56px', padding: '12px 28px', display: 'inline-flex' }}
            >
              더 많은 사진 보기
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400" style={{ padding: '80px 0' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/20" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10" />
        </div>
        <div className="relative w-full max-w-4xl px-4 text-center sm:px-6" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%', textAlign: 'center' }}
          >
            <h2 className="text-3xl font-extrabold text-white md:text-4xl" style={{ textAlign: 'center', marginBottom: '24px' }}>
              상담문의는 아래 전화번호나 E-Mail로 부탁드립니다.
            </h2>
            <p className="text-lg text-primary-100" style={{ marginBottom: '40px' }}>
              궁금한 점이 있으시면 언제든지 연락 주세요.
            </p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href="tel:064-757-7780"
                className="inline-flex items-center gap-3 rounded-full bg-white text-2xl font-bold text-primary-600 shadow-xl transition-all hover:shadow-2xl hover:brightness-105"
                style={{ padding: '16px 32px' }}
              >
                <Phone size={24} />
                064-757-7780
              </a>
              <Link
                to="/consult"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/40 bg-white/10 text-2xl font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-xl"
                style={{ padding: '16px 32px' }}
              >
                상담문의 바로가기
                <ArrowRight size={22} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
