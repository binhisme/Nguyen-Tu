
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick, featured = false }) => {
  if (featured) {
    return (
      <div 
        onClick={() => onClick(article)}
        className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer"
      >
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <span className="inline-block px-3 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
            {article.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight group-hover:text-amber-400 transition-colors tracking-normal">
            {article.title}
          </h2>
          <p className="text-slate-300 line-clamp-2 mb-6 max-w-2xl">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-amber-500/20"></div>
              {article.author}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} đọc</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(article)}
      className="luxury-card p-4 rounded-3xl cursor-pointer group"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl mb-6">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase rounded-md border border-amber-500/20">
            {article.category}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold mb-3 leading-snug group-hover:text-amber-400 transition-colors tracking-normal">
          {article.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[11px] text-slate-500 font-medium">
          <span>{article.author}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
