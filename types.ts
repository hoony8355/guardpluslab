// FIX: Import ReactElement to resolve "Cannot find namespace 'JSX'" error.
import type { ReactElement } from 'react';

export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  content: () => ReactElement;
  image: string;
  publishedDate: string;
}

export interface SeoProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogUrl?: string;
    schema?: object;
}