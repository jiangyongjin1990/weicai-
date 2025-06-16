import React from 'react'
import { Star, Users, Award } from 'lucide-react'

/**
 * 社会认同/合作伙伴组件
 * @returns {JSX.Element} 社会认同内容
 */
const SocialProof = () => {
  const partners = [
    { name: '好123', category: '导航' },
    { name: '百度', category: '搜索' },
    { name: '阿里巴巴', category: '电商' },
    { name: '360', category: '安全' },
    { name: '58同城', category: '生活服务' },
    { name: '京东', category: '电商' },
    { name: '搜狗', category: '搜索' },
    { name: '2345网址大全', category: '导航' },
    { name: '金山', category: '软件' },
    { name: '今日头条', category: '资讯' },
    { name: '唯品会', category: '电商' },
    { name: '腾讯', category: '互联网' }
  ]

  const testimonials = [
    {
      company: "某知名工具软件",
      role: "产品负责人",
      content: "接入流量平台后，我们的广告收益提升了150%，SDK集成简单，客服响应及时，是值得信赖的合作伙伴。",
      rating: 5
    },
    {
      company: "某电商平台",
      role: "营销总监",
      content: "通过这个平台投放广告，获客成本降低了30%，用户质量很高，ROI表现超出预期。",
      rating: 5
    },
    {
      company: "某游戏公司",
      role: "运营经理",
      content: "PC端流量质量确实不错，转化率比其他平台高出很多，推荐给同行朋友。",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100">
              <Award className="text-primary-500" size={20} />
              <span className="text-primary-500 font-medium text-sm">行业认可</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            深受数千家开发者与广告主的信赖
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            与众多知名品牌和优质开发者建立了长期稳定的合作关系
          </p>
        </div>

        {/* 合作伙伴Logo网格 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-primary-900 mb-12">合作伙伴</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-primary-200"
              >
                <div className="text-center">
                  {/* Logo占位符 */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  {/* 公司名称 */}
                  <h4 className="font-bold text-primary-900 mb-1 group-hover:text-primary-500 transition-colors duration-300">
                    {partner.name}
                  </h4>
                  {/* 分类标签 */}
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 用户评价 */}
        <div>
          <h3 className="text-2xl font-bold text-center text-primary-900 mb-12">客户评价</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* 评分 */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>

                {/* 评价内容 */}
                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* 评价者信息 */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900">{testimonial.company}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部数据统计 */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-600">客户满意度</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">24/7</div>
              <div className="text-gray-600">技术支持</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">99.9%</div>
              <div className="text-gray-600">服务可用性</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">5年+</div>
              <div className="text-gray-600">行业经验</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof 