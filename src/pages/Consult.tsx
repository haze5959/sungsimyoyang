import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

import businesscard from '@/assets/misc/businesscard.JPG'

const contactInfo = [
  { icon: Phone, label: '전화번호', value: '064-757-7780', href: 'tel:064-757-7780' },
  { icon: Phone, label: '핸드폰', value: '010-3134-2503', href: 'tel:010-3134-2503' },
  { icon: Mail, label: 'E-Mail', value: 'cbr-soon@hanmail.net', href: 'mailto:cbr-soon@hanmail.net' },
  { icon: Phone, label: 'FAX', value: '064-757-7787', href: undefined },
  { icon: MapPin, label: '주소', value: '제주시 황새왓길 48(화북이동)', href: undefined },
  { icon: Clock, label: '면회시간', value: '매일 09:00 ~ 18:00', href: undefined },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6 },
}

export default function Consult() {
  return (
    <>
      <Helmet>
        <title>상담문의 - 제주 성심노인요양원</title>
        <meta name="description" content="제주 성심노인요양원 상담문의 - 전화 064-757-7780" />
      </Helmet>

      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/20" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-2 text-sm font-medium text-primary-200" style={{ display: 'block', marginBottom: '8px' }}>Contact</span>
            <h1 className="text-3xl font-bold text-white md:text-4xl">상담문의</h1>
          </motion.div>
        </div>
      </section>

      {/* ===== 상담안내 ===== */}
      <section className="bg-surface-dim" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle
            subtitle="Contact Us"
            title="상담문의는 아래 전화번호나 E-Mail로 부탁드립니다."
          />

          {/* 연락처 카드 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card-hover rounded-2xl border border-primary-100/50 bg-white shadow-sm"
                style={{ padding: '24px 16px', margin: '8px' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-500" style={{ marginBottom: '16px' }}>
                  <item.icon size={20} />
                </div>
                <p className="text-xs font-medium text-text-muted" style={{ marginBottom: '4px' }}>{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-base font-semibold text-text-primary transition-colors hover:text-primary-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-text-primary">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* 명함 이미지 */}
          <motion.div {...fadeUp} className="flex justify-center" style={{ marginTop: '48px' }}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={businesscard}
                alt="명함"
                className="max-w-md"
              />
            </div>
          </motion.div>

          {/* CTA 전화 */}
          <motion.div {...fadeUp} className="text-center" style={{ marginTop: '48px', textAlign: 'center' }}>
            <a
              href="tel:064-757-7780"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 text-lg font-bold text-white shadow-xl shadow-primary-400/25 transition-all hover:shadow-2xl hover:brightness-105"
              style={{ padding: '16px 32px' }}
            >
              <MessageCircle size={22} />
              지금 바로 전화 상담하기
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
