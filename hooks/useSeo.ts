import { useEffect } from 'react';
import type { SeoProps } from '../types';

export const useSeo = ({ title, description, keywords, ogImage, ogUrl, schema }: SeoProps) => {
    useEffect(() => {
        document.title = title;

        const updateMetaTag = (selector: string, content?: string) => {
            const element = document.querySelector(selector) as HTMLMetaElement | null;
            if (element && content) {
                element.content = content;
            }
        };

        updateMetaTag('meta[name="description"]', description);
        updateMetaTag('meta[name="keywords"]', keywords);
        
        // Open Graph
        updateMetaTag('meta[property="og:title"]', title);
        updateMetaTag('meta[property="og:description"]', description);
        updateMetaTag('meta[property="og:url"]', ogUrl || window.location.href);
        updateMetaTag('meta[property="og:image"]', ogImage);

        // Twitter Card
        updateMetaTag('meta[property="twitter:title"]', title);
        updateMetaTag('meta[property="twitter:description"]', description);
        updateMetaTag('meta[property="twitter:url"]', ogUrl || window.location.href);
        updateMetaTag('meta[property="twitter:image"]', ogImage);
        
        // JSON-LD Schema
        let schemaElement = document.getElementById('json-ld-schema');
        if (schema) {
            if (!schemaElement) {
                // FIX: Use a new variable for the script element to ensure it's correctly typed as HTMLScriptElement.
                // This resolves the "Property 'type' does not exist on type 'HTMLElement'" error.
                // The error message's line number was likely off, referring to the 'type' property assignment.
                const newSchemaScript = document.createElement('script');
                newSchemaScript.id = 'json-ld-schema';
                newSchemaScript.type = 'application/ld+json';
                document.head.appendChild(newSchemaScript);
                schemaElement = newSchemaScript;
            }
            schemaElement.innerHTML = JSON.stringify(schema);
        } else if (schemaElement) {
            schemaElement.remove();
        }

    }, [title, description, keywords, ogImage, ogUrl, schema]);
};
