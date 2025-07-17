import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', href: '/' },
        { name: 'All Products', href: '/products' },
        { name: 'AI Tools & Solutions', href: '/ai-tools' },
        { name: 'Lead Research', href: '/lead-research' },
        { name: 'Inbounding & Membership', href: '/membership' },
        { name: 'Blog & Case Studies', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Collaborate With Us',
      links: [
        { name: 'API Licensing & Partnerships', href: '/api-licensing' },
        { name: 'Marketing Solutions', href: '/marketing-solutions' },
        { name: 'Research Collaborations', href: '/research' },
        { name: 'Developer Ecosystem', href: '/developers' },
        { name: 'Join Our Online Community', href: '/community' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Our Focus Areas',
      links: [
        { name: 'Generative Design for Architecture', href: '/generative-design' },
        { name: 'AI-Powered Website Design & Automation', href: '/ai-web-design' },
        { name: 'Virtual Prototyping & Ideation', href: '/virtual-prototyping' },
        { name: 'UX/UI Assistants', href: '/ux-ui-assistants' },
        { name: 'AI Content Membership & Learning', href: '/ai-content' }
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">CW</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CWrite</span>
            </div>
            <p className="text-gray-600 mb-4">
              Powered By<br />
              Copy.ai AI Engine
            </p>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Get in Touch</h4>
              <p className="text-gray-600 text-sm">
                Tower 18, Sreeam Tech Park, 2 Gurgaon,<br />
                Haryana 122001, INDIA
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2024 CWrite. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-blue-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}