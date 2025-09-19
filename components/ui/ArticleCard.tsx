
import React from 'react';
import type { Article } from '../../types';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <a href={`#/articles/${article.slug}`} className="block group fade-in">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full flex flex-col transition-shadow duration-300 hover:shadow-2xl">
                <img className="h-48 w-full object-cover" src={article.image} alt={article.title} />
                <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{article.publishedDate}</p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{article.title}</h3>
                    <p className="mt-3 text-base text-gray-600 dark:text-gray-300 flex-grow">{article.description}</p>
                    <div className="mt-4">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">더 읽어보기 &rarr;</span>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ArticleCard;
