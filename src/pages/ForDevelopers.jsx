import React from 'react'
import { Link } from 'react-router-dom'
import { DollarSign, Shield, Code, ArrowRight, Search, Square, Move, RectangleHorizontal, UserPlus, Download, Settings, CheckCircle } from 'lucide-react'

/**
 * 面向开发者页面组件 - 重新设计版本
 * @returns {JSX.Element} 开发者页面内容
 */
const ForDevelopers = () => {
  return (
    <div className="min-h-screen pt-16"> {/* pt-16 适配固定导航 */}
      {/* 英雄区域 */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-primary-900 leading-tight">
                  最大化您的
                  <span className="bg-gradient-to-r from-primary-500 to-accent-green bg-clip-text text-transparent">
                    PC应用价值
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  通过我们强大而易于集成的JS，将您的PC流量转化为可观、稳定的现金收入。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  立即接入SDK
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
                <button className="group bg-white hover:bg-gray-50 text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-primary-200 hover:border-primary-300 inline-flex items-center justify-center">
                  查看技术文档
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </div>
            </div>

            {/* 右侧图表展示 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-2">收益趋势</h3>
                  <p className="text-gray-500 text-sm">过去6个月eCPM表现</p>
                </div>
                
                {/* 简单的收益图表 */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">1月</span>
                    <div className="flex-1 mx-4 bg-gray-200 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-green h-2 rounded-full w-3/4"></div>
                    </div>
                    <span className="text-sm font-semibold text-primary-500">$2.3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">2月</span>
                    <div className="flex-1 mx-4 bg-gray-200 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-green h-2 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-sm font-semibold text-primary-500">$2.8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">3月</span>
                    <div className="flex-1 mx-4 bg-gray-200 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-green h-2 rounded-full w-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-accent-green">$3.5</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-500">+52%</div>
                    <div className="text-xs text-gray-600">收益增长</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent-green">98%</div>
                    <div className="text-xs text-gray-600">填充率</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              为什么选择我们？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专为开发者打造的流量变现解决方案，让每一次展示都创造最大价值
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 行业领先的收益率 */}
            <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                行业领先的收益率
              </h3>
              <p className="text-gray-600 leading-relaxed">
                通过智能竞价算法，我们确保您的每次展示都能获得最高的eCPM。与传统广告平台相比，收益提升高达150%。
              </p>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <div className="text-green-700 font-semibold text-sm">平均eCPM: $3.5+</div>
              </div>
            </div>

            {/* 丰富的广告样式 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <RectangleHorizontal className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                丰富的广告样式
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                支持搜索、弹窗、悬浮、横幅等多种广告形式，与您的应用完美融合，不打扰用户体验。
              </p>
              
              {/* 广告样式占位图 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-100 p-2 rounded-lg text-center">
                  <Search className="mx-auto text-blue-500 mb-1" size={16} />
                  <span className="text-xs text-blue-600">搜索</span>
                </div>
                <div className="bg-purple-100 p-2 rounded-lg text-center">
                  <Square className="mx-auto text-purple-500 mb-1" size={16} />
                  <span className="text-xs text-purple-600">弹窗</span>
                </div>
                <div className="bg-orange-100 p-2 rounded-lg text-center">
                  <Move className="mx-auto text-orange-500 mb-1" size={16} />
                  <span className="text-xs text-orange-600">悬浮</span>
                </div>
                <div className="bg-green-100 p-2 rounded-lg text-center">
                  <RectangleHorizontal className="mx-auto text-green-500 mb-1" size={16} />
                  <span className="text-xs text-green-600">横幅</span>
                </div>
              </div>
            </div>

            {/* 轻量且安全的JS SDK */}
            <div className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                轻量且安全的JS SDK
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                JS轻量级接入，通过多重安全认证，保障您和用户的安全。
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  仅15KB大小，不影响应用性能
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  SSL加密传输，数据安全保障
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  反作弊系统，收益真实可靠
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 集成指南 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              集成指南
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              三个简单步骤，快速开启您的流量变现之旅
            </p>
          </div>

          <div className="relative">
            {/* 连接线 */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200"></div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step 1: 创建应用 */}
              <div className="relative">
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      1
                    </div>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <UserPlus className="text-white" size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    创建应用
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    在我们的平台注册并创建一个新的应用，获取App ID。
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-700">
                      <strong>您将获得：</strong>
                      <br />• 专属App ID
                      <br />• 开发者后台访问权限  
                      <br />• 技术支持联系方式
                    </div>
                  </div>
                </div>

                {/* 箭头 - 桌面端 */}
                <div className="hidden lg:block absolute top-24 -right-3 z-10">
                  <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <ArrowRight className="text-gray-400" size={12} />
                  </div>
                </div>
              </div>

              {/* Step 2: 下载并集成JS */}
              <div className="relative">
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      2
                    </div>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Download className="text-white" size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    下载并集成JS
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    根据我们的开发文档，将最新的JS集成到您的PC应用项目中。
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-green-700">
                      <strong>简单集成：</strong>
                      <br />• 下载轻量级JS文件
                      <br />• 复制粘贴代码片段
                      <br />• 5分钟完成集成
                    </div>
                  </div>
                </div>

                {/* 箭头 - 桌面端 */}
                <div className="hidden lg:block absolute top-24 -right-3 z-10">
                  <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <ArrowRight className="text-gray-400" size={12} />
                  </div>
                </div>
              </div>

              {/* Step 3: 配置广告位 */}
              <div className="relative">
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      3
                    </div>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="text-white" size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    配置广告位
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    设置您想要的广告位，即可开始测试和发布。
                  </p>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-sm text-orange-700">
                      <strong>灵活配置：</strong>
                      <br />• 选择广告样式和位置
                      <br />• 设置展示频率
                      <br />• 实时预览效果
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                准备好开始了吗？
              </h3>
              <p className="text-gray-600 mb-6">
                立即注册，获取您的专属App ID，开始集成我们的JS SDK
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  立即注册开始
                </Link>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  下载SDK文档
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForDevelopers 