/* Header for portfolio container */
import React from 'react';
import Navigation from './Navigation';
import SideNav from './SideNav';

const Header = ({page, handlePageChange}) => {
    return (
        <div>
            <div className="navbar-fixed">
                <Navigation page={page} handlePageChange={handlePageChange}/>
            </div>
            <SideNav handlePageChange={handlePageChange}/>
        </div>

    );
}

export default Header;