import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-950 text-white">
      {/* 장식 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-transparent to-primary-800/30" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 요양원 정보 */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold">제주 성심노인요양원</h3>
            <div className="section-divider mb-6" />
            <div className="space-y-3 text-sm text-primary-200">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-400" />
                제주시 황새왓길 48(화북이동)(우편번호: 690-062)
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary-400" />
                TEL : 064-757-7780 &nbsp;|&nbsp; FAX : 064-757-7787
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary-400" />
                cbr-soon@hanmail.net
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-primary-400" />
                면회시간 : 매일 09:00 ~ 18:00
              </p>
            </div>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-300">바로가기</h4>
            <nav className="space-y-2">
              <Link to="/introduce" className="block text-sm text-primary-200 transition-colors hover:text-white">
                요양원 소개
              </Link>
              <Link to="/guide" className="block text-sm text-primary-200 transition-colors hover:text-white">
                이용안내
              </Link>
              <Link to="/consult" className="block text-sm text-primary-200 transition-colors hover:text-white">
                상담문의
              </Link>
              <Link to="/location" className="block text-sm text-primary-200 transition-colors hover:text-white">
                찾아오시는 길
              </Link>
            </nav>
          </div>

          {/* 운영 정보 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-300">운영 정보</h4>
            <div className="space-y-2 text-sm text-primary-200">
              <p>대표자 : 김 순희</p>
              <p>사업자등록번호 : 616-80-22591</p>
              <p>설립일 : 2010.01.16</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-primary-800/50 pt-6">
          <p className="text-center text-xs text-primary-400">
            COPYRIGHT (C) 2016 by 제주 성심노인요양원 ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}
