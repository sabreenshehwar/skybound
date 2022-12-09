import React from 'react'
import tiago from '../images/edited/tiago.jpg';
import randy from '../images/edited/randy.jpg';
import dave from '../images/edited/dave.jpg';
import jamison from '../images/edited/jamison.jpg';
import { BandContainer, BandWrapper, ImgWrap, ImgMate, MateP, InstrumentP, Column1, Column2, BandRow, BandH6 } from './BandElements';

const Band = () => {
    return (
        <BandContainer id="about">
            <BandWrapper>
                <BandRow>
                    <Column1>
                        <MateP>
                            Tiago Underwood-Santos
                        </MateP>
                        <InstrumentP>
                            Guitars
                        </InstrumentP>
                        <ImgWrap>
                            <ImgMate src={tiago} alt={tiago} />
                        </ImgWrap>
                        <MateP>
                            Dave Ramsay
                        </MateP>
                        <InstrumentP>
                            Bass
                        </InstrumentP>
                        <ImgWrap>
                            <ImgMate src={dave} alt={dave} />
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <MateP>
                            Jamison Tomka
                        </MateP>
                        <InstrumentP>
                            Drums and Percussion
                        </InstrumentP>
                        <ImgWrap>
                            <ImgMate src={jamison} alt={jamison} />
                        </ImgWrap>
                        <MateP>
                            Randy Massia
                        </MateP>
                        <InstrumentP>
                            Additional guitars
                        </InstrumentP>
                        <ImgWrap>
                            <ImgMate src={randy} alt={randy} />
                        </ImgWrap>
                    </Column2>
                </BandRow>
                <BandH6>
                    Founded in 2017, Skybound is the accumulation of years of hard work, trial and error through previous projects, and the combination of technically proficient players hell bent on playing gripping music that captivates any listener. Hailing out of Ottawa, they channel the likes of modern rock and metal, they aim to then mix it with various other styles and feelings to create a sound and identity that is distinctly them.
                </BandH6>
            </BandWrapper>
        </BandContainer>
    )
}

export default Band