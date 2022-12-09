import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavContainer, NavLogo, MobileIcon, NavbarMenu, NavItem, NavLinks, NavBtn, Button } from './NavbarElements';
import { ArrowDown, ArrowForward } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll/modules';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 700) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <img src={require('../images/icons.png')} alt='skybound' max-width='100%' />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavbarMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-120}
                            >
                                about
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="videos"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-120}
                            >
                                videos
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discography"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-120}
                            >
                                Discography
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-120}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavbarMenu>
                    <NavBtn>
                        <Button as="a" href="https://skyboundband.bandcamp.com/merch" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
                            bandcamp {hover ? <ArrowForward /> : <ArrowDown />}
                        </Button>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;