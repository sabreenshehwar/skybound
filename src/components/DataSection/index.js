import React, { useState } from 'react'
import { Button, ArrowDown, ArrowForward } from '../ButtonElement';
import { DataContainer, DataWrapper, DataRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, Column2 } from './DataElements';

const DataSection = ({ lightBg, id, imgStart, topLine, topText, lightText, headline, darkText, description, buttonLabel, img, alt }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <DataContainer lightBg={lightBg} id={id}>
                <DataWrapper>
                    <DataRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine topText={topText}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                            </TextWrapper>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                            </TextWrapper>
                            <BtnWrap>
                                <Button to="videos">
                                    {buttonLabel}
                                    {hover ? <ArrowForward /> : <ArrowDown />}
                                </Button>
                            </BtnWrap>
                        </Column2>
                    </DataRow>
                </DataWrapper>
            </DataContainer>
        </>
    )
}

export default DataSection