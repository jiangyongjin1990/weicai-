import React from 'react'
import { Link } from 'react-router-dom'
import { Target, TrendingUp, Users, Shield, BarChart3, Zap } from 'lucide-react'

/**
 * 面向广告主页面组件
 * @returns {JSX.Element} 广告主页面内容
 */
const ForAdvertisers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6">
              精准触达PC用户群体
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              覆盖2000+优质PC应用，日均2亿+广告展示，精准投放您的广告内容，获得高质量用户转化。
            </p>
            <Link to="/contact" className="btn-primary">
              开始投放广告
            </Link>
          </div>
        </div>
      </section>

      {/* 投放优势 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">投放优势</h2>
            <p className="text-xl text-gray-600">为您的品牌提供全方位的PC端广告投放解决方案</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">精准定向</h3>
              <p className="text-gray-600">
                基于用户行为、地域、兴趣等多维度精准定向，提高转化率
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">海量流量</h3>
              <p className="text-gray-600">
                覆盖1.1亿+PC用户，日均展示量2亿+，满足各类投放需求
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">效果保障</h3>
              <p className="text-gray-600">
                RTB实时竞价，智能优化投放策略，确保最佳广告效果
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 支持行业 */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">支持行业</h2>
            <p className="text-xl text-gray-600">服务各行各业的广告投放需求</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 font-bold">电</span>
              </div>
              <h3 className="font-bold text-primary-900">电商</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 font-bold">游</span>
              </div>
              <h3 className="font-bold text-primary-900">游戏</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-500 font-bold">视</span>
              </div>
              <h3 className="font-bold text-primary-900">视频</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold">工</span>
              </div>
              <h3 className="font-bold text-primary-900">工具</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold">线</span>
              </div>
              <h3 className="font-bold text-primary-900">线索收集</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 投放方式 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">多种投放方式</h2>
            <p className="text-xl text-gray-600">灵活的投放策略，满足不同的营销目标</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">RTB实时竞价</h3>
                  <p className="text-gray-600 mb-4">
                    毫秒级竞价响应，根据用户画像实时调整出价，确保每次展示都物有所值
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 实时竞价，价格透明</li>
                    <li>• 精准定向，转化率高</li>
                    <li>• 智能优化，效果可控</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">RTA实时调整</h3>
                  <p className="text-gray-600 mb-4">
                    基于实时数据反馈，动态调整投放策略，最大化广告效果和ROI
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 实时数据反馈</li>
                    <li>• 动态策略调整</li>
                    <li>• ROI持续优化</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 投放流程 */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">投放流程</h2>
            <p className="text-xl text-gray-600">专业团队一对一服务，让广告投放更简单</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-primary-900 mb-2">需求沟通</h3>
              <p className="text-gray-600 text-sm">深入了解您的投放目标和预算</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-primary-900 mb-2">方案制定</h3>
              <p className="text-gray-600 text-sm">定制化投放策略和创意方案</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-primary-900 mb-2">广告上线</h3>
              <p className="text-gray-600 text-sm">快速审核通过，广告正式投放</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="font-bold text-primary-900 mb-2">效果优化</h3>
              <p className="text-gray-600 text-sm">持续监控和优化投放效果</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备开始您的广告投放？
          </h2>
          <p className="text-xl text-white/90 mb-8">
            专业团队为您提供一对一服务，确保最佳广告效果
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              立即咨询
            </Link>
            <a href="#" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              查看案例
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForAdvertisers 