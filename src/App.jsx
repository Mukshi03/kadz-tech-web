import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import Warehousing from './pages/Warehousing'
import FindWarehouse from './pages/FindWarehouse'
import Transportation from './pages/Transportation'
import FindTransport from './pages/FindTransport'
import Wms from './pages/Wms'
import HelpCenter from './pages/HelpCenter'
import Blog from './pages/Blog'
import About from './pages/About'
import Dictionary from './pages/Dictionary'
import Legal from './pages/Legal'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehousing" element={<Warehousing />} />
          <Route path="/find-warehouse" element={<FindWarehouse />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/find-transport" element={<FindTransport />} />
          <Route path="/warehouse-management-system" element={<Wms />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/terms-conditions" element={<Legal key="terms" doc="terms" />} />
          <Route path="/privacy-policy" element={<Legal key="privacy" doc="privacy" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
