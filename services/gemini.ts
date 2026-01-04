
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStylistResponse = async (history: { role: string; parts: { text: string }[] }[], message: string) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the HEX AI Stylist. HEX was founded by Penny in 2025. 
      The design engine of this house is Penny himself, a 16-year-old boy who is a fashion and tech prodigy. 
      He merges Nigerian heritage with 2025 futuristic technology. 
      Provide sharp, trend-forward fashion advice. 
      Keep responses concise and sophisticated. 
      Always mention that Penny's design engine is the source of these aesthetics and emphasize his youthful, visionary perspective.`,
    }
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};

export const generateVisionaryFashion = async (prompt: string): Promise<string | null> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { text: `High fashion editorial photography for HEX. Design Engine: Penny (16-year-old male prodigy). Futuristic, minimalist, avant-garde garment. ${prompt}. High quality, 8k resolution, cinematic lighting, 2025 aesthetic.` }
      ]
    },
    config: {
      imageConfig: {
        aspectRatio: "3:4"
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};
