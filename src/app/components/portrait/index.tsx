/* eslint-disable @next/next/no-img-element */

import * as I from './interface';

const Portrait: React.FC<I.portrait> = ({ image }) => {
    return <img src={image} alt='portrait-pet-image' className='w-64 h-96 border-white border-x-8 border-t-8 border-b-42 shadow-xl shadow-black mx-8' />
};

export default Portrait;
