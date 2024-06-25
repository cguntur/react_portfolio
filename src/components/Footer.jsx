//import { Link, useLocation } from 'react-router-dom';

function Footer() {
    //const currentPage = useLocation().pathname;

    return (
        <div className="footer">
            <p className="copy">&copy; Chandrika Sista 2024</p>
            <ul>
                <li className="social_media_profile"><a href="https://www.linkedin.com/in/chandrikaguntur/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                <li className="social_media_profile"><a href="https://github.com/cguntur" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                <li className="social_media_profile"><a href="https://profiles.wordpress.org/cguntur/" target="_blank"><i className="fa-brands fa-wordpress"></i></a></li>
            </ul>
        </div>
    
    )
    
}  
export default Footer;