/* Side nav component used on mobile devices */

import React from 'react';

const SideNav = ({handlePageChange}) => {
    return (
        <ul className="sidenav" id="mobile-demo">
            <li className="firstnav"><a onClick={() => handlePageChange('main')} href="index.html" target="_self">About Me</a></li>
            <li><a onClick={() => handlePageChange('portfolio')} href="#portfolio-container" target="_self" >Portfolio</a></li>
        </ul>
    )
}

export default SideNav;