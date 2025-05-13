'use client';

import { useState } from 'react';
import { NewResearchForm, type NewResearchFormData } from '@/components/new-research-form';
import { searchNewResearchTool } from '../actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewResearchToolPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');
  const [searchedKeyword, setSearchedKeyword] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const handleSearch = async (data: NewResearchFormData) => {
    setStatus('loading');
    setSearchedKeyword(data.keyword);
    setUserEmail(data.email);
    setMessage(''); 

    try {
      const result = await searchNewResearchTool(data.keyword, data.email);
      setSearchedKeyword(result.searchedKeyword); 
      if (result.emailSentTo) {
        setUserEmail(result.emailSentTo);
      }
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
      console.error("New research tool search failed:", error);
    }
  };

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-8">
      <Card className="w-full max-w-lg shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <CardTitle className="text-3xl font-bold">New Research Tool</CardTitle>
          <CardDescription className="text-lg text-muted-foreground pt-1">
            Enter a keyword and your email to generate a report with our new tool.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6 sm:p-8">
          <NewResearchForm onSearch={handleSearch} isLoading={status === 'loading'} />

          {status === 'loading' && (
            <Alert className="flex items-center">
              <Loader2 className="h-5 w-5 animate-spin text-primary mr-3" />
              <div>
                <AlertTitle className="font-semibold">Generating Report...</AlertTitle>
                <AlertDescription>
                  Processing your request for &quot;{searchedKeyword}&quot; and preparing your report. Please wait.
                </AlertDescription>
              </div>
            </Alert>
          )}

          {status === 'success' && (
            <Alert className="bg-accent text-accent-foreground border-accent rounded-md">
              <CheckCircle className="h-5 w-5 mr-3" />
              <div>
                <AlertTitle className="font-semibold">Success!</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </div>
            </Alert>
          )}

          {status === 'error' && (
            <Alert variant="destructive" className="rounded-md">
              <AlertTriangle className="h-5 w-5 mr-3" />
              <div>
                <AlertTitle className="font-semibold">Error</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </div>
            </Alert>
          )}
        </CardContent>
      </Card>
       <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} ECommerce Tools. All rights reserved.</p>
      </footer>
    </div>
  );
}
