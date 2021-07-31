/* Header for portfolio container */
import React from 'react';
import Navigation from './Navigation';

const Header = ({page, handlePageChange}) => {
    return (
        <div className="navbar-fixed">
            <Navigation page={page} handlePageChange={handlePageChange}/>
        </div>
    );
}

export default Header;