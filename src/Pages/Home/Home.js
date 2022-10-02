import React from 'react';
import Account from './Components/Account';
import Banking from './Components/Banking';
import Banner from './Components/Banner';
import Features from './Components/Features';
import FeaturesApp from './Components/FeaturesApp';
import Footer from './Components/Footer';
import Header from './Components/Header';
import QnaSection from './Components/QnaSection';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Features />
            <FeaturesApp />
            <div className='divider'></div>
            <Banking/>
            <Account/>
            <QnaSection/>
            <div className='divider'></div>
            <Footer/>
        </div>
    );
};

export default Home;