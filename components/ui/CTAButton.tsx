
import React from 'react';

interface CTAButtonProps {
    link: string;
    text: string;
    isPrimary?: boolean;
    className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ link, text, isPrimary = false, className = '' }) => {
    const baseClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:scale-105";
    const primaryClasses = "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
    const secondaryClasses = "text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600";

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses} ${className}`}
        >
            {text}
        </a>
    );
};

export default CTAButton;
