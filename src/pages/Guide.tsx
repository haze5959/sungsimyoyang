import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SectionTitle from '@/components/ui/SectionTitle'

import memberOrg from '@/assets/misc/member_organization.JPG'

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
      '4. 상여,승급,상벌,채용의 결정 5. 대외업무 총괄',
      '6. 예산 준비 및 관리 7. 예산의 기획 및 집행 관리',
      '8. 노인 및 직원의 복리후생 문제',
      '9. 전문 상담 10. 시설 입 ․ 퇴소 관계서무',
      '11. 경리 회계의 관한 일체의 업무 관리',
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
      '2. 구충제 복용 실시 3. 약품 및 비품 관리',
      '4. 질병 예방 및 처지 5. 노인 병리 검사 계획 실시',
      '6. 각종 예방 접종 계획 및 실시',
      '7. 환자 발생 시 입원조치 및 간호 계획 실시',
      '8. 기록 보관 및 보관',
      '9. 약품 및 비품 대장 기록 및 관리',
    ],
    deputy: '시설장',
  },
  {
    position: '조리원',
    duties: [
      '1. 영양관리 및 식단 작성 2. 위생관리 및 식수관리',
      '3. 주방 식당의 물품 관리 및 청결유지',
      '4. 급식 및 영양급식 집행 관리',
    ],
    deputy: '시설장',
  },
  {
    position: '요양보호사',
    duties: [
      '1. 건강 및 여가생활지도',
      '2. 자원봉사자의 효율적 운영 3. 위생지도',
      '4. 물품관리(개별물품 관리) 5. 제공일지 작성,',
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
  return (
    <>
      <Helmet>
        <title>이용안내 - 제주 성심노인요양원</title>
        <meta name="description" content="제주 성심노인요양원 이용안내 - 운영현황, 조직구성, 비용안내, 운영규정" />
      </Helmet>

      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-2 text-sm font-medium text-primary-200">Guide</span>
            <h1 className="text-3xl font-bold text-white md:text-4xl">이용안내</h1>
          </motion.div>
        </div>
      </section>

      {/* ===== 운영현황 소개 ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Overview" title="성심노인요양원 운영현황" />

          <motion.div {...fadeUp} className="space-y-5 text-[15px] leading-[1.85] text-text-secondary md:text-base">
            <p>○ 우리 요양원은 요양을 필요로 하는 노인들이 입소하여 가정과 같은 주거여건과 급식ㆍ요양, 신체활동 지원 및 심신기능의 유지·향상을 위한 교육·훈련 등을 제공하는 노인복지법에 의한 사회복지시설입니다.</p>
            <p>○ 우리 요양원을 이용할 수 있는 대상은 65세 이상 노인 또는 치매·뇌혈관성 질환 등 노인성 질병을 가진 65세 미만자로서, 거동이 불편하여 장기요양 등급판정위원회로부터 장기요양등급 판정을 받은 자 입니다.</p>
          </motion.div>
        </div>
      </section>

      {/* ===== 시설의 규모 ===== */}
      <section className="bg-surface-dim py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Scale" title="시설의 규모" />
          <motion.p {...fadeUp} className="text-center text-text-secondary">
            ○ 홈페이지 &ldquo;요양원 소개&rdquo; 의 내용과 같습니다.
          </motion.p>
        </div>
      </section>

      {/* ===== 조직구성 ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
      <section className="bg-surface-dim py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div {...fadeUp} className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h3 className="mb-4 text-lg font-bold text-text-primary">■ 시설급여 및 비급여 항목별 비용</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                ○ 보건복지가족부령에서 매년마다 고시하는 수가에 의거하여 홈페이지 공지사항에 게시하고 있습니다.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h3 className="mb-4 text-lg font-bold text-text-primary">■ 요양원 이용자를 위한 보험 가입</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                ○ 요양원의 실수로 발생하는 사고에 대비하기 위하여 배상책임 보험과 화재보험에 가입하고 있으며, 홈페이지 공지사항에 게시하고 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 운영규정 ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Regulations" title="운영규정의 개요" />

          <div className="grid gap-4 sm:grid-cols-2">
            {regulations.map((reg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-primary-100/50 bg-white p-5 shadow-sm md:p-6"
              >
                <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-primary-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-600">
                    {idx + 1}
                  </span>
                  {reg.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-secondary">{reg.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 종사자 근무체계 ===== */}
      <section className="bg-surface-dim py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Staff" title="종사자 근무체계" />

          <motion.div {...fadeUp} className="mb-8 space-y-3 text-[15px] text-text-secondary">
            <p>○ 우리 요양원 직원의 직종별 인력배치 현황과 담당업무의 내용은 아래의 책임규정 (업무분장) 표와 같습니다.</p>
            <p>○ 주야간 근무의 편성 및 휴일 종사자 인력 등은 매월 근무편성표를 작성하여 게시판 에 게시하고 있습니다.</p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h3 className="mb-6 text-center text-xl font-bold text-text-primary md:text-2xl">
              책 임 규 정 (업무 분장)
            </h3>

            {/* 데스크톱 테이블 */}
            <div className="hidden overflow-hidden rounded-2xl border border-primary-100/50 shadow-sm md:block">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="w-28 border-b border-primary-100 px-4 py-3 text-center text-sm font-semibold text-primary-800">직 책</th>
                    <th className="border-b border-primary-100 px-4 py-3 text-center text-sm font-semibold text-primary-800">업 무 내 용</th>
                    <th className="w-28 border-b border-primary-100 px-4 py-3 text-center text-sm font-semibold text-primary-800">업무대행자</th>
                  </tr>
                </thead>
                <tbody>
                  {responsibilities.map((row, idx) => (
                    <tr key={idx} className="border-b border-primary-50 last:border-b-0">
                      <td className="bg-primary-50/30 px-4 py-3 text-center text-sm font-medium text-text-primary">{row.position}</td>
                      <td className="px-4 py-3">
                        <ul className="space-y-1">
                          {row.duties.map((duty, dIdx) => (
                            <li key={dIdx} className="text-sm text-text-secondary">{duty}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-text-secondary">{row.deputy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 모바일 카드 */}
            <div className="space-y-4 md:hidden">
              {responsibilities.map((row, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-base font-bold text-primary-700">{row.position}</h4>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                      대행: {row.deputy}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {row.duties.map((duty, dIdx) => (
                      <li key={dIdx} className="text-sm leading-relaxed text-text-secondary">{duty}</li>
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
