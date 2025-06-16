import React from 'react'
import { DollarSign, Target, Code, BarChart3, Shield, Globe } from 'lucide-react'

/**
 * 核心优势组件
 * @returns {JSX.Element} 核心优势内容
 */
const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: '高额收益',
      description: '领先的eCPM和高填充率，最大化您的应用收益。',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Target,
      title: '精准触达',
      description: '多维度定向能力，帮助广告主锁定高价值PC用户。',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Code,
      title: '集成简便',
      description: '提供轻量级PC端JS SDK，几行代码即可完成接入。',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: BarChart3,
      title: '数据透明',
      description: '实时数据报表，收益和投放效果一目了然。',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '内置强大的反作弊系统，保障广告生态健康。',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Globe,
      title: '海量资源',
      description: '聚合全球顶级广告主资源与海量独家PC流量。',
      color: 'from-pink-500 to-rose-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            核心优势
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们致力于为开发者和广告主提供最优质的流量变现与投放服务
          </p>
        </div>

        {/* 功能网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary-200"
              >
                {/* 背景装饰 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* 图标 */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={32} />
                  </div>

                  {/* 标题 */}
                  <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* 悬停效果装饰 */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* 底部装饰 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary-500"></div>
            <span className="text-sm">还有更多优势等您发现</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 