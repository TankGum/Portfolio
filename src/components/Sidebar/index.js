import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss'
import Logo from '../../assets/images/avatar.jpg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='logosub' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/tank-gum-180b07239/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/TankGum'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCAmZn9udsYoEmlgDIF_zM1A'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.facebook.com/TankGum/'>
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/tankgum/'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;