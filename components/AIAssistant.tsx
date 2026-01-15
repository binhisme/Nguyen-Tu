
import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../constants';
import { getInvestmentAdvice } from '../geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Chào bạn! Tôi là Cố vấn Tài chính AI của Nguyễn Tú GOLD. Bạn cần tôi phân tích thị trường hay tư vấn chiến lược MMO nào hôm nay?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const advice = await getInvestmentAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: advice }]);
    setIsLoading(false);
  };

  return (
    <div className="luxury-card rounded-3xl overflow-hidden flex flex-col h-[600px] border-amber-500/10 shadow-2xl shadow-black/50">
      <div className="p-6 border-b border-white/5 bg-gradient-to-r from-amber-500/10 to-transparent">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black">
              <ICONS.Zap />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#050505] rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-white leading-tight">AI Advisor</h3>
            <p className="text-[10px] shimmer-text uppercase tracking-widest font-bold">Trí tuệ nhân tạo</p>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-6 space-y-4 scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-amber-500 text-black font-medium rounded-tr-none' 
                : 'bg-white/5 text-slate-300 rounded-tl-none border border-white/10'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-[#020617]">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Đặt câu hỏi đầu tư..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-3 top-3 p-2 btn-liquid-glass rounded-xl hover:bg-amber-400 transition-colors disabled:opacity-50"
          >
            <ICONS.Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
