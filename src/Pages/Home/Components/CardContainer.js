import React from 'react';
import CardComponent from './CardComponents/CardComponent';

const CardContainer = () => {
    return (
        <div className='card-container gap-11 mt-[600px] '>
            <div className='w-[300px] relative'><CardComponent control='top-0 right-[-45px]' /></div>
            <div className='w-[300px] relative'><CardComponent control='top-[-110px] right-[-45px]' /></div>
            <div className='w-[300px] relative'><CardComponent control='top-[-213px] right-[-45px]' /></div>
            <div className='w-[300px] relative'><CardComponent control='top-[-110px] right-[-45px]' /></div>
            <div className='w-[300px] relative'><CardComponent control='top-0 right-[-45px]' /></div>
            
        </div>
    );
};

export default CardContainer;