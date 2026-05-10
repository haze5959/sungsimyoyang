import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div 
      className="w-full min-h-screen bg-surface-muted"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}
    >
      <Header />
      <div 
        className="w-full max-w-[1600px] flex flex-col overflow-hidden bg-white shadow-2xl relative"
        style={{ margin: '0 auto' }}
      >
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
