import React from 'react'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

/**
 * 最终号召性用语组件
 * @returns {JSX.Element} 最终CTA内容
 */
const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700"></div>
      
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        {/* 动态粒子效果 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* 顶部装饰 */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Sparkles className="text-white" size={20} />
              <span className="text-white font-medium text-sm">立即行动</span>
            </div>
          </div>

          {/* 主标题 */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            准备好提升您的
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              收益或推广效果
            </span>
            了吗？
          </h2>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            无论您是开发者还是广告主，我们都能为您提供最适合的解决方案
          </p>

          {/* CTA按钮组 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-white hover:bg-gray-100 text-primary-500 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20 inline-flex items-center">
              <Zap className="mr-3 group-hover:animate-pulse" size={24} />
              立即注册
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-primary-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              联系我们
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>

          {/* 特色优势快速展示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5分钟</div>
              <div className="text-white/80 text-sm">快速注册接入</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24小时</div>
              <div className="text-white/80 text-sm">专业技术支持</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">0门槛</div>
              <div className="text-white/80 text-sm">免费开始使用</div>
            </div>
          </div>

          {/* 底部信任标识 */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              安全可靠
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              数据透明
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              实时结算
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              专业服务
            </div>
          </div>
        </div>
      </div>

      {/* 底部波浪装饰 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="white" 
            fillOpacity="0.1"
          />
          <path 
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,101.3C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="white" 
            fillOpacity="0.05"
          />
        </svg>
      </div>
    </section>
  )
}

export default FinalCTA 