/* Side nav component used on mobile devices */

import React from 'react';

const SideNav = ({handlePageChange}) => {
    return (
        <ul className="sidenav" id="mobile-demo">
            <li><a onClick={() => handlePageChange('main')} href="index.html">Home</a></li>
            <li><a onClick={() => handlePageChange('main')} href="#about-me" target="_self">About Me</a></li>
            <li><a onClick={() => handlePageChange('portfolio')} href="#portfolio" target="_self" >Portfolio</a></li>
        </ul>
    )
}

export default SideNav;