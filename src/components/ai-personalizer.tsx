"use client"

import { useState } from 'react';
import { tailorPortfolioToJobDescription } from '@/ai/flows/tailor-portfolio-to-job-description';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function AiPersonalizer({ portfolioSummary }: { portfolioSummary: string }) {
  const [jobDescription, setJobDescription] = useState('');
  const [tailoredContent, setTailoredContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription.trim()) {
      toast({
        title: "Job description is empty",
        description: "Please paste a job description to personalize your summary.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setTailoredContent('');
    try {
      const result = await tailorPortfolioToJobDescription({
        jobDescription,
        portfolioSummary,
      });
      setTailoredContent(result.tailoredContent);
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred",
        description: "Failed to generate tailored summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg border-primary/20">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Sparkles className="text-accent" />
            Tailor My Summary
          </CardTitle>
          <CardDescription>
            Paste a job description below, and our AI will tailor the professional summary to highlight the most relevant skills and experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Paste job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={8}
            className="text-sm"
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Personalize Now'
            )}
          </Button>
        </CardFooter>
      </form>
      {tailoredContent && (
        <div className="p-6 pt-0">
          <Alert className="bg-primary/5 border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <AlertTitle className="font-headline text-primary">Your Tailored Summary</AlertTitle>
            <AlertDescription className="text-foreground/80 whitespace-pre-line">
              {tailoredContent}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </Card>
  );
}
