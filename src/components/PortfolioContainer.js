/* Portfolio container */

// Import all react dependencies and components
import React from 'react';
import Header from './Header';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';

const PortfolioContainer = () => {

    return (
        <div>
            <div className="wrapper">
                <Header/>
                <Main/>
                <Portfolio/>
                <Footer/>
            </div>
        </div>
    )
}

export default PortfolioContainer;