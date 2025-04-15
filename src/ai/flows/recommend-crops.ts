// src/ai/flows/recommend-crops.ts
'use server';

/**
 * @fileOverview This file defines the Genkit flow for recommending crops based on soil data.
 *
 * recommendCrops - The main function to call to get crop recommendations.
 * RecommendCropsInput - The input type for the recommendCrops function.
 * RecommendCropsOutput - The output type for the recommendCrops function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {analyzeSoil, SoilData} from '@/services/soil-analysis';

const RecommendCropsInputSchema = z.object({
  nitrogen: z.number().describe('Nitrogen level in the soil (ppm)'),
  phosphorus: z.number().describe('Phosphorus level in the soil (ppm)'),
  potassium: z.number().describe('Potassium level in the soil (ppm)'),
});
export type RecommendCropsInput = z.infer<typeof RecommendCropsInputSchema>;

const RecommendCropsOutputSchema = z.object({
  crops: z.array(
    z.object({
      name: z.string().describe('Name of the recommended crop'),
      suitability: z
        .string()
        .describe('Suitability of the crop for the given soil conditions'),
      yieldEstimate: z.string().describe('Estimated yield of the crop'),
      waterNeeds: z.string().describe('Water needs of the crop'),
      timeToHarvest: z.string().describe('Time to harvest the crop'),
    })
  ).describe('Recommended crops and their details'),
  soilAnalysisSummary: z.string().describe('Summary of the soil analysis'),
});
export type RecommendCropsOutput = z.infer<typeof RecommendCropsOutputSchema>;

export async function recommendCrops(input: RecommendCropsInput): Promise<RecommendCropsOutput> {
  return recommendCropsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendCropsPrompt',
  input: {
    schema: z.object({
      nitrogen: z.number().describe('Nitrogen level in the soil (ppm)'),
      phosphorus: z.number().describe('Phosphorus level in the soil (ppm)'),
      potassium: z.number().describe('Potassium level in the soil (ppm)'),
      soilAnalysisSummary: z.string().describe('Summary of the soil analysis'),
    }),
  },
  output: {
    schema: z.object({
      crops: z.array(
        z.object({
          name: z.string().describe('Name of the recommended crop'),
          suitability: z
            .string()
            .describe('Suitability of the crop for the given soil conditions'),
          yieldEstimate: z.string().describe('Estimated yield of the crop'),
          waterNeeds: z.string().describe('Water needs of the crop'),
          timeToHarvest: z.string().describe('Time to harvest the crop'),
        })
      ).describe('Recommended crops and their details'),
    }),
  },
  prompt: `You are an AI crop recommendation expert. Based on the soil analysis summary and nutrient levels, recommend the most suitable crops.

Soil Analysis Summary: {{{soilAnalysisSummary}}}
Nitrogen Level: {{{nitrogen}}} ppm
Phosphorus Level: {{{phosphorus}}} ppm
Potassium Level: {{{potassium}}} ppm

Consider factors like yield, water needs, and time to harvest when recommending crops.`,
});

const recommendCropsFlow = ai.defineFlow<
  typeof RecommendCropsInputSchema,
  typeof RecommendCropsOutputSchema
>(
  {
    name: 'recommendCropsFlow',
    inputSchema: RecommendCropsInputSchema,
    outputSchema: RecommendCropsOutputSchema,
  },
  async input => {
    const soilData: SoilData = {
      nitrogen: input.nitrogen,
      phosphorus: input.phosphorus,
      potassium: input.potassium,
    };

    const soilAnalysis = await analyzeSoil(soilData);
    const {output} = await prompt({
      ...input,
      soilAnalysisSummary: soilAnalysis.summary,
    });

    return {
      ...output,
      soilAnalysisSummary: soilAnalysis.summary,
    };
  }
);
