import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Smartphone, TrendingUp, Target, Users, BarChart3, ArrowRight } from 'lucide-react'

/**
 * 面向不同用户群体的组件
 * @returns {JSX.Element} 用户群体特定内容
 */
const AudienceSpecific = () => {
  const developerFeatures = [
    {
      icon: Smartphone,
      title: '多种广告样式',
      description: '激励视频、弹窗、native、Banner、浮标等多种广告形式，适应不同场景需求。'
    },
    {
      icon: TrendingUp,
      title: '高效变现',
      description: '与100+优质ADN、DSP、ADX、直采广告主合作，RTB实时竞价，智能匹配，最大化每次展现收益。'
    },
    {
      icon: BarChart3,
      title: '预算丰富',
      description: '电商、游戏、网服、线索收集等九大行业预算充足，保证持续稳定收益。'
    }
  ]

  const advertiserFeatures = [
    {
      icon: Users,
      title: '覆盖广泛的用户群体',
      description: '触达1.1亿+高质量PC用户，精准定向高价值目标受众。'
    },
    {
      icon: Target,
      title: 'CPC/CPM/CPA多种计费模式',
      description: '灵活的计费方式，根据营销目标选择最适合的付费模式。'
    },
    {
      icon: Code,
      title: '自助式广告投放平台',
      description: '简单易用的投放平台，实时监控效果，随时调整策略。'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左侧 - 为开发者 */}
          <div className="relative">
            {/* 背景装饰 */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
                  专为PC开发者打造
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                为PC应用开发者提供最优质的流量变现解决方案，简单集成，高效盈利。
              </p>

              <div className="space-y-6">
                {developerFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="flex items-start group">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8">
                <Link 
                  to="/developers"
                  className="group inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  开始变现
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* 右侧 - 为广告主 */}
          <div className="relative">
            {/* 背景装饰 */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-green-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
                  触达高质量PC流量池
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                为广告主提供精准的PC端流量投放服务，高效获客，精准触达目标用户。
              </p>

              <div className="space-y-6">
                {advertiserFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="flex items-start group">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8">
                <Link 
                  to="/advertisers"
                  className="group inline-flex items-center bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  开始投放
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 底部统计数据 */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-8">平台数据一览</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">2000+</div>
                <div className="text-primary-100">开发者伙伴</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">300+</div>
                <div className="text-primary-100">品牌广告主</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">2亿+</div>
                <div className="text-primary-100">日均展示量</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                <div className="text-primary-100">平台稳定性</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AudienceSpecific 