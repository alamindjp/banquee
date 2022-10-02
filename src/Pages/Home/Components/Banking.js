import React from 'react';
import arrow2 from '../../../Assets/icon/arrow2.svg'
import VectorHelp from '../../../Assets/icon/VectorHelp.svg'
import grinCard from '../../../Assets/images/cardColorCard.svg'
import yellowCard from '../../../Assets/images/cardMasterCard.svg'
import blackCard from '../../../Assets/images/card.svg'
import VectorWebFlow from '../../../Assets/logos/VectorWebflow.svg'
import Shopify from '../../../Assets/logos/Shopify_logo_2018 1Shopify.svg'
import zapier from '../../../Assets/logos/Vectorzapier.svg'
import PayPal from '../../../Assets/logos/PayPal 1.svg'
import Mastercard from '../../../Assets/logos/Mastercard-logo 1.svg'
import Visa from '../../../Assets/logos/path3789Visa.svg'
import Google from '../../../Assets/logos/Google_Pay.svg'
import Amazon from '../../../Assets/logos/Amazon_Pay_logo 1.svg'
import Apple from '../../../Assets/logos/Apple_Pay_logo.svg'
import bitcoin from '../../../Assets/logos/bitcoin.svg'
import laptop from '../../../Assets/images/laptop.svg'
import bicycle from '../../../Assets/images/bicycle.svg'
import apple from '../../../Assets/icon/apple.svg'
import amazon from '../../../Assets/icon/amazon.svg'
import google from '../../../Assets/icon/google.svg'

const Banking = () => {
    return (
        <div className='custom-container mx-auto my-40'>
            <div>
                <h1 className="text-5xl text-center mb-4">All in one bank. Really.</h1>
                <p className="text-xl text-center leading-8">Senectus et netus et malesuada fames ac turpis. <br /> Sagittis vitae et leo duis ut diam.</p>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-24'>
                <div className='card h-[420px] bg-[#F8F8F8]'>
                    <div className='w-4/5 mx-auto text-center mt-10'>
                        <h1 className='text-3xl'>Statistics</h1>
                        <p className='text-lg pt-2 pb-10 text-[#8c8b8e]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
                        <div className='mobile w-4/5 bg-white'>
                            <div className='flex justify-between items-center'>
                                <img className='' src={arrow2} alt="" />
                                <p className='inter'>Cards</p>
                                <img src={VectorHelp} alt="" />
                            </div>
                            <div className='flex justify-between my-8'>
                                <div className='bg-secondary p-3 rounded-md'>
                                    <p className='text-xs'>Earning</p>
                                    <p className='text-xl'>$ 85.222,00</p>
                                </div>
                                <div className='bg-secondary p-3 rounded-md'>
                                    <p className='text-xs'>Expenses</p>
                                    <p className='text-xl'>- $52.150,50</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-2 h-2 rounded-full bg-primary mr-2'></div>
                                <p className='mr-5'> Earning</p>
                                <div className='w-2 h-2 rounded-full bg-accent mr-2'></div>
                                <p> Expenses</p>
                                <></>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[420px] bg-[#F8F8F8] rounded-2xl overflow-hidden'>
                    <div className='card h-[420px] bg-[#F8F8F8]'>
                        <div className='w-4/5 mx-auto text-center mt-10'>
                            <h1 className='text-3xl'>Cards</h1>
                            <p className='text-lg text-[#8c8b8e] pt-2 pb-10'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
                        </div>
                        <div className='grid grid-cols-3 mt-16 gap-5 relative'>
                            <div className="absolute top-20 left-[-150px] rotate-90" ><img className='w-[370px]' src={blackCard} alt="" /></div>
                            <div className="absolute top-4 left-[115px] rotate-90" ><img className='w-[370px]' src={grinCard} alt="" /></div>
                            <div className="absolute top-20 right-[-150px] rotate-90" ><img className='w-[370px]' src={yellowCard} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-5'>
                <div className='bg-[#F8F8F8] rounded-2xl'>
                    <div className='p-12'>
                        <h2 className='text-4xl mb-5'>Easy <br />integration</h2>
                        <p className='text-lg text-[#8c8b8e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='py-14 mb-36'>
                        <div className='grid grid-cols-3 gap-4 relative'>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-0 left-[-4px]'>
                                <img className='h-[30px]' src={VectorWebFlow} alt="" />
                            </div>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-0 left-[150px]'>
                                <img className='h-[30px]' src={Shopify} alt="" />
                            </div>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-0 right-[-4px]'>
                                <img className='h-[30px]' src={zapier} alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-4 relative'>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-14 left-[-8px]'>
                                <img className='h-[30px]' src={PayPal} alt="" />
                            </div>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-14 left-[120px]'>
                                <img className='h-[30px]' src={Mastercard} alt="" />
                            </div>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-14 left-[195px]'>
                                <img className='h-[30px]' src={Visa} alt="" />
                            </div>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-14 right-[-8px]'>
                                <img className='h-[30px]' src={Google} alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-4 relative'>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-28 left-[-8px]'>
                                <img className='h-[26px]' src={Apple} alt="" />
                            </div>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-28 left-[87px]'>
                                <img className='h-[26px]' src={Amazon} alt="" />
                            </div>
                            <div className='flex justify-center p-2 bg-white rounded-md absolute top-28 right-[-4px]'>
                                <img className='h-[26px]' src={bitcoin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F8F8F8] rounded-2xl'>
                    <div className='p-12'>
                        <h2 className='text-4xl mb-5'>Saving <br />accounts</h2>
                        <p className='text-lg text-[#8c8b8e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='py-14 pl-10 grid grid-cols-2 gap-6'>
                        <div>
                            <div className='bg-secondary p-5 rounded-md pl-9'>
                                <img className='h-[90px]' src={laptop} alt="" />
                            </div>
                            <p className='text-lg '>New Laptop</p>
                            <p className='text-sm '>400$</p>
                        </div>
                        <div>
                            <div className='bg-secondary p-5 rounded-md pl-9'>
                                <img className='h-[90px]' src={bicycle} alt="" />
                            </div>
                            <p className='text-lg '>Dream bike</p>
                            <p className='text-sm '>400$</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F8F8F8] rounded-2xl'>
                    <div className='p-12'>
                        <h2 className='text-4xl mb-5'>Instant<br /> transactions</h2>
                        <p className='text-lg text-[#8c8b8e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='px-10'>
                        <div className='flex items-center bg-white p-4 rounded-md pl-9'>
                            <img src={apple} alt="" />
                            <p className='text-lg ml-5'>Apple <span className='block text-xs text-[#8c8b8e]'>Electronic</span></p>
                            <p className='text-lg ml-5'>-799$</p>
                        </div>
                        <div className='flex items-center bg-white p-4 my-5 rounded-md pl-9'>
                            <img src={amazon} alt="" />
                            <p className='text-lg ml-5'>Amazon <span className='block text-xs text-[#8c8b8e]'>Shopping</span></p>
                            <p className='text-lg ml-5'>-99$</p>
                        </div>
                        <div className='flex items-center bg-white p-4 rounded-md pl-9'>
                            <img src={google} alt="" />
                            <p className='text-lg ml-5'>Google <span className='block text-xs text-[#8c8b8e]'>Ads</span></p>
                            <p className='text-lg ml-5'>-199$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banking;