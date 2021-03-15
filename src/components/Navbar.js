import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { FaBeer, FaHome, FaSearch } from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    /*
    Prevent the appearance of sign up when minimizing the window and refreshing the page.
    */
    useEffect(() => {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link 
                    to ="/" 
                    className="navbar-logo"
                    onClick={closeMobileMenu}>
                        LABARRE Vincent &nbsp; {/*&nbsp; to make a space in HTML*/}
                        <FaHome />
                    </Link>
                    <div className="menu-icon" onClick ={handleClick} >
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                       {/* 
                       cond ? value1 : value2 is a ternary expression : if cond=true, then value1, else: value2
                       */}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            {/*
                            The <link> tag defines the relationship between the current document and an external resource.
                            */}
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/CV" className="nav-links" onClick={closeMobileMenu}>
                                CV
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-links" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Bonus" className="nav-links" onClick={closeMobileMenu}>
                                Goodies
                            </Link>
                        </li>
                        {/*
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>*/}
                    </ul>
                    {/*
                    {button && <Button buttonStyle='btn--outline'> SIGN UP
                        </Button>}*/}
                </div>
            </nav>
        </>
    )
}

export default Navbar
