import '../../css/Home/pricing.css'

import React from 'react';

function Pricing() {
    return ( 
        <div className='container pb pt'>
            <div className='row'>
                
                <div className='col-5 description text-center '>
                    <p>
                        <h2>Unbeatable pricing</h2>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='#'>See pricing &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7 pricing'>
                    
                    <div className='pricing-box'>
                        <img src='/Media/images/pricing-eq-0.png' className='price-img'/>
                        <p>Free account
                        opening</p>
                    </div>
                    <div className='pricing-box'>
                        <img src='/Media/images/pricing-eq-0.png' className='price-img'/>
                        <p>Free equity delivery
                        and direct mutual funds</p>
                    </div>
                    <div className='pricing-box'>
                    <img src='/Media/images/other-trade-20.png' className='price-img'/>
                        <p>Intraday and
                        F&O</p>
                    </div>
                    
                    
                    
                    
                </div>
                
            </div>
            
        </div>

     );
}

export default Pricing;