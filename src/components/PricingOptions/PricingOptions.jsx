import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPrimise}) => {
    const pricingData = use(pricingPrimise);
    console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing = {pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;