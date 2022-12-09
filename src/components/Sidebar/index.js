import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper, SideBtnWrap, Button } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-120}>
                        about
                    </SidebarLink>
                    <SidebarLink to="videos" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-120}
                    >
                        videos
                    </SidebarLink>
                    <SidebarLink to="discography" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-120}
                    >
                        discography
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-120}
                    >
                        contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <Button as="a" href="https://skyboundband.bandcamp.com/merch" target="_blank">
                        Bandcamp
                    </Button>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar