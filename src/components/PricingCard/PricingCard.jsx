import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const { name, price, description, features } = pricing;
    return (
        <div className='bg-amber-600 border rounded-2xl p-4 flex flex-col'>
            {/* card header */}
            <div>
                <h1 className="text-5xl">{name}</h1>
                <p className='text-3xl'>{price}</p>
            </div>
            {/* card body */}
            <div className='bg-amber-400 rounded-2xl p-4 mt-10 flex-1'>
                <p>{description}</p>

                {
                    features.map((feature, index) => <PricingFeatures key={index} feature = {feature}></PricingFeatures>)
                }
            </div>
            <button className="btn w-full mt-5">Subscribe</button>
        </div>
    );
};

export default PricingCard;