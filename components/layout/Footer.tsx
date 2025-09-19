
import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <Logo className="h-7 w-auto text-blue-600 dark:text-blue-500" />
                        <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">GuardPlus Lab</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        © {new Date().getFullYear()} GuardPlus Lab. All rights reserved. <br/>
                        본 사이트는 쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Released under the MIT License.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
