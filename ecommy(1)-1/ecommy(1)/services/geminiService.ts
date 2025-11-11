import { GoogleGenAI, Type } from "@google/genai";
import type { GeneratedContent } from '../types';
import { API_KEY } from '../config';

const fileToGenerativePart = (base64: string, mimeType: string) => {
  return {
    inlineData: {
      data: base64,
      mimeType,
    },
  };
};

const contentSchema = {
    type: Type.OBJECT,
    properties: {
        title: {
            type: Type.STRING,
            description: "A catchy, SEO-friendly product title, around 60-80 characters long, including the main keywords."
        },
        description: {
            type: Type.STRING,
            description: "A detailed and persuasive product description (2-3 paragraphs) that highlights the product's benefits, features, and use cases. Use storytelling if appropriate."
        },
        bulletPoints: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 5-7 key feature/benefit bullet points. Each point should be concise and impactful."
        },
        tags: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 10-15 relevant keywords and tags for SEO and platform search."
        }
    },
    required: ["title", "description", "bulletPoints", "tags"]
};


export const generateEcommContent = async (
  base64Image: string,
  mimeType: string,
  productName: string,
  extraInfo: string
): Promise<GeneratedContent> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });

  const imagePart = fileToGenerativePart(base64Image, mimeType);
  
  const textPart = {
    text: `
      Product Name: ${productName}
      Additional Information: ${extraInfo}

      Based on the provided product name, information, and the attached image, generate the following content for an e-commerce product listing. The tone should be persuasive, professional, and appealing to online shoppers.
      Please provide the output in a structured JSON format.
    `
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [imagePart, textPart] },
      config: {
        systemInstruction: "You are an expert e-commerce copywriter. Your specialty is creating high-converting, SEO-optimized product listings from product images, names, and key details. You always provide your output in the requested JSON format.",
        responseMimeType: "application/json",
        responseSchema: contentSchema,
      }
    });

    const jsonString = response.text.trim();
    const parsedContent = JSON.parse(jsonString);
    return parsedContent as GeneratedContent;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content from AI. Please check the console for details.");
  }
};
