import React from 'react';

const CardComponent = ({ control }) => {
    return (
        <div className={`card w-[500px] h-[300px] bg-primary shadow-xl p-8 text-white rotate-90 absolute ${control}`}>
                    <h3 className="text-3xl pb-14">banquee.</h3>
                    <h3 className="card-number"><span>1234 </span><span> 5678</span><span> 7000</span><span> 0000</span></h3>
                    <div className='grid grid-cols-2'>
                        <div className='flex gap-12'>
                            <p className="flex flex-col card_holder"><span>Card Holder</span> <span className='text-xl p-1'>John Doe</span></p>
                            <p className="flex flex-col card_holder"><span>Expire Date</span> <span className='text-xl p-1'>09/28</span></p>
                        </div>
                    </div>

            </div>
    );
};

export default CardComponent;