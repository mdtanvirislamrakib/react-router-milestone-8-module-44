import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeatures = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2 mt-3 items-center'> <CircleCheckBig /> {feature}</p>
        </div>
    );
};

export default PricingFeatures;