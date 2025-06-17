import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Award, Target, Heart, Lightbulb, Shield, Building2, TrendingUp, CheckCircle, Calendar, Trophy, Star, MapPin, Mail, Phone, ArrowRight } from 'lucide-react'

/**
 * 关于我们页面组件 - 重新设计版本
 * @returns {JSX.Element} 关于我们页面内容
 */
const AboutUs = () => {
  return (
    <div className="min-h-screen pt-16"> {/* pt-16 适配固定导航 */}
      {/* 英雄区域 */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                <Building2 className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight">
                杭州互推科技
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-primary-500 to-accent-orange bg-clip-text text-transparent">
                  有限公司
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              专业的<span className="text-primary-500 font-semibold">智能广告营销平台</span>、
              <span className="text-accent-orange font-semibold">媒体流量变现服务平台</span>
            </p>
            
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              致力于为PC应用开发者和广告主搭建智能、高效的流量变现桥梁，
              用技术创新驱动数字营销行业发展
            </p>

            {/* 核心数据 */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">2000+</div>
                <div className="text-sm text-gray-600">合作伙伴</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent-orange mb-2">1.1亿</div>
                <div className="text-sm text-gray-600">服务用户</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent-green mb-2">6年</div>
                <div className="text-sm text-gray-600">行业经验</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">4项</div>
                <div className="text-sm text-gray-600">行业大奖</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-600 text-sm font-medium mb-4">
                  <TrendingUp className="mr-2" size={16} />
                  行业领军企业
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                  关于杭州互推科技
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  杭州互推科技有限公司是一家专业的<strong className="text-primary-600">智能广告营销平台</strong>和<strong className="text-accent-orange">媒体流量变现服务平台</strong>，致力于为PC应用开发者和广告主提供优质的数字营销解决方案。
                </p>
                <p>
                  自成立以来，我们深耕PC流量变现领域，凭借先进的RTB实时竞价技术、AI智能算法优化和专业的运营团队，成功连接了数千家优质PC应用开发者和数百家知名品牌广告主。
                </p>
                <p>
                  我们始终坚持"技术驱动创新、服务创造价值、合作实现共赢"的企业理念，累计服务1.1亿+PC用户，日均广告展示量超过2亿次，为合作伙伴创造了显著的商业价值。
                </p>
                
                {/* 特色亮点 */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm">技术实力雄厚</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm">服务体系完善</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm">行业经验丰富</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm">信誉口碑良好</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 via-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">核心业务数据</h3>
                  <p className="text-primary-100 text-sm">持续增长的业务指标</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">2000+</div>
                    <div className="text-xs text-primary-100">合作开发者</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">300+</div>
                    <div className="text-xs text-primary-100">品牌广告主</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">1.1亿+</div>
                    <div className="text-xs text-primary-100">覆盖用户</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">2亿+</div>
                    <div className="text-xs text-primary-100">日均展示</div>
                  </div>
                </div>
                
                {/* 增长趋势 */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-100">业务增长率</span>
                    <span className="text-green-300 font-semibold">+150% YoY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 荣誉资质 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full text-orange-600 text-sm font-medium mb-4">
              <Trophy className="mr-2" size={16} />
              行业认可
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              荣誉资质
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              成立以来，先后荣获多项行业权威奖项，获得业界广泛认可
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 奖项一 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-gray-400 mr-2" size={16} />
                    <span className="text-gray-500 text-sm">2018年</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    TMA2018年度最具突破力移动营销公司奖
                  </h3>
                  <p className="text-gray-600 text-sm">
                    在移动营销领域展现出的创新能力和突破性成就获得行业认可
                  </p>
                </div>
              </div>
            </div>

            {/* 奖项二 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-gray-400 mr-2" size={16} />
                    <span className="text-gray-500 text-sm">2018年</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    创业邦2018中国企业服务人气奖TOP10
                  </h3>
                  <p className="text-gray-600 text-sm">
                    在企业服务领域的优秀表现和用户认可度获得权威媒体肯定
                  </p>
                </div>
              </div>
            </div>

            {/* 奖项三 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-gray-400 mr-2" size={16} />
                    <span className="text-gray-500 text-sm">2019年</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    金鼠标10周年——数字营销新锐公司奖
                  </h3>
                  <p className="text-gray-600 text-sm">
                    在数字营销领域的创新实践和优秀业绩赢得金鼠标奖的殊荣
                  </p>
                </div>
              </div>
            </div>

            {/* 奖项四 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-gray-400 mr-2" size={16} />
                    <span className="text-gray-500 text-sm">2019年</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    金属标2019年度最佳数字营销平台奖
                  </h3>
                  <p className="text-gray-600 text-sm">
                    凭借优秀的数字营销平台能力和服务质量获得年度最佳平台奖
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企业价值观 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Heart className="mr-2" size={16} />
              企业文化
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">企业价值观</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              指导我们前进的核心理念，推动公司持续发展的精神动力
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                技术驱动创新
              </h3>
              <p className="text-gray-600 leading-relaxed">
                持续投入技术研发，用创新技术解决行业痛点，以技术驱动推动PC流量变现行业发展
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                服务创造价值
              </h3>
              <p className="text-gray-600 leading-relaxed">
                始终以用户需求为出发点，提供优质的产品和服务，为客户创造真正的商业价值
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                合作实现共赢
              </h3>
              <p className="text-gray-600 leading-relaxed">
                坚持诚信经营，与合作伙伴建立长期信任关系，实现互利共赢的可持续发展
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm font-medium mb-4">
              <MapPin className="mr-2" size={16} />
              联系方式
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">联系我们</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              欢迎随时与我们取得联系，我们将竭诚为您提供专业的服务
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 联系信息 */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">公司地址</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    浙江省杭州市西湖区<br />
                    西溪国际商务中心7楼
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>地铁2号线古翠路站 B出口</p>
                    <p>公交车站：古翠路口站</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">联系邮箱</h3>
                  <p className="text-gray-600 text-lg">
                    <a href="mailto:ht@163.com" className="text-primary-500 hover:text-primary-600 transition-colors duration-200">
                      ht@163.com
                    </a>
                  </p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>商务合作、技术支持、意见反馈</p>
                  </div>
                </div>
              </div>


            </div>

            {/* 地图占位 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-gradient-to-br from-primary-500 via-blue-600 to-indigo-700 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                {/* 模拟地图 */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl"></div>
                </div>
                
                <div className="relative z-10 text-center text-white">
                  <MapPin className="mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">杭州互推科技</h3>
                  <p className="text-primary-100">西溪国际商务中心</p>
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            携手互推，共创未来
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            与杭州互推科技一起，在PC流量变现领域创造更多价值，实现共同发展
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="group bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              立即联系我们
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <a 
              href="mailto:ht@163.com" 
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/30 inline-flex items-center justify-center"
            >
              发送邮件咨询
              <Mail className="ml-2 group-hover:scale-110 transition-transform duration-300" size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs 