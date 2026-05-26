import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Award, ZoomIn, X } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

import memberOrg from '@/assets/misc/member_organization.JPG'
import evaluationReport from '@/assets/images/evaluation_report_2026.jpg'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6 },
}

const responsibilities = [
  {
    position: '시설장',
    duties: [
      '1. 제반 업무 총괄 관리 및 책임',
      '2. 운영방침 및 중요계획의 결정 지시 및 관리',
      '3. 각종 규정 및 규칙의 제정 등 결정',
      '4. 상여, 승급, 상벌, 채용의 결정',
      '5. 대외업무 총괄',
      '6. 예산 준비 및 관리',
      '7. 예산의 기획 및 집행 관리',
      '8. 노인 및 직원의 복리후생 문제',
      '9. 전문 상담',
      '10. 시설 입·퇴소 관계 서무',
      '11. 경리 회계에 관한 일체의 업무 관리',
      '12. 생활용품(후원물품 포함) 청구 및 배분',
    ],
    deputy: '사회복지사',
  },
  {
    position: '사회복지사',
    duties: [
      '1. 건강 및 여가생활지도',
      '2. 생활지도 계획 및 수립 및 관리',
      '3. 프로그램 작성 및 계획',
      '4. 개별 및 집단 생활지도 상담',
      '5. 자원봉사자의 개발 활용 및 일반업무 처리',
      '6. 전문 프로그램 개발 및 운영',
    ],
    deputy: '시설장',
  },
  {
    position: '간호사',
    duties: [
      '1. 보건 계획 및 평가(건강습관 조사, 건강진단)',
      '2. 구충제 복용 실시',
      '3. 약품 및 비품 관리',
      '4. 질병 예방 및 처치',
      '5. 노인 병리 검사 계획 실시',
      '6. 각종 예방 접종 계획 및 실시',
      '7. 환자 발생 시 입원조치 및 간호 계획 실시',
      '8. 기록 및 보관',
      '9. 약품 및 비품 대장 기록 및 관리',
    ],
    deputy: '시설장',
  },
  {
    position: '조리원',
    duties: [
      '1. 영양관리 및 식단 작성',
      '2. 위생관리 및 식수관리',
      '3. 주방 식당의 물품 관리 및 청결유지',
      '4. 급식 및 영양급식 집행 관리',
    ],
    deputy: '시설장',
  },
  {
    position: '요양보호사',
    duties: [
      '1. 건강 및 여가생활지도',
      '2. 자원봉사자의 효율적 운영',
      '3. 위생지도',
      '4. 물품관리(개별물품 관리)',
      '5. 제공일지 작성',
      '6. 배변일지, 일상생활 기록 및 보고',
    ],
    deputy: '교대 근무',
  },
]

const regulations = [
  {
    title: '이용계약의 체결',
    content: '우리 요양원의 서비스를 제공받기 위하여는 우리 요양원과 장기 요양급여 제공 계약을 체결하여야 합니다.',
  },
  {
    title: '입소자의 비용부담',
    content: '입소자는 노인장기요양보험법에 의거 보건복지가족부령으로 고시하는 등급별 수가에 따라 본인부담금을 부담하며, 이외에 서비스제공 계약에 따른 전동침대 등 복지용구 구입, 대여비용과 식사(간식)재료비, 소모품 등 비급여 대상 비용에 대하여는 입소자 본인이 전액 부담하여야 합니다.',
  },
  {
    title: '식사 및 간식',
    content: '우리 요양원은 1일 3식 및 간식을 입소자에게 제공합니다. 그러나 입소자의 상태에 따라 특별식(경관급식비 등)을 제공하는 경우의 비용은 입소자가 별도로 부담하여야 합니다.',
  },
  {
    title: '운영위원회 설치',
    content: '우리 요양원은 이용자 비용부담 사항 등 요양원 운영에 관한 주요내용을 심의하기 위하여 사회복지사, 입소자(가족) 대표, 관련단체 및 지역 사회 대표로 운영위원회를 구성, 운영하고 있습니다.',
  },
  {
    title: '면회시간',
    content: '매일 09:00시 부터 18:00시 까지이며, 외출, 외박시에는 사전에 요양원 에 신청하여야 합니다. 또한 우리 요양원에서 제공하는 음식물 이외의 음식물을 반입하고자 할 때에는 요양원과 협의 후에 반입하여야 합니다.',
  },
  {
    title: '위급시 조치',
    content: '입소자가 생명위급 상태라고 판단된 때에는 요양원의 협약병원인 인근 한마음병원 또는 보호자가 지정한 의료기관으로 즉시 후송하고 보호자에게 통보합니다.',
  },
  {
    title: '시설물 사용상의 주의사항',
    content: '입소자가 요양원의 시설물을 본래의 용도로 사용하지 않아 시설물이 파손 또는 멸실되는 경우에는 원상회복 의무가 발생합니다.',
  },
]

export default function Guide() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>운영현황 - 제주 성심노인요양원</title>
        <meta name="description" content="제주 성심노인요양원 운영현황 - 운영현황, 정기평가, 조직구성, 비용안내, 운영규정" />
        <link rel="canonical" href="http://sungsimyoyang.co.kr/guide" />
        <meta property="og:title" content="운영현황 - 제주 성심노인요양원" />
        <meta property="og:description" content="운영현황, 정기평가 A(최우수) 등급, 조직구성, 비용안내, 운영규정 안내." />
        <meta property="og:url" content="http://sungsimyoyang.co.kr/guide" />
        <meta name="twitter:title" content="운영현황 - 제주 성심노인요양원" />
        <meta name="twitter:description" content="운영현황, 정기평가 A(최우수) 등급, 조직구성, 비용안내, 운영규정 안내." />
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
            <span className="mb-2 text-sm font-medium text-primary-200" style={{ display: 'block', marginBottom: '8px' }}>Guide</span>
            <h1 className="text-3xl font-bold text-white md:text-4xl">운영현황</h1>
          </motion.div>
        </div>
      </section>

      {/* ===== 운영현황 소개 ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle subtitle="Overview" title="성심노인요양원 운영현황" />

          <motion.div {...fadeUp} className="space-y-5 text-[15px] leading-[1.85] text-text-secondary md:text-base">
            <p>○ 우리 요양원은 요양을 필요로 하는 노인들이 입소하여 가정과 같은 주거여건과 급식ㆍ요양, 신체활동 지원 및 심신기능의 유지·향상을 위한 교육·훈련 등을 제공하는 노인복지법에 의한 사회복지시설입니다.</p>
            <p>○ 우리 요양원을 이용할 수 있는 대상은 65세 이상 노인 또는 치매·뇌혈관성 질환 등 노인성 질병을 가진 65세 미만자로서, 거동이 불편하여 장기요양 등급판정위원회로부터 장기요양등급 판정을 받은 자 입니다.</p>
          </motion.div>
        </div>
      </section>

      {/* ===== 정기평가 ===== */}
      <section className="relative overflow-hidden bg-surface-dim" style={{ padding: '80px 0' }}>
        {/* 데코레이션 블러 */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-warm-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle subtitle="Evaluation" title="정기평가" />

          <motion.div {...fadeUp} style={{ maxWidth: '1080px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-primary-900/5 ring-1 ring-primary-100/60 md:grid-cols-5">
              {/* 정보 패널 */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 text-center text-white md:col-span-2" style={{ padding: '40px 32px' }}>
                {/* 도장 느낌의 데코 원 */}
                <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full border-[3px] border-white/10" />
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-36 w-36 rounded-full border-2 border-white/10" />

                <div className="relative flex flex-col items-center">
                  <div className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm" style={{ gap: '6px', padding: '6px 12px' }}>
                    <Award size={14} />
                    <span className="text-xs font-medium">국민건강보험공단 인증</span>
                  </div>

                  <div style={{ marginTop: '32px' }}>
                    <div className="text-sm text-primary-100">2025년도 정기평가</div>
                    <div className="flex items-end justify-center" style={{ gap: '8px', marginTop: '6px' }}>
                      <span className="font-black leading-none" style={{ fontSize: '88px' }}>A</span>
                      <span className="text-2xl font-bold" style={{ marginBottom: '10px' }}>최우수</span>
                    </div>
                  </div>

                  <div className="w-full border-t border-white/20" style={{ marginTop: '28px', paddingTop: '20px' }}>
                    <div className="text-xs text-primary-100" style={{ marginBottom: '6px' }}>총 점</div>
                    <div className="flex items-baseline justify-center" style={{ gap: '8px' }}>
                      <span className="text-4xl font-bold">90.65</span>
                      <span className="text-xs text-primary-100">/ 100</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <div className="text-xs text-primary-100" style={{ marginBottom: '6px' }}>전체평균</div>
                    <div className="text-lg font-semibold text-primary-100">83.05</div>
                  </div>

                  <div className="w-full border-t border-white/20 text-[11px] leading-relaxed text-primary-100/90" style={{ marginTop: '28px', paddingTop: '16px' }}>
                    <div>장기요양기관기호 · 15011000168</div>
                    <div style={{ marginTop: '2px' }}>통보일 · 2026년 3월 26일</div>
                  </div>
                </div>
              </div>

              {/* 통보서 이미지 */}
              <div className="flex items-center justify-center bg-gray-50 md:col-span-3" style={{ padding: '40px 32px' }}>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group relative w-full cursor-zoom-in"
                  style={{ maxWidth: '420px' }}
                  onClick={() => setLightboxOpen(true)}
                  aria-label="평가결과 통보서 크게 보기"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-200/80">
                    <img
                      src={evaluationReport}
                      alt="2025년도 장기요양기관 정기평가 결과 통보서"
                      className="block w-full"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div
                      className="pointer-events-none absolute left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-white/95 text-xs font-medium text-text-primary opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
                      style={{ gap: '6px', padding: '8px 14px', bottom: '16px' }}
                    >
                      <ZoomIn size={14} />
                      크게 보기
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 라이트박스 */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                onClick={() => setLightboxOpen(false)}
                aria-label="닫기"
              >
                <X size={24} />
              </button>
              <motion.img
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                src={evaluationReport}
                alt="2025년도 장기요양기관 정기평가 결과 통보서"
                className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ===== 조직구성 ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle subtitle="Organization" title="요양원의 조직구성" />
          <motion.div {...fadeUp} className="flex justify-center">
            <img
              src={memberOrg}
              alt="조직구성도"
              className="max-w-full rounded-2xl shadow-lg md:max-w-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== 비용/보험 ===== */}
      <section className="bg-surface-dim" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
            <motion.div {...fadeUp} className="rounded-2xl bg-white shadow-sm" style={{ padding: '24px 16px', margin: '8px' }}>
              <h3 className="text-lg font-bold text-text-primary" style={{ marginBottom: '20px' }}>■ 시설급여 및 비급여 항목별 비용</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                ○ 보건복지가족부령에서 매년마다 고시하는 수가에 의거하여 홈페이지 공지사항에 게시하고 있습니다.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="rounded-2xl bg-white shadow-sm" style={{ padding: '24px 16px', margin: '8px' }}>
              <h3 className="text-lg font-bold text-text-primary" style={{ marginBottom: '20px' }}>■ 요양원 이용자를 위한 보험 가입</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                ○ 요양원의 실수로 발생하는 사고에 대비하기 위하여 배상책임 보험과 화재보험에 가입하고 있으며, 홈페이지 공지사항에 게시하고 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 운영규정 ===== */}
      <section style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle subtitle="Regulations" title="운영규정의 개요" />

          <div className="grid sm:grid-cols-2" style={{ gap: '24px' }}>
            {regulations.map((reg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-primary-100/50 bg-white shadow-sm"
                style={{ padding: '24px 16px', margin: '8px' }}
              >
                <h4 className="flex items-center text-sm font-bold text-primary-700" style={{ gap: '8px', marginBottom: '12px' }}>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-600">
                    {idx + 1}
                  </span>
                  {reg.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-secondary" style={{ lineHeight: '1.7' }}>{reg.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 종사자 근무체계 ===== */}
      <section className="bg-surface-dim" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6" style={{ margin: '0 auto' }}>
          <SectionTitle subtitle="Staff" title="종사자 근무체계" />

          <motion.div {...fadeUp} className="mb-8 space-y-3 text-[15px] text-text-secondary">
            <p>○ 우리 요양원 직원의 직종별 인력배치 현황과 담당업무의 내용은 아래의 책임규정 (업무분장) 표와 같습니다.</p>
            <p>○ 주야간 근무의 편성 및 휴일 종사자 인력 등은 매월 근무편성표를 작성하여 게시판 에 게시하고 있습니다.</p>
          </motion.div>

          <motion.div {...fadeUp} style={{ marginTop: '80px', padding: '0 16px' }}>
            <h3 className="text-center text-xl font-bold text-text-primary md:text-2xl" style={{ marginBottom: '32px' }}>
              책 임 규 정 (업무 분장)
            </h3>

            {/* 데스크톱 테이블 */}
            <div className="hidden md:block" style={{ borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)', backgroundColor: '#FFFFFF' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr>
                    <th style={{ width: '160px', padding: '18px 24px', backgroundColor: '#F8FAFC', color: '#0F172A', fontWeight: '700', fontSize: '15px', textAlign: 'center', borderBottom: '2px solid #E2E8F0', borderRight: '1px solid #F1F5F9' }}>직 책</th>
                    <th style={{ padding: '18px 24px', backgroundColor: '#F8FAFC', color: '#0F172A', fontWeight: '700', fontSize: '15px', textAlign: 'center', borderBottom: '2px solid #E2E8F0', borderRight: '1px solid #F1F5F9' }}>업 무 내 용</th>
                    <th style={{ width: '160px', padding: '18px 24px', backgroundColor: '#F8FAFC', color: '#0F172A', fontWeight: '700', fontSize: '15px', textAlign: 'center', borderBottom: '2px solid #E2E8F0' }}>업무대행자</th>
                  </tr>
                </thead>
                <tbody>
                  {responsibilities.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: idx === responsibilities.length - 1 ? 'none' : '1px solid #F1F5F9' }}>
                      <td style={{ padding: '24px', color: '#1E293B', fontWeight: '700', fontSize: '15px', textAlign: 'center', backgroundColor: '#FAFAF9', borderRight: '1px solid #F1F5F9' }}>{row.position}</td>
                      <td style={{ padding: '24px 32px', color: '#475569', borderRight: '1px solid #F1F5F9' }}>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {row.duties.map((duty, dIdx) => (
                            <li key={dIdx} style={{ fontSize: '15px', lineHeight: '1.6' }}>{duty}</li>
                          ))}
                        </ul>
                      </td>
                      <td style={{ padding: '24px', color: '#64748B', fontSize: '14px', textAlign: 'center', fontWeight: '500' }}>{row.deputy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 모바일 카드 */}
            <div className="md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
              {responsibilities.map((row, idx) => (
                <div key={idx} style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.01)', border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #F1F5F9' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A', margin: 0 }}>{row.position}</h4>
                    <span style={{ fontSize: '13px', color: '#64748B', backgroundColor: '#F8FAFC', padding: '6px 12px', borderRadius: '20px', fontWeight: '600', border: '1px solid #E2E8F0' }}>대행: {row.deputy}</span>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, paddingLeft: '20px', listStyleType: 'disc', color: '#475569' }}>
                    {row.duties.map((duty, dIdx) => (
                      <li key={dIdx} style={{ fontSize: '15px', lineHeight: '1.6' }}>{duty}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
