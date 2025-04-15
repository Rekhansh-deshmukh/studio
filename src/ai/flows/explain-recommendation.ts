// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Explains why a certain crop is recommended for the given soil.
 *
 * - explainRecommendation - A function that handles the explanation process.
 * - ExplainRecommendationInput - The input type for the explainRecommendation function.
 * - ExplainRecommendationOutput - The return type for the explainRecommendation function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ExplainRecommendationInputSchema = z.object({
  crop: z.string().describe('The crop being recommended.'),
  nitrogen: z.number().describe('Nitrogen level in the soil.'),
  phosphorus: z.number().describe('Phosphorus level in the soil.'),
  potassium: z.number().describe('Potassium level in the soil.'),
});
export type ExplainRecommendationInput = z.infer<
  typeof ExplainRecommendationInputSchema
>;

const ExplainRecommendationOutputSchema = z.object({
  explanation: z.string().describe('The explanation of why the crop is recommended for the given soil.'),
});
export type ExplainRecommendationOutput = z.infer<
  typeof ExplainRecommendationOutputSchema
>;

export async function explainRecommendation(
  input: ExplainRecommendationInput
): Promise<ExplainRecommendationOutput> {
  return explainRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainRecommendationPrompt',
  input: {
    schema: z.object({
      crop: z.string().describe('The crop being recommended.'),
      nitrogen: z.number().describe('Nitrogen level in the soil.'),
      phosphorus: z.number().describe('Phosphorus level in the soil.'),
      potassium: z.number().describe('Potassium level in the soil.'),
    }),
  },
  output: {
    schema: z.object({
      explanation: z.string().describe('The explanation of why the crop is recommended for the given soil.'),
    }),
  },
  prompt: `You are an AI assistant that provides explanations for crop recommendations based on soil data.

  Explain why the following crop is recommended for the given soil conditions. Be concise but informative.

  Crop: {{{crop}}}
  Nitrogen: {{{nitrogen}}} ppm
  Phosphorus: {{{phosphorus}}} ppm
  Potassium: {{{potassium}}} ppm`,
});

const explainRecommendationFlow = ai.defineFlow<
  typeof ExplainRecommendationInputSchema,
  typeof ExplainRecommendationOutputSchema
>(
  {
    name: 'explainRecommendationFlow',
    inputSchema: ExplainRecommendationInputSchema,
    outputSchema: ExplainRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
