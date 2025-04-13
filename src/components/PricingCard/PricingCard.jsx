import React from 'react';

const PricingCard = ({pricing}) => {
    return (
        <div>
            {/* card header */}
            <div>
                <h1 className="text-7xl">{pricing.name}</h1>
                <p className='text-3xl'>{pricing.price}</p>
            </div>
        </div>
    );
};

export default PricingCard;