import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import AudienceSpecific from '../components/AudienceSpecific'
import FinalCTA from '../components/FinalCTA'

/**
 * 网站首页组件 - 完整版本
 * @returns {JSX.Element} 首页内容
 */
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* 英雄区块 */}
      <Hero />
      
      {/* 核心功能特性 */}
      <Features />
      
      {/* 社会证明/数据统计 */}
      <SocialProof />
      
      {/* 工作流程 */}
      <HowItWorks />
      
      {/* 目标受众特定内容 */}
      <AudienceSpecific />
      
      {/* 最终行动号召 */}
      <FinalCTA />
    </div>
  )
}

export default HomePage 