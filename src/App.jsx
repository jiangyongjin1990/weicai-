import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ForDevelopers from './pages/ForDevelopers'
import ForAdvertisers from './pages/ForAdvertisers'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

/**
 * 主应用组件
 * @returns {JSX.Element} 应用程序根组件
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/developers" element={<ForDevelopers />} />
            <Route path="/advertisers" element={<ForAdvertisers />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 