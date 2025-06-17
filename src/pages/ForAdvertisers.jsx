import React from 'react'
import { Link } from 'react-router-dom'
import { Target, TrendingUp, Users, Shield, BarChart3, Zap, ArrowRight, Play, RectangleHorizontal, Search, Eye, MousePointer, Award, CheckCircle } from 'lucide-react'

/**
 * 面向广告主页面组件 - 重新设计版本
 * @returns {JSX.Element} 广告主页面内容
 */
const ForAdvertisers = () => {
  return (
    <div className="min-h-screen pt-16"> {/* pt-16 适配固定导航 */}
      {/* 英雄区域 */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-primary-900 leading-tight">
                  精准触达
                  <span className="bg-gradient-to-r from-primary-500 to-accent-orange bg-clip-text text-transparent">
                    数亿级高价值
                  </span>
                  PC用户
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  在数千个高质量PC应用中投放您的广告，实现品牌曝光与效果转化的双重目标。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  开始投放广告
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>

              </div>
            </div>

            {/* 右侧数据展示 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-2">平台数据概览</h3>
                  <p className="text-gray-500 text-sm">实时更新的关键指标</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-500 mb-1">2000+</div>
                    <div className="text-xs text-gray-600">合作应用</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-accent-orange mb-1">1.1亿</div>
                    <div className="text-xs text-gray-600">活跃用户</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-accent-green mb-1">2亿+</div>
                    <div className="text-xs text-gray-600">日均展示</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-500 mb-1">95%</div>
                    <div className="text-xs text-gray-600">真实流量</div>
                  </div>
                </div>

                {/* 简单的行业分布图 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">电商</span>
                    <div className="flex-1 mx-3 bg-gray-200 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-sm font-semibold text-primary-500">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">游戏</span>
                    <div className="flex-1 mx-3 bg-gray-200 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-accent-orange to-red-500 h-2 rounded-full w-3/5"></div>
                    </div>
                    <span className="text-sm font-semibold text-accent-orange">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">工具</span>
                    <div className="flex-1 mx-3 bg-gray-200 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-accent-green to-green-600 h-2 rounded-full w-2/5"></div>
                    </div>
                    <span className="text-sm font-semibold text-accent-green">22%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 我们的流量优势 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              我们的流量优势
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于多年PC流量积累，为广告主提供高质量、高转化的投放环境
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 海量优质流量 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                海量优质流量
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                覆盖电商、游戏、网服等多种PC场景，触达真实、活跃的PC用户。
              </p>
              <div className="bg-blue-100 p-2 rounded-lg">
                <div className="text-blue-700 font-semibold text-xs">1.1亿+ 活跃用户</div>
              </div>
            </div>

            {/* 专家级运营 */}
            <div className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                专家级运营
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                广告优化师1V1协助分析，快速响应，确保投放效果最大化。
              </p>
              <div className="bg-green-100 p-2 rounded-lg">
                <div className="text-green-700 font-semibold text-xs">24小时响应支持</div>
              </div>
            </div>

            {/* 强大的反作弊引擎 */}
            <div className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                强大的反作弊引擎
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                自研的AI反作弊系统能有效识别并过滤无效流量和作弊行为，保障您的ROI。
              </p>
              <div className="bg-purple-100 p-2 rounded-lg">
                <div className="text-purple-700 font-semibold text-xs">95%+ 真实流量率</div>
              </div>
            </div>

            {/* 灵活的投放控制 */}
            <div className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                灵活的投放控制
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                支持CPC, CPM, CPA等多种出价方式，并提供预算、出价、投放时段的精细化控制。
              </p>
              <div className="bg-orange-100 p-2 rounded-lg">
                <div className="text-orange-700 font-semibold text-xs">多种计费模式</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 广告形式 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              多样化的广告创意，提升点击与转化
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根据不同场景和用户行为，选择最适合的广告形式，实现最佳投放效果
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 激励视频 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-red-100 to-pink-100 p-4 rounded-xl mb-4">
                <Play className="text-red-500 mx-auto" size={32} />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">激励视频</h3>
              <p className="text-gray-600 text-sm mb-3">
                用户主动观看视频获得奖励，参与度高，转化效果显著
              </p>
              <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                适用：游戏推广、App下载
              </div>
            </div>

            {/* 横幅广告 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl mb-4">
                <RectangleHorizontal className="text-blue-500 mx-auto" size={32} />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">横幅广告</h3>
              <p className="text-gray-600 text-sm mb-3">
                展示在应用顶部或底部，曝光量大，品牌展示效果佳
              </p>
              <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                适用：品牌曝光、电商推广
              </div>
            </div>

            {/* 搜索弹窗 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-xl mb-4">
                <Search className="text-green-500 mx-auto" size={32} />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">搜索弹窗</h3>
              <p className="text-gray-600 text-sm mb-3">
                用户搜索时精准弹出，意向明确，转化率极高
              </p>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                适用：精准营销、服务推广
              </div>
            </div>

            {/* 原生广告 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-4 rounded-xl mb-4">
                <Eye className="text-purple-500 mx-auto" size={32} />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">原生广告</h3>
              <p className="text-gray-600 text-sm mb-3">
                与应用内容无缝融合，用户体验友好，接受度高
              </p>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                适用：内容营销、软性推广
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 投放平台概览 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              一站式智能投放平台
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              功能强大的管理后台，让广告投放更简单、更高效、更透明
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 仪表盘示意图 */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary-500 via-blue-600 to-indigo-700 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold">投放控制台</h3>
                    <div className="bg-green-400 w-3 h-3 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* 模拟图表区域 */}
                  <div className="bg-white/20 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-end h-16 space-x-2">
                      <div className="bg-gradient-to-t from-orange-400 to-yellow-300 rounded w-6 h-8"></div>
                      <div className="bg-gradient-to-t from-orange-400 to-yellow-300 rounded w-6 h-12"></div>
                      <div className="bg-gradient-to-t from-orange-400 to-yellow-300 rounded w-6 h-10"></div>
                      <div className="bg-gradient-to-t from-orange-400 to-yellow-300 rounded w-6 h-16"></div>
                      <div className="bg-gradient-to-t from-orange-400 to-yellow-300 rounded w-6 h-6"></div>
                      <div className="bg-gradient-to-t from-orange-400 to-yellow-300 rounded w-6 h-14"></div>
                      <div className="bg-gradient-to-t from-orange-400 to-yellow-300 rounded w-6 h-11"></div>
                    </div>
                  </div>

                  {/* 关键指标 */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="text-white text-lg font-bold">12.5K</div>
                      <div className="text-white/70 text-xs">今日展示</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="text-white text-lg font-bold">2.8%</div>
                      <div className="text-white/70 text-xs">点击率</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="text-white text-lg font-bold">¥3,240</div>
                      <div className="text-white/70 text-xs">消耗</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <BarChart3 className="text-white mb-2" size={20} />
                    <div className="text-white/90 text-sm">实时监控</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Target className="text-white mb-2" size={20} />
                    <div className="text-white/90 text-sm">精准定向</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 功能介绍 */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">实时数据监控</h3>
                  <p className="text-gray-600">
                    展示量、点击量、转化数据实时更新，支持多维度数据分析，助您快速优化投放策略。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">A/B测试工具</h3>
                  <p className="text-gray-600">
                    支持创意、定向、出价的A/B测试，智能分配流量，自动识别最优方案。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">受众分析报告</h3>
                  <p className="text-gray-600">
                    深度分析用户画像、行为路径、兴趣偏好，为精准投放提供数据支撑。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">素材管理库</h3>
                  <p className="text-gray-600">
                    统一管理广告创意，支持批量上传、在线编辑、版本管理，提升创意制作效率。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              真实客户案例，见证投放效果的显著提升
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 案例一：游戏推广 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <Play className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900">游戏推广案例</h3>
                  <p className="text-gray-500">激励视频广告</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 leading-relaxed">
                  "某知名手游通过我们的激励视频广告进行推广，用户在观看视频后可获得游戏内奖励。
                  7日内新增用户成本降低了30%，用户留存率提升25%，ROI达到3.2。"
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 mb-1">30%</div>
                  <div className="text-sm text-gray-600">成本降低</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-500 mb-1">25%</div>
                  <div className="text-sm text-gray-600">留存提升</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">3.2</div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span className="text-sm text-gray-600">投放周期：30天</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-yellow-500 mr-2" size={16} />
                  <span className="text-sm text-gray-600">行业：游戏</span>
                </div>
              </div>
            </div>

            {/* 案例二：品牌曝光 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900">品牌曝光案例</h3>
                  <p className="text-gray-500">弹窗广告</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 leading-relaxed">
                  "某知名电商平台通过弹窗广告进行品牌推广，精准定向年轻消费群体。
                  在一周内获得了500万次品牌曝光，网站访问量提升45%，新用户注册数增长60%。"
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">500万</div>
                  <div className="text-sm text-gray-600">品牌曝光</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-500 mb-1">45%</div>
                  <div className="text-sm text-gray-600">访问量提升</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">60%</div>
                  <div className="text-sm text-gray-600">新用户增长</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span className="text-sm text-gray-600">投放周期：7天</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-yellow-500 mr-2" size={16} />
                  <span className="text-sm text-gray-600">行业：电商</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-blue-600 to-indigo-700 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            开启您的PC广告投放之旅
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            加入我们，在PC流量新蓝海中获得高质量用户，实现品牌与效果的双重突破
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="group bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              立即开始投放
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/30 inline-flex items-center justify-center">
              查看更多案例
              <MousePointer className="ml-2 group-hover:scale-110 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForAdvertisers 