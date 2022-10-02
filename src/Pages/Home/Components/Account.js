import React from 'react';
import blackCard from '../../../Assets/images/card.svg';
import greenCard from '../../../Assets/images/cardColorCard.svg';
import yellowCard from '../../../Assets/images/cardMasterCard.svg';

const Account = () => {
    return (
        <div className='mb-40 custom-container mx-auto'>
            <div className='text-center w-1/2 mx-auto'>
                <p className="text-xl">Accounts</p>
                <h1 className="text-6xl my-2">Choose your card.</h1>
                <p className='text-xl mt-4'>Senectus et netus et malesuada fames ac turpis. <br /> Sagittis vitae et leo duis ut diam.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-20'>
                <div className="card w-96 text-center">
                    <div className="card-body">
                        <h2 className="text-xl relative">Basic<span className="text-xs rounded-[4px] ml-1 px-1 text-primary bg-secondary absolute top-1">Popular</span></h2>
                        <div className='w-2/3 mx-auto'>
                            <h2 className='text-4xl font-bold mt-5'>Free</h2>
                            <p className='text-sm mt-2 text-[#8c8b8e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <img className='my-6' src={greenCard} alt="" />
                        <button className="bg-primary text-white hover:bg-secondary hover:text-primary py-2 rounded-md">Get started</button>
                    </div>
                </div>
                <div className="card w-96 text-center">
                    <div className="card-body">
                        <h2 className="text-xl">Premium</h2>
                        <div className='w-2/3 mx-auto'>
                            <h2 className='text-4xl font-bold mt-5'>$5 <span className='text-sm text-[#8c8b8e]'>Per month</span></h2>
                            <p className='text-sm mt-2 text-[#8c8b8e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <img className='my-6' src={blackCard} alt="" />
                        <button className="bg-primary text-white hover:bg-secondary hover:text-primary py-2 rounded-md">Get started</button>
                    </div>
                </div>
                <div className="card w-96 text-center">
                    <div className="card-body">
                        <h2 className="text-xl">Gold</h2>
                        <div className='w-2/3 mx-auto'>
                            <h2 className='text-4xl font-bold mt-5'>$10 <span className='text-sm text-[#8c8b8e]'>Per month</span></h2>
                            <p className='text-sm mt-2 text-[#8c8b8e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <img className='my-6' src={yellowCard} alt="" />
                        <button className="bg-primary text-white hover:bg-secondary hover:text-primary py-2 rounded-md">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;