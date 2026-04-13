'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getAIExplanation } from '@/app/actions';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/context/language-context';

export function AiExplainerDialog({ dataPoint, children }: { dataPoint: string; children: React.ReactNode }) {
  const { dictionary } = useLanguage();
  const { dialog, buttonTooltip } = dictionary.aiExplainer;
  
  const [open, setOpen] = useState(false);
  const [audience, setAudience] = useState('medical professional');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleExplain = async () => {
    setLoading(true);
    setExplanation('');
    const result = await getAIExplanation({
      dataPoint,
      audienceType: audience,
    });
    setLoading(false);
    if (result.success) {
      setExplanation(result.explanation!);
    } else {
      toast({
        variant: "destructive",
        title: dialog.errorTitle,
        description: result.error,
      });
    }
  };
  
  const audienceOptions = [
    { value: 'medical professional', label: dialog.audiences.medical },
    { value: 'government official', label: dialog.audiences.government },
    { value: 'general public', label: dialog.audiences.public },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-card/95 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wand2 className="text-primary" />
            <span>{dialog.title}</span>
          </DialogTitle>
          <DialogDescription>
             {dialog.description.replace('{dataPoint}', dataPoint)}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="audience" className="text-right">
              {dialog.audienceLabel}
            </label>
            <Select value={audience} onValueChange={setAudience}>
              <SelectTrigger id="audience" className="col-span-3">
                <SelectValue placeholder={dialog.audiencePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {audienceOptions.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {loading && (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {explanation && (
            <div className="rounded-md border border-primary/20 bg-background p-4 text-sm text-foreground/90">
              {explanation}
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleExplain} disabled={loading} className="w-full sm:w-auto">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {dialog.buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function AiExplainerButton({ dataPoint }: { dataPoint: string }) {
  const { dictionary } = useLanguage();
  return (
    <AiExplainerDialog dataPoint={dataPoint}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-7 w-7 text-muted-foreground hover:text-primary hover:bg-transparent"
              aria-label="Get AI explanation"
            >
              <Sparkles className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{dictionary.aiExplainer.buttonTooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AiExplainerDialog>
  );
}
