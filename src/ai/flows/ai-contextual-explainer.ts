'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating contextual explanations
 * for DMED features or statistics, tailored to different audience types.
 *
 * - aiContextualExplainer - A function that provides an AI-generated explanation.
 * - AiContextualExplainerInput - The input type for the aiContextualExplainer function.
 * - AiContextualExplainerOutput - The return type for the aiContextualExplainer function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiContextualExplainerInputSchema = z.object({
  dataPoint: z
    .string()
    .describe(
      'A specific data point, feature, or section from the DMED information board (e.g., "38 million electronic medical records", "AI TOP3-DSS solution").'
    ),
  audienceType: z
    .string()
    .describe(
      'The target audience for the explanation (e.g., "medical professional", "government official", "general public").'
    ),
});
export type AiContextualExplainerInput = z.infer<
  typeof AiContextualExplainerInputSchema
>;

const AiContextualExplainerOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A concise, AI-generated explanation tailored to the specified audience.'),
});
export type AiContextualExplainerOutput = z.infer<
  typeof AiContextualExplainerOutputSchema
>;

export async function aiContextualExplainer(
  input: AiContextualExplainerInput
): Promise<AiContextualExplainerOutput> {
  return aiContextualExplainerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contextualExplainerPrompt',
  input: { schema: AiContextualExplainerInputSchema },
  output: { schema: AiContextualExplainerOutputSchema },
  prompt: `You are an AI assistant tasked with providing concise, context-aware explanations for features and statistics related to the DMED digital healthcare system in Uzbekistan. The information is presented on an official, modern, high-tech information board for ministry-level events.

Generate an explanation for the following data point, tailored to the specified audience type.

Data Point: {{{dataPoint}}}
Audience Type: {{{audienceType}}}

Ensure the explanation is:
- Concise and to the point.
- Relevant to the target audience's likely interests and level of understanding.
- Reflects the official, strict, modern, and premium style of the DMED information board.

If the data point is a statistic, explain its significance. If it's a feature or solution, describe its purpose and key benefits from the perspective of the target audience.`,
});

const aiContextualExplainerFlow = ai.defineFlow(
  {
    name: 'aiContextualExplainerFlow',
    inputSchema: AiContextualExplainerInputSchema,
    outputSchema: AiContextualExplainerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
