import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Award, Target, Heart, Lightbulb, Shield } from 'lucide-react'

/**
 * 关于我们页面组件
 * @returns {JSX.Element} 关于我们页面内容
 */
const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6">
            关于互推
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            我们致力于成为PC流量变现领域的领导者，为开发者和广告主搭建可信任的商业桥梁。
          </p>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                我们的故事
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  互推成立于2020年，是一家专注于PC流量变现的科技公司。我们深知开发者在流量变现过程中面临的挑战，也理解广告主对高质量PC流量的渴求。
                </p>
                <p>
                  通过先进的RTB实时竞价技术和智能算法优化，我们成功连接了2000+优质PC应用开发者和300+品牌广告主，累积服务1.1亿+PC用户，日均广告展示量超过2亿次。
                </p>
                <p>
                  我们始终坚持"技术驱动、用户至上、合作共赢"的理念，为PC互联网生态贡献价值。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2020</div>
                    <div className="text-sm opacity-90">公司成立</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100+</div>
                    <div className="text-sm opacity-90">团队规模</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2000+</div>
                    <div className="text-sm opacity-90">合作开发者</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1.1亿+</div>
                    <div className="text-sm opacity-90">服务用户</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企业价值观 */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">企业价值观</h2>
            <p className="text-xl text-gray-600">指导我们前进的核心理念</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">创新驱动</h3>
              <p className="text-gray-600">
                持续投入技术研发，用创新技术解决行业痛点，推动PC流量变现行业发展
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">用户至上</h3>
              <p className="text-gray-600">
                始终以用户需求为出发点，提供优质的产品和服务，创造真正的用户价值
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">诚信合作</h3>
              <p className="text-gray-600">
                坚持诚信经营，与合作伙伴建立长期信任关系，实现互利共赢
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">我们的团队</h2>
            <p className="text-xl text-gray-600">经验丰富的专业团队，为您提供优质服务</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">技术团队</h3>
              <p className="text-gray-600 text-sm">40+ 资深工程师</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">商务团队</h3>
              <p className="text-gray-600 text-sm">30+ 业务专家</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">运营团队</h3>
              <p className="text-gray-600 text-sm">20+ 运营精英</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">客服团队</h3>
              <p className="text-gray-600 text-sm">10+ 专业客服</p>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">发展历程</h2>
          </div>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-primary-500 font-bold text-lg mb-2">2020年</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">公司成立</h3>
                  <p className="text-gray-600">
                    互推科技正式成立，确立PC流量变现的核心业务方向，搭建基础技术架构
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 text-center">
                <div className="w-4 h-4 bg-primary-500 rounded-full mx-auto"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-4 h-4 bg-accent-green rounded-full mx-auto"></div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-accent-green font-bold text-lg mb-2">2021年</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">产品上线</h3>
                  <p className="text-gray-600">
                    SDK正式发布，首批开发者接入，建立初步的供需网络，月活跃用户突破1000万
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-accent-orange font-bold text-lg mb-2">2022年</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">规模扩张</h3>
                  <p className="text-gray-600">
                    合作开发者突破500家，广告主数量超过100家，日均广告展示量达到5000万次
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 text-center">
                <div className="w-4 h-4 bg-accent-orange rounded-full mx-auto"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto"></div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-purple-500 font-bold text-lg mb-2">2023年</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">技术升级</h3>
                  <p className="text-gray-600">
                    引入RTB实时竞价技术，推出RTA实时调整功能，大幅提升广告效果和收益水平
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-blue-500 font-bold text-lg mb-2">2024年</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">行业领先</h3>
                  <p className="text-gray-600">
                    成为PC流量变现领域头部平台，服务2000+开发者，300+广告主，1.1亿+用户
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 text-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            加入我们，共创未来
          </h2>
          <p className="text-xl text-white/90 mb-8">
            与互推一起，在PC流量变现领域创造更多价值
          </p>
          <Link to="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutUs 