/* Portfolio container */

// Import all react dependencies and components
import React, {useState} from 'react';
import Header from './Header';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';

const PortfolioContainer = () => {

    // Default page is main page
    const [page, setPage] = useState('main');

    // Renders page based on change of page state
    const renderPage = () => {
        if (page === 'main') {
            return <Main/>;
        } else if (page === 'portfolio') {
            return <Portfolio/>;
        } else {
            console.log('There was an error in rendering');
        }
    }

    // Changes page state on click
    const handlePageChange = (page) => {
        setPage(page)
    }

    return (
        <div>
            <div className="wrapper">
                <Header page={page} handlePageChange={handlePageChange}/>
                {renderPage()}
                <Footer/>
            </div>
        </div>
    )
}

export default PortfolioContainer;