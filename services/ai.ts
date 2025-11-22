import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// The API key must be obtained exclusively from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (
  userMessage: string,
  chatHistory: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const systemInstruction = `
      You are "AvenBot", the AI sales assistant for Avenstek HRMS.
      Avenstek HRMS is a SaaS platform for SMEs and Enterprises offering Payroll, Attendance (Geo-fencing), Recruitment, and Analytics.
      
      Key Pricing Info:
      - Small Business Basic: ₹399/user/month
      - Small Business Pro: ₹699/user/month
      - Enterprise plans are custom.
      
      Tone: Professional, helpful, concise, and persuasive.
      Goal: Explain features and encourage the user to "Book a Demo".
      Do not make up false features. If you don't know, ask them to contact sales.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...chatHistory, // Context
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "I'm currently experiencing high traffic. Please try again later or contact our sales team directly.";
  }
};