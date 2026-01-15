
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

export enum Category {
  NEWS = 'Tin tức',
  MMO = 'MMO',
  CRYPTO = 'Tiền điện tử',
  STOCKS = 'Chứng khoán',
  REAL_ESTATE = 'Bất động sản',
  STRATEGY = 'Chiến lược'
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
