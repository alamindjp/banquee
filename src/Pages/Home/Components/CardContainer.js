import React from 'react';
import CardComponent from './CardComponents/CardComponent';

const CardContainer = () => {
    return (
        <div className='card-container gap-2 mt-[610px] '>
            <div className='w-[300px] relative'><CardComponent control='top-[-10px] right-[-40px] bg-[#e4c8a1]' /></div>
            <div className='w-[300px] relative'><CardComponent control='top-[-110px] right-[-40px] bg-[#4b5864]' /></div>
            <div className='w-[300px] relative'><CardComponent control='top-[-213px] right-[-40px] bg-primary' /></div>
            <div className='w-[300px] relative'><CardComponent control='top-[-110px] right-[-40px] bg-[#4b5864]' /></div>
            <div className='w-[300px] relative'><CardComponent control='top-[-10px] right-[-40px] bg-[#e4c8a1]' /></div>
            
        </div>
    );
};

export default CardContainer;