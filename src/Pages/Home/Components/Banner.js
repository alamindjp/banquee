import React from 'react';
import { Link } from 'react-router-dom';
import arrow from "../../../Assets/icon/arrow.svg"
import CardContainer from './CardContainer';

const Banner = () => {
    return (
        <div className='h-[870px] bg-secondary overflow-hidden'>
            <div>
            <div className='w-[800px] h-[88px] mx-auto text-center py-32'>
                <h4 className="text-xl text-success">Features</h4>
                <h1 className="text-7xl text-success p-1">All in one card.</h1>
                <p className="text-success text-xl p-2">Senectus et netus et malesuada fames ac turpis.</p>
                <p className='text-success text-xl'> Sagittis vitae et leo duis ut diam.</p>
                <div className="flex mt-8 justify-center">
                    <Link to="/home" className="bg-primary py-3 px-4 rounded-lg cursor-pointer hover:bg-secondary hover:text-primary normal-case mr-8">Open Account</Link>
                    <Link to="/" className="text-primary cursor-pointer p-2 flex items-center justify-between">Compare Cards <img className='pl-2.5' src={arrow} alt="" /></Link>
                </div>
            </div>
            </div>
<CardContainer/>
        </div>
    );
};

export default Banner;