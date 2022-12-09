import React, { useState } from 'react';
import Band from '../components/Band';
import Banner from '../components/Banner';
import DataSection from '../components/DataSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/DataSection/Data';
import HeroSection from '../components/HeroSection';
import MusicVideos from '../components/MusicVideos';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Contact from '../components/Contact'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Band />
            <MusicVideos />
            <Banner />
            <DataSection {...homeObjOne} />
            <DataSection {...homeObjTwo} />
            <DataSection {...homeObjThree} />
            <Contact />

        </>
    )
}

export default Home