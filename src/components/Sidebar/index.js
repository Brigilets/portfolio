import './index.scss'
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
// import LogoB from '../../assests/images/b.svg'
// import LogoSubtitle from '../../assests/images/rigita.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHome, faSuitcase, faUser, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        const timer= setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () =>{
            clearTimeout(timer);
        }
    }, [])

    return (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            {/* <img src={LogoB} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='name' /> */}
            <h1 className='logo-link' alt='initials'> <AnimatedLetters
               letterClass={letterClass}
               strArray={'BS'.split("")}
               idx={15} />
               </h1>
            
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname='active' 
           className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname='active' className="portfolio-link" to='/portfolio'>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            <FontAwesomeIcon 
            icon={faClose}
            color='#ffd700'
            size='3x'
            className='close-icon'
            onClick={() => setShowNav(false)}
             />
        </nav>
        <ul>
            <li>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/brigita-sabutyt%C4%97-junior-web-dev/">
                <FontAwesomeIcon className='anchor-icon' icon={faLinkedin} color="#4d4d4e" />
            </a>
            </li>
            <li>
            <a target="_blank" rel='noreferrer' href="https://github.com/Brigilets">
                <FontAwesomeIcon className='anchor-icon' icon={faGithub} color="#4d4d4e" />
            </a>
            </li>
        </ul>
        <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars} 
        color="#ffd700" 
        size="3x"
        className='hamburger-icon'
        />
    </div>
)}

export default Sidebar;