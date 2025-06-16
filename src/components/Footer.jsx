import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

/**
 * 网站底部组件
 * @returns {JSX.Element} 底部内容
 */
const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">互推</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              专业的PC流量变现平台，连接开发者与广告主，实现流量价值最大化。
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="mr-2" size={16} />
                <span>contact@hutui.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="mr-2" size={16} />
                <span>400-888-9999</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="mr-2" size={16} />
                <span>北京市朝阳区科技园区</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <div className="space-y-2">
              <Link to="/developers" className="block text-gray-300 hover:text-white transition-colors">
                媒体变现
              </Link>
              <Link to="/advertisers" className="block text-gray-300 hover:text-white transition-colors">
                广告投放
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                关于我们
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                联系我们
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">服务支持</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                技术文档
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                API接口
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                帮助中心
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                服务条款
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 杭州互推科技有限公司. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 