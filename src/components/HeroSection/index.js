import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroLogo, HeroP, HeroBtnWrapper, ArrowDown, ArrowForward, Button } from './HeroElements';
import img from '../images/logo.png';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroLogo img src={img} />
                <HeroP>
                    Cerebral Fountain out now
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="videos"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onMouseEnter={onHover} onMouseLeave={onHover}
                    >
                        Check it out {hover ? <ArrowDown /> : <ArrowForward />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;