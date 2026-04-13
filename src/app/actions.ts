
'use server';

import { aiContextualExplainer, type AiContextualExplainerInput } from '@/ai/flows/ai-contextual-explainer';
import { z } from 'zod';

const inputSchema = z.object({
  dataPoint: z.string(),
  audienceType: z.string(),
});

export async function getAIExplanation(input: AiContextualExplainerInput) {
  try {
    const validatedInput = inputSchema.parse(input);
    const output = await aiContextualExplainer(validatedInput);
    return { success: true, explanation: output.explanation };
  } catch (error) {
    console.error('AI Explanation Error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Noto'g'ri ma'lumot kiritildi." };
    }
    return { success: false, error: "Tushuntirish yaratib bo'lmadi. Iltimos, keyinroq qayta urinib ko'ring." };
  }
}
