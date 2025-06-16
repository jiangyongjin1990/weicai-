import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import AudienceSpecific from '../components/AudienceSpecific'
import SocialProof from '../components/SocialProof'
import FinalCTA from '../components/FinalCTA'

/**
 * 网站首页组件 - 重新设计版本
 * @returns {JSX.Element} 首页内容
 */
const HomePage = () => {
  return (
    <div className="min-h-screen pt-16"> {/* pt-16 用于适应fixed header */}
      <Hero />
      <Features />
      <HowItWorks />
      <AudienceSpecific />
      <SocialProof />
      <FinalCTA />
    </div>
  )
}

export default HomePage 