import React from 'react'
import { Link } from 'react-router-dom'
import { Code, DollarSign, BarChart3, Shield, Rocket, Users } from 'lucide-react'

/**
 * 面向开发者页面组件
 * @returns {JSX.Element} 开发者页面内容
 */
const ForDevelopers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6">
              助力开发者实现流量变现
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              简单集成我们的SDK，即可将您的PC软件流量转化为稳定收益。支持多种广告形式，提供专业的技术支持。
            </p>
            <Link to="/contact" className="btn-primary">
              立即接入SDK
            </Link>
          </div>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">为什么选择我们？</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">高收益保障</h3>
              <p className="text-gray-600">
                RTB实时竞价机制，确保每次展示都获得最高价格，eCPM行业领先
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">简单集成</h3>
              <p className="text-gray-600">
                轻量级SDK，几行代码即可完成集成，不影响软件性能和用户体验
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">实时数据</h3>
              <p className="text-gray-600">
                提供详细的收益报告和用户行为分析，帮助您优化变现策略
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 支持的广告形式 */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">支持的广告形式</h2>
            <p className="text-xl text-gray-600">多样化的广告形式，满足不同场景需求</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-500 font-bold">搜</span>
              </div>
              <h3 className="font-bold text-primary-900 mb-2">搜索广告</h3>
              <p className="text-gray-600 text-sm">用户搜索时显示相关广告</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-green font-bold">弹</span>
              </div>
              <h3 className="font-bold text-primary-900 mb-2">弹窗广告</h3>
              <p className="text-gray-600 text-sm">在合适时机展示弹窗广告</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-orange font-bold">浮</span>
              </div>
              <h3 className="font-bold text-primary-900 mb-2">浮标广告</h3>
              <p className="text-gray-600 text-sm">界面浮动显示的广告内容</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-500 font-bold">横</span>
              </div>
              <h3 className="font-bold text-primary-900 mb-2">横幅广告</h3>
              <p className="text-gray-600 text-sm">页面顶部或底部横幅展示</p>
            </div>
          </div>
        </div>
      </section>

      {/* 接入流程 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">简单三步，开始赚钱</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary-200"></div>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">注册账号</h3>
              <p className="text-gray-600">
                填写基本信息，提交应用审核，快速获得开发者账号
              </p>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary-200"></div>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">集成SDK</h3>
              <p className="text-gray-600">
                下载SDK包，按照文档进行集成，技术团队全程支持
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">开始变现</h3>
              <p className="text-gray-600">
                发布应用，实时监控收益，享受稳定的广告收入
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备开始您的变现之旅？
          </h2>
          <p className="text-xl text-white/90 mb-8">
            加入2000+开发者的行列，让您的流量产生价值
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              立即接入
            </Link>
            <a href="#" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              查看文档
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForDevelopers 