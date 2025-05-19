
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenText, ShoppingBag, Info } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
          <Info size={48} className="text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          About ECommerce Tools
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Powerful insights and data extraction for your Amazon and Flipkart businesses.
        </p>
      </header>

      <div className="space-y-10">
        <Card className="shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-card-foreground/5 p-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpenText size={28} strokeWidth={1.5} />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">Amazon Keyword Research Tool</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-base text-muted-foreground space-y-3">
            <p>
              Unlock powerful Amazon market insights! Simply enter your desired product segment or keyword that you wish to research on Amazon.
              Our tool diligently gets to work, searching Amazon and scraping valuable data from the top 7 product listing pages for that specific keyword.
            </p>
            <p>
              This raw data, including product titles, prices, ratings, review counts, and more, is meticulously compiled into a comprehensive Google Sheet.
              You'll receive an email containing a direct link to this Google Sheet, allowing you to access and analyze the raw data at your convenience.
            </p>
            <p>
              But we don't stop there! The tool then performs an in-depth analysis of this collected data to generate a detailed research report. This report, highlighting key trends, competitor insights, and potential opportunities, will be delivered straight to your inbox within approximately <strong>5 minutes</strong>, along with the data link.
            </p>
            <p className="font-medium text-primary">
              Please note: To ensure fair usage, this tool has a limit of <strong>80 reports per month</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-card-foreground/5 p-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShoppingBag size={28} strokeWidth={1.5} />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">Flipkart FSN Scrapper</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-base text-muted-foreground space-y-3">
            <p>
              Streamline your Flipkart product data collection with our efficient FSN Scrapper. Input a list of Flipkart Serial Numbers (FSNs) – you can easily copy and paste these from your Excel sheets or enter them as comma-separated values.
            </p>
            <p>
              Our scrapper then diligently visits each corresponding product page on Flipkart to extract crucial details. This includes essential information such as product titles, current prices, customer ratings, and the total number of ratings.
            </p>
            <p>
              All this valuable information is neatly organized and stored in a Google Sheet for easy access and analysis. A direct link to this data source will be conveniently emailed to you within approximately <strong>5 minutes</strong> of submitting your FSN list.
            </p>
            <p className="font-medium text-primary">
              To ensure optimal performance and respect platform resources, please limit your FSN lists to a maximum of <strong>80 FSNs per request</strong>.
            </p>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} ECommerce Tools. All rights reserved.</p>
        <p className="mt-1">Empowering your e-commerce decisions.</p>
      </footer>
    </div>
  );
}
