import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './styles/global.css'

const Home = lazy(() => import('./pages/Home.jsx'))
const Community = lazy(() => import('./pages/Community.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <main>
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/community" element={<Community />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
