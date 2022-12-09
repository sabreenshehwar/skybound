import React from 'react'
import { ContactContainer, ContactWrapper, ContactP, IconWrapper, Icons } from './ContactElements'
import { Icon } from '../Icons';

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <ContactP>
                    Listen | Download
                </ContactP>
                <IconWrapper>
                    <Icons>
                        <Icon name="email" />
                    </Icons>
                    <Icons>
                        <Icon name="apple" />
                    </Icons>
                    <Icons>
                        <Icon name="spotify" />
                    </Icons>
                    <Icons>
                        <Icon name="youtube" />
                    </Icons>
                    <Icons>
                        <Icon name="facebook" />
                    </Icons>
                    <Icons>
                        <Icon name="instagram" />
                    </Icons>
                </IconWrapper>
                <ContactP>
                    © 2022 Skybound. All rights reserved.
                    Coded and Designed by Sabreen Shehwar
                </ContactP>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact