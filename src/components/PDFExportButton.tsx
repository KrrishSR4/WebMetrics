<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { generateWorkingPremiumPDF } from './WorkingPremiumPDF';
import { captureAllCharts } from '@/utils/screenshotCapture';
=======
import { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { generatePDFReport } from '@/lib/pdfReportGenerator';
>>>>>>> d70c266466fb345c00bb7245ab62959fda8be001
import type { MonitoringResult } from '@/types/metrics';

interface PDFExportButtonProps {
  data: MonitoringResult;
<<<<<<< HEAD
  url: string;
  disabled?: boolean;
}

export function PDFExportButton({ data, url, disabled }: PDFExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
=======
  disabled?: boolean;
}

export function PDFExportButton({ data, disabled }: PDFExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = useCallback(async () => {
>>>>>>> d70c266466fb345c00bb7245ab62959fda8be001
    setIsExporting(true);

    try {
<<<<<<< HEAD
      console.log('Starting PDF export for:', url);
      console.log('Data:', data);

      // Capture screenshots of all charts
      const screenshots = await captureAllCharts();
      console.log('Captured screenshots:', Object.keys(screenshots));

      // Generate PDF with screenshots
      generateWorkingPremiumPDF({ data, url, screenshots });
      console.log('Working Premium PDF export completed');
=======
      generatePDFReport(data);
>>>>>>> d70c266466fb345c00bb7245ab62959fda8be001
    } catch (error) {
      console.error('PDF export error:', error);
      alert('PDF export failed. Please check the console for details.');
    } finally {
      setIsExporting(false);
    }
<<<<<<< HEAD
  };
=======
  }, [data]);
>>>>>>> d70c266466fb345c00bb7245ab62959fda8be001

  return (
    <Button
      variant="outline"
      onClick={handleExport}
      disabled={disabled || isExporting}
      className="gap-2"
    >
      {isExporting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <FileDown className="h-4 w-4" />
          Export PDF
        </>
      )}
    </Button>
  );
}
