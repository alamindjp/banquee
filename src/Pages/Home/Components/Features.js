import React from 'react';
import send from '../../../Assets/icon/send.svg'
import receive from '../../../Assets/icon/receive.svg'
import checkMark from '../../../Assets/icon/checkMark.svg'
import arrow from '../../../Assets/icon/arrow.svg'
import card from '../../../Assets/images/card.svg'
import apple from '../../../Assets/icon/apple.svg'
import amazon from '../../../Assets/icon/amazon.svg'
import google from '../../../Assets/icon/google.svg'
import twitter from '../../../Assets/icon/twitter.svg'
import VectorHome from '../../../Assets/icon/VectorHome.svg'
import VectorSavings from '../../../Assets/icon/VectorSavings.svg'
import VectorCard from '../../../Assets/icon/VectorCard.svg'
import VectorAccount from '../../../Assets/icon/VectorAccount.svg'

const Features = () => {
    return (
        <div className="hero min-h-screen text-success mt-40">
            <div className="hero-content grid grid-cols-2 gap-40">
                <div>
                    <p className='text-xl mb-2'>Transactions</p>
                    <h1 className='text-6xl mb-4'>Send & receive money instantly</h1>
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
                <div className='mobile'>
                    <div className='flex justify-between'>
                        <p className='inter'>Current balance</p>
                        <p className='text-2xl'>$ 4.658,50</p>
                    </div>
                    <div className='mt-5'>
                        <img src={card} alt="" />
                    </div>
                    <div className='flex justify-between mt-6 mb-8'>
                        <p className='flex items-center'><img src={send} alt="" /> <span className='text-[14px] pl-2'>Send Money</span></p>
                        <p className='flex items-center'><img src={receive} alt="" /> <span className='text-[14px] pl-2'>Receive Money</span></p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-lg'>Transactions</p>
                        <button className='flex items-center gap-2 text-primary'><span>View all</span><img src={arrow} alt="" /></button>
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-between items-center bg-secondary p-3 rounded-lg'>
                            <div className='flex'>
                                <img src={apple} alt="" />
                                <p className='pl-3'><span >Apple</span><span className='block text-xs'>Electronic</span></p>
                           </div>
                            <p>-799$</p>
                        </div>
                        <div className='flex justify-between items-center bg-secondary my-3 p-3 rounded-lg'>
                            <div className='flex'>
                                <img src={google} alt="" />
                                <p className='pl-3'><span >Google Play Store</span><span className='block text-xs'>Apps</span></p>
                           </div>
                            <p>-49$</p>
                        </div>
                        <div className='flex justify-between items-center bg-secondary p-3 rounded-lg'>
                            <div className='flex'>
                                <img src={amazon} alt="" />
                                <p className='pl-3'><span >Amazon</span><span className='block text-xs'>Shopping</span></p>
                           </div>
                            <p>-59$</p>
                        </div>
                        <div className='flex justify-between items-center bg-secondary p-3 my-3 rounded-lg'>
                            <div className='flex'>
                                <img src={twitter} alt="" />
                                <p className='pl-3'><span >Twitter</span><span className='block text-xs'>Ads</span></p>
                           </div>
                            <p>-9$</p>
                        </div>
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

export default Features;