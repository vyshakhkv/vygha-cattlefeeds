import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import Logo from '../../assets/logo/logo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    // Mobile Menu State
    const [sidenav, setSidenav] = useState(false);

    // Desktop Fixed Menu
    const [sticky, setSticky] = useState(false);

    // Mobile Icon
    const menuIcon = <FontAwesomeIcon icon={faBars} />

    // SideNav
    const sidenavShow = () => {
        setSidenav(!sidenav);
    }

    // Scroll Fixed Navbar
    useEffect(()=>{
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })


  return (
    <>
    <header id="site_header" className={`${sticky ? "sticky" : ''}`}>
        <div className="container">
            <nav className="navbar" id="Navbar">
                <div className="navbar_brand">
                    <a href="/">
                        <h1>Vygha
                        </h1>

                    </a>
                </div>
                <div className="navbar_toggler" onClick={sidenavShow}>
                    {menuIcon}
                </div>
                <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link activeClass="active" to="home" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true}>
                               Our Product
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                              About Us
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="blog" spy={true} smooth={true}>
                                Blog
                            </Link>
                        </li> */}
                        <li>
                            <Link to="contact" spy={true} smooth={true}>
                                Touch With Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    </header> 
    </>
    
  )
}
