import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ backgroundColor: '#0f172a' }}>
      {/* 장식 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-transparent to-primary-800/30" />

      <div className="relative mx-auto" style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          
          {/* 요양원 정보 */}
          <div style={{ gridColumn: '1 / -1', maxWidth: '600px' }}>
            <h3 className="font-bold" style={{ fontSize: '20px', marginBottom: '16px' }}>제주 성심노인요양원</h3>
            <div style={{ width: '40px', height: '3px', backgroundColor: '#38bdf8', marginBottom: '24px', borderRadius: '4px' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#cbd5e1' }}>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: '1.6' }}>제주시 황새왓길 48 (화북이동)<br />(우편번호: 690-062)</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <span>TEL : 064-757-7780 &nbsp;|&nbsp; FAX : 064-757-7787</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <span>cbr-soon@hanmail.net</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={18} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <span>면회시간 : 매일 09:00 ~ 18:00</span>
              </p>
            </div>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider" style={{ fontSize: '15px', color: '#94a3b8', marginBottom: '20px' }}>바로가기</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/introduce" className="transition-colors hover:text-white" style={{ color: '#cbd5e1', fontSize: '14px', textDecoration: 'none' }}>
                요양원 소개
              </Link>
              <Link to="/guide" className="transition-colors hover:text-white" style={{ color: '#cbd5e1', fontSize: '14px', textDecoration: 'none' }}>
                운영현황
              </Link>
              <Link to="/consult" className="transition-colors hover:text-white" style={{ color: '#cbd5e1', fontSize: '14px', textDecoration: 'none' }}>
                상담문의
              </Link>
              <Link to="/location" className="transition-colors hover:text-white" style={{ color: '#cbd5e1', fontSize: '14px', textDecoration: 'none' }}>
                찾아오시는 길
              </Link>
            </nav>
          </div>

          {/* 운영 정보 */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider" style={{ fontSize: '15px', color: '#94a3b8', marginBottom: '20px' }}>운영 정보</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#cbd5e1' }}>
              <p>대표자 : 김 순희</p>
              <p>사업자등록번호 : 616-80-22591</p>
              <p>설립일 : 2010.01.16</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '64px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px' }}>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#64748b', letterSpacing: '0.05em' }}>
            COPYRIGHT (C) 2016 by 제주 성심노인요양원 ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}
