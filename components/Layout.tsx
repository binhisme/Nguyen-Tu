
import React, { useState } from 'react';
import { ICONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Logo = () => (
  <div className="flex flex-col items-center justify-center scale-90 md:scale-100">
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="18" width="2" height="7" fill="currentColor" />
      <rect x="15" y="14" width="2" height="11" fill="currentColor" />
      <rect x="25" y="10" width="2" height="15" fill="currentColor" />
      <path d="M5 14L12 7L16 11L26 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 2H26V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="flex flex-col items-center -mt-1">
      <span className="text-[10px] font-bold tracking-[0.2em] leading-none text-white font-sans">NGUYEN TU</span>
      <span className="text-[8px] tracking-[0.4em] leading-none text-amber-500 font-medium font-sans">GOLD</span>
    </div>
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Tin tức', href: '#' },
    { label: 'MMO', href: '#' },
    { label: 'Đầu tư', href: '#' },
    { label: 'Khóa học', href: '#' },
    { label: 'Công cụ AI', href: '#' },
    { label: 'Cộng đồng', href: '#' },
    { label: 'Thư viện', href: '#' },
    { label: 'Đặc quyền VIP', href: '#', highlighted: true },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-4 flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-300 ${
                    item.highlighted 
                      ? 'shimmer-text px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5' 
                      : 'text-slate-200 hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <ICONS.Search />
              </button>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden glass border-t border-white/10 p-8 space-y-6 max-h-[calc(100vh-6rem)] overflow-y-auto animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block text-xs font-bold uppercase tracking-[0.3em] ${
                  item.highlighted ? 'shimmer-text' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex items-center gap-4 text-slate-400">
               <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                 <ICONS.Search /> Tìm kiếm
               </button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                 <Logo />
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed font-light font-sans">
                Nền tảng tri thức cao cấp được sáng lập bởi <span className="text-white font-bold italic font-serif">Nguyễn Tú</span>. 
                Chúng tôi định hình tương lai tài chính số qua những chiến lược thực chiến nhất.
              </p>
              <div className="flex space-x-8">
                {['X', 'Facebook', 'LinkedIn', 'Telegram'].map(social => (
                  <a key={social} href="#" className="text-slate-500 hover:text-amber-500 transition-colors text-[10px] font-bold uppercase tracking-widest">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-white uppercase tracking-[0.2em] text-[10px]">Phòng nghiên cứu</h4>
              <ul className="space-y-4 text-[11px] text-slate-400 font-medium">
                <li><a href="#" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Affiliate Elite</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Crypto Arbitrage</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors uppercase tracking-wider">SaaS Scaling</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Private Equity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-white uppercase tracking-[0.2em] text-[10px]">Cộng đồng</h4>
              <ul className="space-y-4 text-[11px] text-slate-400 font-medium">
                <li><a href="#" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Hội viên VIP</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Cố vấn 1-1</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Đối tác</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Liên hệ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
            <p>© 2024 NGUYEN TU GOLD MEDIA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
              <span className="shimmer-text">PREMIUM FINANCE GATEWAY</span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> SECURE ACCESS
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
