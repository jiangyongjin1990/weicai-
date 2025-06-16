import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

/**
 * 英雄区域组件
 * @returns {JSX.Element} 英雄区域内容
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl"></div>
        
        {/* 动态线条效果 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-30" viewBox="0 0 1000 1000" fill="none">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0052FF" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#00C48C" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path 
              d="M0,300 Q250,200 500,300 T1000,300" 
              stroke="url(#gradient1)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M0,500 Q250,400 500,500 T1000,500" 
              stroke="url(#gradient1)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <path 
              d="M0,700 Q250,600 500,700 T1000,700" 
              stroke="url(#gradient1)" 
              strokeWidth="1" 
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="max-w-4xl mx-auto">
          {/* 标题上方的装饰 */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100">
              <Sparkles className="text-primary-500" size={20} />
              <span className="text-primary-500 font-medium text-sm">全新流量变现解决方案</span>
            </div>
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-900 mb-6 leading-tight">
            释放
            <span className="bg-gradient-to-r from-primary-500 to-accent-green bg-clip-text text-transparent">
              PC流量
            </span>
            新价值
            <br />
            驱动业务持续增长
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            我们连接优质PC开发者与全球广告主，提供高效、透明、安全的流量变现与广告投放解决方案。
          </p>

          {/* CTA按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              to="/developers" 
              className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              我是开发者，开始变现
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <Link 
              to="/advertisers" 
              className="group bg-white hover:bg-gray-50 text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-primary-200 hover:border-primary-300 inline-flex items-center"
            >
              我是广告主，获取流量
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </div>

          {/* 数据展示 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">2000+</div>
              <div className="text-gray-600 text-sm md:text-base">合作开发者</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">300+</div>
              <div className="text-gray-600 text-sm md:text-base">广告主</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">2亿+</div>
              <div className="text-gray-600 text-sm md:text-base">日均展示</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">1.1亿+</div>
              <div className="text-gray-600 text-sm md:text-base">活跃用户</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 