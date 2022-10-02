import React from 'react';
import checkMark from '../../../Assets/icon/checkMark.svg'
import arrow2 from '../../../Assets/icon/arrow2.svg'
import VectorHelp from '../../../Assets/icon/VectorHelp.svg'
import card from '../../../Assets/images/card.svg'
import cardColorCard from '../../../Assets/images/cardColorCard.svg'
import cardMasterCard from '../../../Assets/images/cardMasterCard.svg'
import badgeDetails from '../../../Assets/icon/badgeDetails.svg'
import badgeLock from '../../../Assets/icon/badgeLock.svg'
import badgeSettings from '../../../Assets/icon/badgeSettings.svg'
import VectorHome from '../../../Assets/icon/VectorHome.svg'
import VectorSavings from '../../../Assets/icon/VectorSavings.svg'
import VectorCard from '../../../Assets/icon/VectorCard.svg'
import VectorAccount from '../../../Assets/icon/VectorAccount.svg'

const FeaturesApp = () => {
    return (
        <div className="hero min-h-screen text-success my-40">
            <div className="hero-content grid grid-cols-2 gap-40">
                <div>
                    <p className='text-xl mb-2'>Cards</p>
                    <h1 className='text-6xl mb-4'>Manage <br /> your cards</h1>
                    <p className='text-lg leading-8 mb-8'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <ul>
                        <li className='flex items-center'>
                            <span className='w-[24px] h-[24px] bg-secondary rounded-full p-1'><img className='w-[16px] h-[16px]' src={checkMark} alt="" /></span>
                            <span className='ml-2'>Malesuada Ipsum</span>
                        </li>
                        <li className='flex items-center my-2'>
                            <span className='w-[24px] h-[24px] bg-secondary rounded-full p-1'><img className='w-[16px] h-[16px]' src={checkMark} alt="" /></span>
                            <span className='ml-2'>Vestibulum</span>
                        </li>
                        <li className='flex items-center'>
                            <span className='w-[24px] h-[24px] bg-secondary rounded-full p-1'><img className='w-[16px] h-[16px]' src={checkMark} alt="" /></span>
                            <span className='ml-2'>Parturient Lorem</span>
                        </li>
                    </ul>
                </div>
                <div className='mobile w-[380px]'>
                    <div className='flex justify-between items-center'>
                        <img className='' src={arrow2} alt="" />
                        <p className='inter'>Cards</p>
                       <img src={VectorHelp} alt="" />
                    </div>
                    <div className='mt-10 mb-3'>
                        <img src={card} alt="" />
                    </div>
                    <div className='grid grid-cols-3 justify-items-center'>
                        <div className='my-6'>
                            <img className='' src={badgeDetails} alt="" />
                            <p className='text-xs'>Details</p>
                        </div>
                        <div className='my-6'>
                            <img className='' src={badgeLock} alt="" />
                            <p className='text-xs'>Lock Card</p>
                        </div>
                        <div className='my-6'>
                            <img className='' src={badgeSettings} alt="" />
                            <p className='text-xs'>Settings</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-lg mb-4'>All Cards</p>
                        <img src={cardMasterCard} alt="" />
                        <img className='mt-[-120px]' src={cardColorCard} alt="" />
                    </div>
                    <div className='grid grid-cols-4 mt-5 py-2 justify-items-center'>
                        <div>
                            <img className='pb-[3px] pl-2' src={VectorHome} alt="" />
                            <p className='text-xs'>Home</p>
                        </div>
                        <div>
                            <img className='pb-[3px] pl-3' src={VectorSavings} alt="" />
                            <p className='text-xs'>Savings</p>
                        </div>
                        <div>
                            <img className='pb-[3px] pt-[2px] pl-[6px]' src={VectorCard} alt="" />
                            <p className='text-xs'>Cards</p>
                        </div>
                        <div>
                            <img className='pb-[3px] pl-4' src={VectorAccount} alt="" />
                            <p className='text-xs'>Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesApp;