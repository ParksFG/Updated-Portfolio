import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NavTabs from './NavTabs'

const styles = {
    headerStyle: {
        background: '#25023B',
    },
    headingStyle: {
        fontSize: '50px',
        margin: '0px',
        color: '#F1E3E4',
        textAlign: 'right',
        paddingRight: '35px'
    },
};

function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header style={styles.headerStyle} className="header">
                <h1 style={styles.headingStyle}>Parker Gay</h1>
                    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {renderPage()}
        </div>
  );
}

export default Header;
