/* Portfolio container */
import React, {useState} from 'react';
import Header from './Header';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio'

const PortfolioContainer = () => {
    const [page, setPage] = useState('main');

    const renderPage = () => {
        if (page === 'main') {
            return <Main/>;
        } else if (page === 'portfolio') {
            return <Portfolio/>;
        } else {
            console.log('There was an error in rendering');
        }
    }

    const handlePageChange = (page) => {
        setPage(page)
    }

    return (
        <div>
            <div className="wrapper">
                <Header page={page} handlePageChange={handlePageChange}/>
                {renderPage()}
            </div>
        </div>
    )
}

export default PortfolioContainer;