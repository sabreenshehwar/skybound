import React from 'react'
import { BannerContainer, BannerBg, ImgBg, BannerContent, BannerH1, BannerP } from './BannerElements';
import bannerimg from '../images/colors.jpg';

const Banner = () => {
    return (
        <BannerContainer>
            <BannerBg>
                <ImgBg img src={bannerimg} />
            </BannerBg>
            <BannerContent>
                <BannerP>
                    @Brass Monkey (w/ Monuments)
                </BannerP>
                <BannerH1>
                    NEW SHOW  HAPPENING IN OTTAWA
                </BannerH1>
                <BannerP>
                    September 23rd
                </BannerP>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner