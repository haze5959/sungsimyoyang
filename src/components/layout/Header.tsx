import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '@/assets/misc/logo.JPG'

interface NavItem {
  label: string
  path: string
  children?: { label: string; path: string }[]
}

const navItems: NavItem[] = [
  {
    label: '요양원 소개',
    path: '/introduce',
    children: [
      { label: '원장님 인사말', path: '/introduce' },
      { label: '요양원 소개', path: '/introduce#facility' },
      { label: '찾아오시는 길', path: '/location' },
    ],
  },
  {
    label: '운영현황',
    path: '/guide',
    children: [
      { label: '요양원 운영현황', path: '/guide' },
      { label: '요양생활 사진', path: '/introduce#gallery' },
    ],
  },
  { label: '상담문의', path: '/consult' },
  { label: '찾아오시는 길', path: '/location' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  // 모바일 메뉴 열려있으면 body 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-1/2 z-50 w-full max-w-[1600px] -translate-x-1/2 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-lg shadow-primary-400/5 backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* Top bar - 데스크톱 전용 */}
      <div className="hidden border-b border-primary-100/50 bg-primary-50/60 lg:block">
        <div className="mx-auto flex w-full items-center justify-end gap-6 text-xs text-text-secondary" style={{ padding: '8px 24px' }}>
          <a href="tel:064-757-7780" className="flex items-center gap-1 transition-colors hover:text-primary-600">
            <Phone size={11} />
            064-757-7780
          </a>
          <Link to="/" className="transition-colors hover:text-primary-600">HOME</Link>
          <Link to="/location" className="transition-colors hover:text-primary-600">오시는 길</Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto w-full" style={{ padding: '0 24px' }}>
        <div className="flex h-16 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img src={logo} alt="성심노인요양원" className="h-10 w-10 rounded-lg object-cover lg:h-12 lg:w-12" />
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight text-primary-800 lg:text-base">제주 성심</span>
              <span className="text-xs font-medium leading-tight text-text-secondary lg:text-sm">노인요양원</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item, idx) => (
              <div
                key={item.path + idx}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`relative rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-600 shadow-sm shadow-primary-200/50'
                      : 'text-text-primary hover:bg-primary-50/80 hover:text-primary-600 hover:shadow-sm hover:shadow-primary-200/30'
                  }`}
                  style={{ padding: '10px 20px', margin: '0 4px' }}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary-400"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 mt-1 min-w-[180px] overflow-hidden rounded-xl border border-primary-100/50 bg-white py-2 shadow-xl shadow-primary-900/5"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block text-sm text-text-secondary transition-colors hover:bg-primary-50 hover:text-primary-600"
                          style={{ padding: '10px 16px' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA */}
            <Link
              to="/consult"
              className="rounded-full bg-gradient-to-r from-primary-400 to-primary-500 text-[15px] font-bold tracking-wide text-white shadow-lg shadow-primary-400/25 transition-all hover:shadow-xl hover:shadow-primary-400/30 hover:brightness-105"
              style={{ padding: '10px 24px', marginLeft: '16px' }}
            >
              상담문의
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-text-primary transition-colors hover:bg-primary-50 lg:hidden"
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-primary-100/50 bg-white lg:hidden"
          >
            <div className="space-y-1" style={{ padding: '16px 24px' }}>
              {navItems.map((item, idx) => (
                <div key={item.path + idx}>
                  <Link
                    to={item.path}
                    className={`block rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-text-primary hover:bg-primary-50'
                    }`}
                    style={{ padding: '12px 16px', marginBottom: '8px' }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-0.5 border-l-2 border-primary-100 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block rounded-lg text-sm text-text-secondary transition-colors hover:text-primary-600"
                          style={{ padding: '8px 12px', marginBottom: '4px' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <a
                  href="tel:064-757-7780"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-400 to-primary-500 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-400/25"
                >
                  <Phone size={18} />
                  전화 상담 064-757-7780
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
