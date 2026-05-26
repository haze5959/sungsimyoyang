import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Navigation } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

import mapImg from '@/assets/misc/map.JPG'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6 },
}

export default function Location() {
  return (
    <>
      <Helmet>
        <title>찾아오시는 길 - 제주 성심노인요양원</title>
        <meta name="description" content="제주 성심노인요양원 찾아오시는 길 - 제주시 황새왓길 48(화북이동)" />
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
            <span className="mb-2 text-sm font-medium text-primary-200" style={{ display: 'block', marginBottom: '8px' }}>Location</span>
            <h1 className="text-3xl font-bold text-white md:text-4xl">찾아오시는 길</h1>
          </motion.div>
        </div>
      </section>

      {/* ===== 지도 ===== */}
      <section className="bg-surface-dim" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle subtitle="Map" title="찾아오시는 길" />

          {/* 카카오맵 임베드 */}
          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl shadow-lg" style={{ marginBottom: '40px' }}>
            <iframe
              src="https://map.kakao.com/link/map/성심노인요양원,33.5160,126.5630"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="성심노인요양원 위치"
              className="w-full"
            />
          </motion.div>

          {/* 기존 지도 이미지도 보여줌 */}
          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl shadow-lg" style={{ marginBottom: '40px' }}>
            <img src={mapImg} alt="찾아오시는 길 지도" className="w-full" />
          </motion.div>

          {/* 교통 안내 */}
          <motion.div {...fadeUp} className="rounded-2xl border border-primary-100/50 bg-white shadow-sm" style={{ padding: '24px 16px', margin: '8px' }}>
            <div className="flex items-start" style={{ gap: '16px' }}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                <Navigation size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary" style={{ marginBottom: '8px' }}>교통 안내</h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  한마음 병원과 하나로 마트 중간 지점 상호네 숯불갈비 골목으로 500m 직진방향.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 주소/연락처 카드 */}
          <div className="grid sm:grid-cols-2" style={{ gap: '24px', marginTop: '40px' }}>
            <motion.div {...fadeUp} className="card-hover rounded-2xl border border-primary-100/50 bg-white shadow-sm" style={{ padding: '24px 16px', margin: '8px' }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-500" style={{ marginBottom: '12px' }}>
                <MapPin size={20} />
              </div>
              <p className="text-xs font-medium text-text-muted" style={{ marginBottom: '4px' }}>주소</p>
              <p className="text-sm font-semibold text-text-primary">
                (우편번호 63306) 제주특별자치도 제주시 황새왓길 48 (화북이동)
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="card-hover rounded-2xl border border-primary-100/50 bg-white shadow-sm" style={{ padding: '24px 16px', margin: '8px' }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-500" style={{ marginBottom: '12px' }}>
                <Phone size={20} />
              </div>
              <p className="text-xs font-medium text-text-muted" style={{ marginBottom: '4px' }}>연락처</p>
              <p className="text-sm font-semibold text-text-primary">
                TEL : <a href="tel:064-757-7780" className="text-primary-600 hover:underline">064-757-7780</a>
              </p>
              <p className="text-sm text-text-secondary">FAX : 064-757-7787</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
