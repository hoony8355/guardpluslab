
import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ArticleListPage from './components/pages/ArticleListPage';
import ArticlePage from './components/pages/ArticlePage';
import { useDarkMode } from './hooks/useDarkMode';
import CTAButton from './components/ui/CTAButton';
import { COUPANG_LINK } from './constants';

const App: React.FC = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const [route, setRoute] = useState(window.location.hash || '#/');

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash || '#/');
            window.scrollTo(0, 0);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = () => {
        if (route.startsWith('#/articles/')) {
            const slug = route.split('/')[2];
            return <ArticlePage slug={slug} />;
        }
        if (route === '#/articles') {
            return <ArticleListPage />;
        }
        return <HomePage />;
    };

    return (
        <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {renderPage()}
            </main>
            <Footer />
            <div className="fixed bottom-4 right-4 z-50">
                <CTAButton link={COUPANG_LINK} text="쿠팡 최저가 구매" isPrimary={true} />
            </div>
        </div>
    );
};

export default App;
