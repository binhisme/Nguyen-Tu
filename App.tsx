
import React, { useState } from 'react';
import Layout from './components/Layout';
import ArticleCard from './components/ArticleCard';
import AIAssistant from './components/AIAssistant';
import { MOCK_ARTICLES, ICONS } from './constants';
import { Article } from './types';

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const featuredArticle = MOCK_ARTICLES[0];
  const listArticles = MOCK_ARTICLES.slice(1);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Headline */}
        <div className="mb-24 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-amber-500/5 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-10">
            <ICONS.Trending /> Tầm Nhìn 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black mb-10 leading-tight max-w-6xl uppercase">
            Tư Duy <span className="shimmer-text">Thịnh Vượng</span>. <br/>
            {/* Fix: changed webkitTextFillColor to WebkitTextFillColor to comply with React CSS properties types */}
            Hành Động <span className="italic font-light text-slate-500 normal-case shimmer-text" style={{ backgroundImage: 'linear-gradient(90deg, #64748b 0%, #cbd5e1 50%, #64748b 100%)', WebkitTextFillColor: 'transparent' }}>Đẳng Cấp.</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-3xl max-w-3xl leading-relaxed font-light">
            Kiến tạo tương lai tài chính số qua những phân tích thực chiến từ đội ngũ <span className="text-white font-medium">Nguyễn Tú INVEST</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Featured Section */}
            <section>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold">Chiến Lược Tiêu Điểm 2026</h2>
                <a href="#" className="text-[10px] text-amber-500 hover:text-amber-400 font-bold uppercase tracking-widest flex items-center gap-4 transition-all group">
                  Khám phá thêm <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              <ArticleCard 
                article={featuredArticle} 
                featured={true} 
                onClick={(a) => setSelectedArticle(a)} 
              />
            </section>

            {/* Trending / New Section */}
            <section>
              <div className="flex items-center gap-16 mb-12 border-b border-white/5 overflow-x-auto no-scrollbar">
                {['Tất cả', 'MMO 2.0', 'Tài chính số', 'Bất động sản RWA'].map((tab, idx) => (
                  <button 
                    key={tab} 
                    className={`pb-6 text-[10px] font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${idx === 0 ? 'text-amber-400' : 'text-slate-500 hover:text-white'}`}
                  >
                    {tab}
                    {idx === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500"></div>}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {listArticles.map(article => (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    onClick={(a) => setSelectedArticle(a)} 
                  />
                ))}
              </div>
            </section>

            {/* Newsletter Luxury Section */}
            <section className="luxury-card p-16 md:p-24 rounded-[3.5rem] relative overflow-hidden border-amber-500/10 shadow-3xl shadow-amber-500/5">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[180px] rounded-full -mr-40 -mt-40"></div>
               <div className="relative z-10 text-center md:text-left">
                 <h2 className="text-4xl md:text-5xl font-bold mb-8">Đặc Quyền <span className="text-amber-500 italic">Gold Insider 2026</span></h2>
                 <p className="text-slate-400 mb-12 max-w-xl text-xl leading-relaxed font-light">Nhận bản tin chiến lược và tín hiệu thị trường độc quyền từ Nguyễn Tú hàng tuần.</p>
                 <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
                   <input 
                     type="email" 
                     placeholder="Địa chỉ Email bí mật của bạn..." 
                     className="flex-grow bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-base focus:outline-none focus:border-amber-500/50 transition-colors font-light"
                   />
                   <button className="btn-liquid-glass px-12 py-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                     Tham gia ngay
                   </button>
                 </div>
                 <p className="text-[9px] text-slate-500 mt-10 font-bold uppercase tracking-widest opacity-40">Private Circle 2026 • Encrypted Data • Secured Gateway</p>
               </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-20">
            
            {/* AI Advisor Card */}
            <AIAssistant />

            {/* Popular Topics */}
            <div className="luxury-card p-12 rounded-[2.5rem]">
              <h3 className="text-[11px] font-bold uppercase tracking-widest mb-10 flex items-center gap-4 text-amber-500">
                <ICONS.Trending /> Xu hướng 2026
              </h3>
              <div className="flex flex-wrap gap-4">
                {['#AIAgents', '#BTC2026', '#RWAToken', '#WealthMind', '#GoldStrategy', '#SaaS2026'].map(tag => (
                  <a key={tag} href="#" className="px-6 py-3 bg-white/5 border border-white/5 rounded-full text-[9px] font-bold text-slate-500 hover:bg-amber-500/10 hover:text-amber-500 hover:border-amber-500/20 transition-all uppercase tracking-widest">
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Top Authors */}
            <div className="luxury-card p-12 rounded-[2.5rem]">
              <h3 className="text-[11px] font-bold uppercase tracking-widest mb-10 text-white">Ban cố vấn chiến lược</h3>
              <div className="space-y-10">
                {[
                  { name: 'Nguyễn Tú', role: 'Founder & Head Strategist', avatar: 'https://picsum.photos/seed/tu/100/100' },
                  { name: 'Hưu Doanh', role: 'Quant Trader AI', avatar: 'https://picsum.photos/seed/a2/100/100' },
                  { name: 'Thiên Chí Hàn', role: 'RWA Asset Expert', avatar: 'https://picsum.photos/seed/a1/100/100' },
                  { name: 'Quảng Đức', role: 'DeFi Architect', avatar: 'https://picsum.photos/seed/a4/100/100' }
                ].map(author => (
                  <div key={author.name} className="flex items-center gap-6 group cursor-pointer">
                    <div className="relative">
                       <img src={author.avatar} alt={author.name} className="w-16 h-16 rounded-[1.5rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                       <div className="absolute inset-0 rounded-[1.5rem] border border-white/10 group-hover:border-amber-500/50 transition-colors"></div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold group-hover:text-amber-400 transition-colors uppercase text-white">{author.name}</h4>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-2">{author.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={() => setSelectedArticle(null)}></div>
          <div className="relative bg-[#050505] w-full max-w-6xl max-h-[94vh] overflow-y-auto rounded-[3.5rem] border border-white/10 shadow-4xl animate-in fade-in zoom-in duration-700 no-scrollbar">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-10 right-10 p-5 rounded-full bg-white/5 hover:bg-amber-500/20 hover:text-amber-500 transition-all z-20"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="relative h-[550px]">
              <img src={selectedArticle.imageUrl} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"></div>
            </div>
            <div className="p-12 md:p-24 -mt-44 relative z-10">
              <span className="inline-block px-8 py-3 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full mb-10 shadow-lg">
                {selectedArticle.category}
              </span>
              <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight text-white">{selectedArticle.title}</h2>
              <div className="flex flex-wrap items-center gap-12 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-20 border-b border-white/5 pb-12">
                <span className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[1rem] bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">NT</div>
                  <span className="text-white">{selectedArticle.author}</span>
                </span>
                <span>{selectedArticle.date}</span>
                <span className="text-amber-500">{selectedArticle.readTime} reading</span>
              </div>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-2xl font-light">
                <p className="mb-14 font-medium text-white text-3xl italic border-l-[6px] border-amber-500 pl-12 leading-snug">
                  {selectedArticle.excerpt}
                </p>
                <div className="space-y-12 text-xl opacity-90 leading-relaxed font-light">
                  <p>{selectedArticle.content}</p>
                  <p>Tại thời điểm năm 2026, việc làm chủ các công cụ AI Agents và hiểu rõ cơ chế vận hành của tài sản thực (RWA) trên chuỗi là chìa khóa then chốt để đột phá tài chính.</p>
                </div>
                
                <div className="my-24 p-16 bg-amber-500/5 rounded-[3rem] border border-amber-500/10 shadow-inner">
                  <h4 className="text-amber-500 font-bold mb-8 uppercase tracking-widest text-[10px] flex items-center gap-4">
                    <ICONS.Zap /> Gold Intelligence Report 2026
                  </h4>
                  <p className="text-slate-400 italic text-2xl leading-relaxed">"Dữ liệu on-chain cho thấy sự dịch chuyển khổng lồ của các quỹ hưu trí vào thị trường token hóa. Đây là cơ hội cuối cùng cho các nhà đầu tư cá nhân trước khi thị trường bước vào giai đoạn bão hòa toàn cầu."</p>
                  <div className="mt-12">
                     <button className="btn-liquid-glass px-14 py-6 rounded-[1.5rem] text-[10px] font-bold uppercase tracking-widest">Tải Report 2026 (PDF)</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default App;
