
import React from 'react';
import { Article, Category } from './types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Kỷ Nguyên AI Agents 2026: Tự Động Hóa MMO Toàn Diện',
    excerpt: 'Không còn là công cụ hỗ trợ, AI Agents hiện đã có thể tự vận hành các chiến dịch Affiliate, tối ưu hóa quảng cáo và chốt đơn 24/7 mà không cần sự can thiệp của con người.',
    content: 'Năm 2026 đánh dấu bước ngoặt khi các mô hình ngôn ngữ lớn tích hợp sâu vào hạ tầng web. Các "Autonomous Agent" có khả năng nghiên cứu thị trường ngách, tạo phễu bán hàng tự động và tương tác với khách hàng một cách tự nhiên hơn bao giờ hết...',
    category: Category.MMO,
    author: 'Nguyễn Tú',
    date: '15 Th01, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    readTime: '7 phút'
  },
  {
    id: '2',
    title: 'Bitcoin 2026: Tầm Nhìn Tài Sản Dự Trữ Quốc Gia',
    excerpt: 'Phân tích dòng tiền từ các quỹ ETF toàn cầu và sự trỗi dậy của Bitcoin như một loại vàng kỹ thuật số được các ngân hàng trung ương chính thức công nhận.',
    content: 'Với chu kỳ Halving đã đi qua và sự ổn định của chính sách tiền tệ toàn cầu, Bitcoin không còn là tài sản đầu cơ mà đã trở thành nền móng của hệ thống tài chính phi tập trung mới...',
    category: Category.CRYPTO,
    author: 'Minh Quang',
    date: '12 Th01, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800',
    readTime: '10 phút'
  },
  {
    id: '3',
    title: 'Đầu Tư RWA: Sở Hữu Bất Động Sản Toàn Cầu Qua Token',
    excerpt: 'Sự bùng nổ của Real World Assets (RWA) cho phép nhà đầu tư nhỏ lẻ tiếp cận các tòa nhà cao ốc tại New York hoặc London chỉ với số vốn từ 100$.',
    content: 'Công nghệ Blockchain đã xóa nhòa ranh giới địa lý. Việc token hóa tài sản thực giúp tăng tính thanh khoản cho thị trường bất động sản truyền thống vốn dĩ chậm chạp...',
    category: Category.REAL_ESTATE,
    author: 'Thiên Chí Hàn',
    date: '10 Th01, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    readTime: '8 phút'
  },
  {
    id: '4',
    title: 'SaaS Tinh Gọn: Xu Hướng Khởi Nghiệp MMO Năm 2026',
    excerpt: 'Tại sao các mô hình kinh doanh siêu nhỏ (Micro-SaaS) lại mang lại lợi nhuận cao hơn các startup tỷ đô trong bối cảnh hiện nay.',
    content: 'Tập trung vào giải quyết một vấn đề cụ thể cho một nhóm khách hàng cụ thể. Với sự giúp sức của No-code và AI, một cá nhân có thể quản lý hệ thống phần mềm mang lại dòng tiền hàng chục ngàn đô mỗi tháng...',
    category: Category.STRATEGY,
    author: 'Hưu Doanh',
    date: '05 Th01, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    readTime: '12 phút'
  }
];

export const ICONS = {
  Search: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  Trending: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
  User: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Zap: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  Send: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
};
