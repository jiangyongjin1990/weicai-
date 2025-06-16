import React from 'react'
import { UserPlus, Code2, MousePointerClick, CreditCard, ArrowRight } from 'lucide-react'

/**
 * 工作流程组件
 * @returns {JSX.Element} 工作流程内容
 */
const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: '注册账户 & 创建应用',
      description: '快速注册开发者账户，创建您的应用项目，获取专属SDK密钥。',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Code2,
      title: '集成JS & 发布',
      description: '简单几行代码集成我们的轻量级SDK，部署到您的PC应用中。',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MousePointerClick,
      title: '用户互动 & 产生收益',
      description: '用户与广告互动时即可产生收益，实时监控数据表现。',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: '定期结算 & 收款',
      description: '每月定期结算收益，多种收款方式，资金安全有保障。',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            只需简单几步，开启增长之旅
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从注册到盈利，我们为您提供全程无忧的流量变现体验
          </p>
        </div>

        {/* 流程步骤 */}
        <div className="relative">
          {/* 连接线 - 桌面端 */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="relative">
                  {/* 流程卡片 */}
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    {/* 步骤编号 */}
                    <div className="absolute -top-4 left-8">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* 图标 */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>

                    {/* 标题 */}
                    <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* 悬停装饰 */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary-500/5 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* 箭头 - 桌面端 */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-3 z-10">
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                        <ArrowRight className="text-gray-400" size={12} />
                      </div>
                    </div>
                  )}

                  {/* 箭头 - 移动端 */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="text-white" size={16} />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* 底部CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              准备好开始了吗？
            </h3>
            <p className="text-gray-600 mb-6">
              加入我们，只需几分钟即可开始您的流量变现之旅
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              立即开始
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 