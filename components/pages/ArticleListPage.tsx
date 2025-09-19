
import React from 'react';
import { ARTICLES } from '../../constants';
import ArticleCard from '../ui/ArticleCard';
import { useSeo } from '../../hooks/useSeo';

const ArticleListPage: React.FC = () => {
    useSeo({
        title: '전체 가이드 | 가드플러스 호신용 스프레이',
        description: '가드플러스 호신용 스프레이에 대한 모든 정보를 확인하세요. 사용법, 법규, 후기, 비교 분석 등 전문가의 상세 가이드를 제공합니다.',
        keywords: '호신용 스프레이 가이드, 가드플러스 사용법, 안전 팁, 법률 정보'
    });

    return (
        <div className="fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">가드플러스 전체 가이드</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    당신의 안전을 위한 모든 지식. 구매부터 실전 사용까지, 전문가가 알려주는 상세 정보를 확인하세요.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {ARTICLES.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                ))}
            </div>
        </div>
    );
};

export default ArticleListPage;
