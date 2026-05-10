import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Introduce from '@/pages/Introduce'
import Guide from '@/pages/Guide'
import Consult from '@/pages/Consult'
import Location from '@/pages/Location'
import ScrollToTop from '@/components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/location" element={<Location />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
