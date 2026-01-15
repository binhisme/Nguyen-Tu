
import { GoogleGenAI } from "@google/genai";

// Fix: initialize GoogleGenAI strictly according to guidelines using process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getInvestmentAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Bạn là trợ lý ảo cao cấp của Nguyễn Tú GOLD - chuyên gia đầu tư và MMO hàng đầu thế giới trong năm 2026. Hãy trả lời câu hỏi sau một cách chuyên nghiệp, sang trọng, súc tích và cung cấp các bước hành động cụ thể cho bối cảnh thị trường năm 2026 (nơi AI Agents, RWA và Bitcoin đã trở nên phổ biến). Luôn thể hiện sự am hiểu sâu sắc về thị trường. Câu hỏi: ${query}`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi quý khách, hệ thống phân tích chiến lược 2026 của Nguyễn Tú GOLD đang bảo trì. Vui lòng quay lại sau.";
  }
};

export const summarizeArticle = async (content: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Hãy tóm tắt bài viết sau thành 3 điểm cốt yếu nhất theo phong cách của một báo cáo chiến lược tài chính 2026: ${content}`,
      config: {
        temperature: 0.3,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Summarization Error:", error);
    return null;
  }
};
