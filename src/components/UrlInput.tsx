import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Globe, Loader2, StopCircle, Search } from 'lucide-react';

interface UrlInputProps {
  onSubmit: (url: string) => void;
  onStop: () => void;
  isMonitoring: boolean;
  isLoading: boolean;
}

export function UrlInput({ onSubmit, onStop, isMonitoring, isLoading }: UrlInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter website URL (e.g., example.com)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="pl-12 h-14 text-base border-2 bg-card focus:border-chart-1 transition-colors"
            disabled={isMonitoring}
          />
        </div>
        {isMonitoring ? (
          <Button
            type="button"
            onClick={onStop}
            variant="destructive"
            size="lg"
            className="h-14 px-8 text-base font-medium"
          >
            <StopCircle className="mr-2 h-5 w-5" />
            Stop Monitoring
          </Button>
        ) : (
          <Button
            type="submit"
            size="lg"
            className="h-14 px-8 text-base font-medium bg-chart-1 hover:bg-chart-1/90"
            disabled={isLoading || !inputValue.trim()}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Start Monitoring
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
