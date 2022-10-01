import React from 'react';
import Banner from './Components/Banner';
import Features from './Components/Features';
import FeaturesApp from './Components/FeaturesApp';
import Footer from './Components/Footer';
import Header from './Components/Header';
import QnaSection from './Components/QnaSection';

const Home = () => {
    return (
        <div>
            {/* <Header />
            <Banner />
            <Features /> */}
            <FeaturesApp />
            <div className='divider'></div>
            <QnaSection/>
            <Footer/>
        </div>
    );
};

export default Home;