'use server';

/**
 * @fileOverview This file defines a Genkit flow that tailors a portfolio to a specific job description.
 *
 * - tailorPortfolioToJobDescription - A function that tailors the portfolio content based on the job description.
 * - TailorPortfolioToJobDescriptionInput - The input type for the tailorPortfolioToJobDescription function.
 * - TailorPortfolioToJobDescriptionOutput - The output type for the tailorPortfolioToJobDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorPortfolioToJobDescriptionInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to tailor the portfolio to.'),
  portfolioSummary: z.string().describe('A summary of the portfolio content.'),
});

export type TailorPortfolioToJobDescriptionInput = z.infer<
  typeof TailorPortfolioToJobDescriptionInputSchema
>;

const TailorPortfolioToJobDescriptionOutputSchema = z.object({
  tailoredContent: z
    .string()
    .describe(
      'The portfolio content tailored to the job description, highlighting relevant skills and experiences.'
    ),
});

export type TailorPortfolioToJobDescriptionOutput = z.infer<
  typeof TailorPortfolioToJobDescriptionOutputSchema
>;

export async function tailorPortfolioToJobDescription(
  input: TailorPortfolioToJobDescriptionInput
): Promise<TailorPortfolioToJobDescriptionOutput> {
  return tailorPortfolioToJobDescriptionFlow(input);
}

const tailorPortfolioToJobDescriptionPrompt = ai.definePrompt({
  name: 'tailorPortfolioToJobDescriptionPrompt',
  input: {
    schema: TailorPortfolioToJobDescriptionInputSchema,
  },
  output: {
    schema: TailorPortfolioToJobDescriptionOutputSchema,
  },
  prompt: `You are an AI expert in tailoring portfolio content to match specific job descriptions.

  Given the following job description:
  {{jobDescription}}

  And the following portfolio summary:
  {{portfolioSummary}}

  Tailor the portfolio content to highlight the most relevant skills and experiences for the job description.
  Focus on making the content concise and impactful, emphasizing the aspects that align with the job requirements.
  Return the tailored content that directly addresses the needs and qualifications outlined in the job description.
  `,
});

const tailorPortfolioToJobDescriptionFlow = ai.defineFlow(
  {
    name: 'tailorPortfolioToJobDescriptionFlow',
    inputSchema: TailorPortfolioToJobDescriptionInputSchema,
    outputSchema: TailorPortfolioToJobDescriptionOutputSchema,
  },
  async input => {
    const {output} = await tailorPortfolioToJobDescriptionPrompt(input);
    return output!;
  }
);
