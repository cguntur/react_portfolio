//import { Link, useLocation } from 'react-router-dom';

import Nav from './NavTabs';

function Header() {
    //const currentPage = useLocation().pathname;
    return (
        <div className="header">
            <h1 className="title">My Portfolio</h1>
            <Nav />
        </div>
    )
}  
export default Header;