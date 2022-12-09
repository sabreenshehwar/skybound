import React from 'react'
import { VideosContainer, VideosWrapper } from './MVElements'
import ReactPlayer from 'react-player/lazy'



const MusicVideos = () => {
    return (
        <VideosContainer id='videos'>
            <VideosWrapper>
                <ReactPlayer playing={true} height='36rem' width='100%'
                    url='https://youtube.com/playlist?list=PL5EDQfNGyQaHsC5nvM_Ssbf4ilifPG-Qt'
                    // onReady={
                    //     () => console.log('The YT video has been loaded!')}
                    // onStart={
                    //     () => console.log('onStart callback')}
                    // onPause={
                    //     () => console.log('onPause callback')}
                    // onEnded={
                    //     () => console.log('onEnded callback')}
                    onError={
                        () => console.log('Error loading Youtube video')}
                />
            </VideosWrapper>
        </VideosContainer>
    )
}

export default MusicVideos