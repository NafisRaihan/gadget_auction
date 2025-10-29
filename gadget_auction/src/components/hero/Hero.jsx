import React from 'react';
import hero from '../../assets/Banner-min.jpg'

const Hero = () => {
    return (
       <>
       <section className='relative h-96 mb-16'>
        <img className='absolute inset-0 h-full w-full object-cover' src={hero} alt="banner_image" />
       <div className='absolute inset-0 flex flex-col gap-4 justify-center items-center text-center px-4'>
        <h3 className='text-4xl font-bold text-white'>Bid on Unique Items from Around the World</h3>
        <p className='text-white py-6 max-w-2xl'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
       <button className='btn btn-active btn-info text-white'>Explore Auction</button>
       </div>
         </section>
       </>
    );
};

export default Hero;