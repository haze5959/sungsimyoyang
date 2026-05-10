import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SectionTitle from '@/components/ui/SectionTitle'
import ImageGallery from '@/components/ui/ImageGallery'

import chiefImg from '@/assets/misc/chiefImg.jpg'

// 전경 사진
import img14 from '@/assets/images/14.JPG'
import img2 from '@/assets/images/2.JPG'
import img9 from '@/assets/images/9.JPG'
import img15 from '@/assets/images/15.JPG'

// 내부 시설 사진
import img16 from '@/assets/images/16.JPG'
import img17 from '@/assets/images/17.JPG'
import img11 from '@/assets/images/11.JPG'
import img18 from '@/assets/images/18.JPG'

// 프로그램 사진
import pro01 from '@/assets/programs/pro01.png'
import pro02 from '@/assets/programs/pro02.png'
import pro03 from '@/assets/programs/pro03.png'
import pro04 from '@/assets/programs/pro04.png'
import pro05 from '@/assets/programs/pro05.png'
import pro06 from '@/assets/programs/pro06.png'
import pro07 from '@/assets/programs/pro07.png'
import pro08 from '@/assets/programs/pro08.png'
import pro09 from '@/assets/programs/pro09.png'
import pro10 from '@/assets/programs/pro10.png'

// 외부자원 연계 활동
import pro11 from '@/assets/programs/pro11.png'
import pro12 from '@/assets/programs/pro12.png'
import pro13 from '@/assets/programs/pro13.png'
import pro14 from '@/assets/programs/pro14.png'
import pro15 from '@/assets/programs/pro15.png'
import pro16 from '@/assets/programs/pro16.png'

// 요양생활 사진
import img1 from '@/assets/images/1.JPG'
import img3 from '@/assets/images/3.JPG'
import img4 from '@/assets/images/4.JPG'
import img5 from '@/assets/images/5.JPG'
import img6 from '@/assets/images/6.JPG'
import img7 from '@/assets/images/7.JPG'
import img8 from '@/assets/images/8.JPG'
import img10 from '@/assets/images/10.JPG'
import img12 from '@/assets/images/12.JPG'
import img13 from '@/assets/images/13.JPG'
import heroImg3 from '@/assets/images/sungsimIntro03.jpg'
import heroImg4 from '@/assets/images/sungsimIntro04.jpg'

const facilityInfo = [
  { label: '시설명', value: '성심노인요양원' },
  { label: '고유번호', value: '616-80-22591' },
  { label: '주소', value: '(우편번호 63306) 제주특별자치도 제주시 황새왓길 48 (화북이동)' },
  { label: '연락처', value: '사무실: 064-757-7780\n핸드폰: 010-3134-2503\nE-Mail: cbr-soon@hanmail.net\n팩스: 064-757-7787' },
  { label: '설치일시', value: '2010.01.16' },
  { label: '종사자수', value: '10명' },
  { label: '정원', value: '16명' },
  { label: '대지면적', value: '1,975m²' },
  { label: '건물면적', value: '382.44m²(신축년도: 2010년)' },
]

const exteriorImages = [
  { src: img14, alt: '요양원 전경 1' },
  { src: img2, alt: '요양원 전경 2' },
  { src: img9, alt: '요양원 전경 3' },
  { src: img15, alt: '요양원 전경 4' },
]

const interiorImages = [
  { src: img16, alt: '내부 시설 1' },
  { src: img17, alt: '내부 시설 2' },
  { src: img11, alt: '내부 시설 3' },
  { src: img18, alt: '내부 시설 4' },
]

const programs = [
  { title: '노래교실', desc: '흘러간 노래를 회상하며 불러보기', image: pro01 },
  { title: '웃음치료', desc: '잠재되었던 웃음을 만끽하며 건강박수 및 노래를 부르며 신체활동 증강에 도움', image: pro02 },
  { title: '생활체조', desc: '신체 감각 및 뇌기능을 자극하여 치매예방 및 관리효과를 기대한다.', image: pro03 },
  { title: '발맛사지', desc: '혈액순환에 도움을 드린다.', image: pro04 },
  { title: '붓글씨', desc: '심리적으로 안정감 유도 및 손 근력운동 강화도움', image: pro05 },
  { title: '색칠하기', desc: '정서적으로 안정감을 찾고 집중력을 강화시킬 수 있다.', image: pro06 },
  { title: '콩고르기', desc: '어르신들과의 교감 및 공동체생활 증강, 손가락 근육 이완 도움', image: pro07 },
  { title: '동화구연', desc: '익숙한 전래동화를 들려 드리며 이야기 나누기.', image: pro08 },
  { title: '원예치료', desc: '꽃을 직접 심어 보면서 옛 추억을 체험 해보기', image: pro09 },
  { title: '기타봉사단', desc: '기타를 치면서 대중가요 따라 부르기를 통해 치매예방에 도움.', image: pro10 },
]

const externalImages = [
  { src: pro11, alt: '외부자원 연계 활동 1' },
  { src: pro12, alt: '외부자원 연계 활동 2' },
  { src: pro13, alt: '외부자원 연계 활동 3' },
  { src: pro14, alt: '외부자원 연계 활동 4' },
  { src: pro15, alt: '외부자원 연계 활동 5' },
  { src: pro16, alt: '외부자원 연계 활동 6' },
]

const lifeImages = [
  { src: img1, alt: '요양생활 1' },
  { src: img2, alt: '요양생활 2' },
  { src: img3, alt: '요양생활 3' },
  { src: img4, alt: '요양생활 4' },
  { src: img5, alt: '요양생활 5' },
  { src: img6, alt: '요양생활 6' },
  { src: img7, alt: '요양생활 7' },
  { src: img8, alt: '요양생활 8' },
  { src: img9, alt: '요양생활 9' },
  { src: img10, alt: '요양생활 10' },
  { src: img11, alt: '요양생활 11' },
  { src: img12, alt: '요양생활 12' },
  { src: img13, alt: '요양생활 13' },
  { src: img14, alt: '요양생활 14' },
  { src: img15, alt: '요양생활 15' },
  { src: img17, alt: '요양생활 16' },
  { src: heroImg3, alt: '요양생활 17' },
  { src: heroImg4, alt: '요양생활 18' },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6 },
}

export default function Introduce() {
  return (
    <>
      <Helmet>
        <title>요양원 소개 - 제주 성심노인요양원</title>
        <meta name="description" content="제주 성심노인요양원은 2010년 설립된 정부지정 노인전문 요양기관입니다." />
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
            <span className="mb-2 text-sm font-medium text-primary-200">About Us</span>
            <h1 className="text-3xl font-bold text-white md:text-4xl">요양원 소개</h1>
          </motion.div>
        </div>
      </section>

      {/* ===== 원장님 인사말 ===== */}
      <section className="py-16 md:py-24" id="greeting">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Greeting" title="원장님 인사말" />

          <motion.div {...fadeUp} className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
            <div className="w-full shrink-0 md:w-48">
              <img
                src={chiefImg}
                alt="원장님"
                className="mx-auto w-36 rounded-2xl shadow-lg md:mx-0 md:w-full"
              />
            </div>
            <div className="space-y-5 text-[15px] leading-[1.85] text-text-secondary md:text-base">
              <p>우리나라는 다른 나라에 비해 특히나 급속히 고령사회로 접어드는 와중에 노인들의 가정, 사회적 소외감 증대, 미흡한 노후 생활비와 건강유지의 어려움이 증폭되면서, 노인문제는 단순히 가족만의 것이 아니라 국가적인 문제로 대두되어, 정부에서는 그 대책으로 2008년 7월 부터 노인장기요양제도를 시행하고 있습니다.</p>
              <p>이 제도는 국가지원을 바탕으로 노인에 대한 신체활동과 인지능력의 유지, 행동변화 치료와 관리 등을 함으로써, 노인들의 노후생활 안정을 도모하고 보호자 가정의 일상생활 유지를 보장하는 것이 목적입니다.</p>
              <p>성심노인요양원은 2010년 설립된 정부지정 노인전문 요양기관으로, 전문적인 교육을 받은 사회복지사, 요양보호사들이 이름 그대로 성심과 전문성을 기본으로 정성을 다한 보살핌을 추구하면서, 만족도 높은 다양한 각종 요양  서비스를 제공하고 지속적으로 건강, 질병관리에 심혈을 기울이고 있으며, 시설소개서에서 강조하는 바와 같이 다른 요양원과는 차별화된 입소자를 위한 노인복지 시설입니다.</p>
              <p>저희 요양원은 경로효친의 실천현장으로 가정과 같은 분위기에서 어르신들의 행복한 쉼터가 되고, 부양가족의 정서적‧경제적 부담을 덜어드리는 안심할 수 있는 요양원이 되도록 혼신의 노력을 다하고 있습니다.</p>
              <p className="font-medium text-text-primary">감사합니다.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 시설소개서 ===== */}
      <section className="bg-surface-dim py-16 md:py-24" id="facility">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Facility" title="시설소개서" />

          <motion.div {...fadeUp} className="space-y-5 text-[15px] leading-[1.85] text-text-secondary md:text-base">
            <p>우리 주변에는 부모님 또는 친지분께서 노인성 질병, 치매, 파킨슨 등으로 혼자서는 일상생활을 수행하기 어려운 분들이 많이 계시고, 이들과 생활하는 가정 구성원에게는 정서적, 시간적으로 큰 부담이 되는 경우가 많습니다.</p>
            <p>저희 요양원은 정부지정 노인전문 요양기관으로, 24시간 어르신과 함께 생활하며 숙식, 목욕, 위생, 산책 등 일상생활 지원서비스를 제공하고 있으며, 아래와 같이 다른 요양원과는 차별화된 입소자를 위한 노인복지 시설입니다.</p>

            <div className="my-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-3">
                <span className="mt-1 shrink-0 rounded bg-primary-100 px-2 py-0.5 text-xs font-bold text-primary-700">01</span>
                <p>저희 요양원은 번잡한 도심 건물(빌딩)의 부속시설인 다른 요양원과는 달리 교통이 원활하면서도 한적한 제주 시내 외곽에 어르신들의 정서에 맞추어 설계된 농촌형 독립가옥 형태의 요양원으로, 입소 어르신들의 옥외활동과 보호자들을 위한 잔디 마당과 원두막, 텃밭과 산책로, 주차장을 갖추고 있습니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 shrink-0 rounded bg-primary-100 px-2 py-0.5 text-xs font-bold text-primary-700">02</span>
                <p>저희 요양원은 어르신들의 눈높이에 맞추고 각종 안전장치와 목욕실, 화장실, 간호 및 케어설비를 갖춘 특화된 노인복지 시설로서, 입소 어르신들이 냉·난방이 완비 된 넓고 쾌적한 공간에서 편안하게 생활하실 수 있도록 생활공간을 구성하였으며, 어르신들을 2인실 또는 3인실에 모시고 있습니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 shrink-0 rounded bg-primary-100 px-2 py-0.5 text-xs font-bold text-primary-700">03</span>
                <p>저희 요양원은 인근의 종합병원인 한마음병원과 진료협력 체계를 구축하고 최신 간호장비와 물리치료 기구를 활용하여 지속적으로 어르신들의 건강, 질병관리에 만전을 기하고 있으며, 텃밭운영을 통하여 직접 재배한 고추, 가지, 상추, 숫갓 등 신선한 먹거리를 이용하여 어르신들께 건강한 식사를 제공하고 있습니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 shrink-0 rounded bg-primary-100 px-2 py-0.5 text-xs font-bold text-primary-700">04</span>
                <p>저희 요양원에서는 어르신들의 건강상태에 맞추어 수준별 맞춤형 프로그램을 진행 하고 있으며, 운영하는 주요 프로그램은 원예교실, 생활체조, 원내산책 등 여가· 운동치료와 자원봉사자를 통한 민요, 노래교실, 발맛사지 등 레크레이션, 치매예방을 위한 웃음치료, 서예교실, 미술치료, 동화구연 등이 있습니다.</p>
              </div>
            </div>

            <p>또한 미용봉사 등 노력 봉사자분들께서 어르신 케어에 많은 도움을 주고 계시며, 입소 어르신들의 정서적 성장과 안정을 위해 종교활동도 지원하고 있습니다.</p>
          </motion.div>
        </div>
      </section>

      {/* ===== 이용대상자 및 시설규모 ===== */}
      <section className="py-16 md:py-24" id="info">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Information" title="성심노인요양원 이용대상자 및 시설의 규모" />

          <motion.div {...fadeUp} className="mb-6 text-center">
            <p className="inline-block rounded-xl bg-primary-50 px-5 py-3 text-sm font-medium text-primary-700 md:text-base">
              <strong>이용 대상자 :</strong> 장기요양 등급 1등급 ~ 5등급 판정을 받으신 어르신
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              (3등급 ~ 5등급의 경우에는 급여종류에 시설급여가 포함되어 있어야 합니다).
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl border border-primary-100/50 bg-white shadow-sm">
            <table className="w-full">
              <tbody>
                {facilityInfo.map((row, idx) => (
                  <tr key={idx} className="border-b border-primary-50 last:border-b-0">
                    <th className="w-28 bg-primary-50/60 px-4 py-3.5 text-left text-sm font-semibold text-primary-800 sm:w-36 md:px-6">
                      {row.label}
                    </th>
                    <td className="px-4 py-3.5 text-sm text-text-secondary whitespace-pre-line md:px-6">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ===== 전경 사진 ===== */}
      <section className="bg-surface-dim py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Exterior" title="성심노인요양원 전경" />
          <ImageGallery images={exteriorImages} columns={4} />
        </div>
      </section>

      {/* ===== 내부 시설 ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Interior" title="요양원 내부 시설" />
          <ImageGallery images={interiorImages} columns={4} />
        </div>
      </section>

      {/* ===== 프로그램 활동 ===== */}
      <section className="bg-surface-dim py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Programs" title="요양원 프로그램 활동" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {programs.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card-hover group overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h4 className="mb-1 text-sm font-bold text-text-primary">{prog.title}</h4>
                  <p className="text-xs leading-relaxed text-text-secondary">{prog.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 외부자원 연계 활동 ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="External Activities" title="외부자원 연계 활동" />
          <ImageGallery images={externalImages} columns={3} />
        </div>
      </section>

      {/* ===== 요양생활 사진 (갤러리) ===== */}
      <section className="bg-surface-dim py-16 md:py-24" id="gallery">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Gallery" title="요양생활 사진" />
          <ImageGallery images={lifeImages} columns={3} />
        </div>
      </section>
    </>
  )
}
