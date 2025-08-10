import '../../css/Home/hero.css'
import React from 'react';

function Hero() {
    return ( 
    <>
      <div className='container  text-center pt pb'>
         <div className='row'>
            <img src='Media/images/homeHero.png' alt='Hero image' className='mb-5 hero-img'/>

            <h1 className='mt-5 Tagline '>Invest in everything</h1>
            <p className='para'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='signup-btn mt-5   '>Signup for free</button>
         </div>

       </div>
    </>
       

     )
}

export default Hero;