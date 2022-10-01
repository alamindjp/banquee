import React, { useState } from 'react';
import phone from '../../../Assets/icon/badgePhone.svg'
import massage from '../../../Assets/icon/badgeMassage.svg'
import arrow from '../../../Assets/icon/arrow.svg'

const QnaSection = () => {
    const [check1,setCheck1]=useState(false)
    const [check2,setCheck2]=useState(false)
    const [check3,setCheck3]=useState(false)
    const [check4,setCheck4]=useState(false)
    const [check5,setCheck5]=useState(false)
    return (
        <div className="custom-container grid grid-cols-2 justify-items-center py-40">
            <div>
                <h1 className='text-[64px]'>Need help?</h1>
                <div className='flex my-5'>
                    <img src={phone} alt="" />
                    <p className='pl-5 text-lg'>+49 176 123 456<span className='block text-xs text-[#8c8b8e]'>Support Hotline</span></p>
                </div>
                <div className='flex mb-8'>
                    <img src={massage} alt="" />
                    <p className='pl-5 text-lg'>help@banquee.com<span className='block text-xs text-[#8c8b8e]'>Support Email</span></p>
                </div>
                <button className='flex text-primary text-lg items-center'><span>Support</span><img className='pl-2' src={arrow} alt="" /></button>
            </div>
            <div>
                <div className="collapse border-b-2">
                    <input tabIndex={0} type="checkbox" className="peer toggle" checked={check1} readOnly />
                    <div className="collapse-title text-primary-content px-3 py-[-1px]" onClick={() => setCheck1(!check1)}>
                        <p className='flex justify-between relative'>How do I open an Bank account?{check1 ? <span className='text-xl absolute right-0'>x</span> : <span className='text-xl absolute right-0'>+</span>}<span className=''></span></p>
                    </div>
                    <div tabIndex={0} className="collapse-content text-sm leading-6 text-justify text-[#8c8b8e]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </div>
                <div className="collapse border-b-2">
                    <input type="checkbox" className="peer toggle" checked={check2} readOnly />
                    <div className="collapse-title text-primary-content px-3 py-[-1px]" onClick={() => setCheck2(!check2)}>
                        <p className='flex justify-between relative'>How do I order a new card?{check2 ? <span className='text-xl absolute right-0'>x</span> : <span className='text-xl absolute right-0'>+</span>}<span className=''></span></p>
                    </div>
                    <div className="collapse-content text-sm leading-6 text-justify text-[#8c8b8e]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </div>
                <div className="collapse border-b-2">
                    <input type="checkbox" className="peer toggle" checked={check3} readOnly />
                    <div className="collapse-title text-primary-content px-3 py-[-1px]" onClick={() => setCheck3(!check3)}>
                        <p className='flex justify-between relative'>How to change my account limits?{check3 ? <span className='text-xl absolute right-0'>x</span> : <span className='text-xl absolute right-0'>+</span>}<span className=''></span></p>
                    </div>
                    <div className="collapse-content text-sm leading-6 text-justify text-[#8c8b8e]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </div>
                <div className="collapse border-b-2">
                    <input type="checkbox" className="peer toggle" checked={check4} readOnly />
                    <div className="collapse-title text-primary-content px-3 py-[-1px]" onClick={() => setCheck4(!check4)}>
                        <p className='flex justify-between relative'>How does Banko premium works?{check4 ? <span className='text-xl absolute right-0'>x</span> : <span className='text-xl absolute right-0'>+</span>}<span className=''></span></p>
                    </div>
                    <div className="collapse-content text-sm leading-6 text-justify text-[#8c8b8e]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </div>
                <div className="collapse border-b-2">
                    <input type="checkbox" className="peer toggle" checked={check5} readOnly />
                    <div className="collapse-title text-primary-content px-3 py-[-1px]" onClick={() => setCheck5(!check5)}>
                        <p className='flex justify-between relative'>Can I have two Banko accounts?{check5 ? <span className='text-xl absolute right-0'>x</span> : <span className='text-xl absolute right-0'>+</span>}<span className=''></span></p>
                    </div>
                    <div className="collapse-content text-sm leading-6 text-justify text-[#8c8b8e]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QnaSection;