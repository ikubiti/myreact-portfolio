import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import '../styles/main.css';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // Using conditional rendering
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/* RenderPage current page  */}
            {renderPage()}
        </div>
    );
}
