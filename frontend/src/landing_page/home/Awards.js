import '../../css/Home/awards.css'

import React from 'react';

function Awards() {
    return ( 
        <>
        <div className='container pb'>
            <div className='row'>
                <div className='box'>
                    <div className='col-6 left'>
                        <h2>Trust with confidence</h2><br/> 
                        <p>
                            <h4>Customer-first always</h4> 
                            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                        </p>
                        <p>
                            <h4>No spam or gimmicks</h4>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                        </p>
                        <p>
                            <h4>The Zerodha universe</h4>
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                        </p>
                        <p>
                            <h4>Do better with money</h4>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                        </p>
                
                    </div>
                    <div className='col-6 right'>
                        <img src='Media/images/ecosystem.png' className='awards-image'/>
                        <div className='foot-links text-center'>
                            <a href='#'> Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            <a href='#'>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    
                </div>
                <img src='Media/images/pressLogos.png' className='press-image'/>
                
            </div>
        
        </div>
        </>
       
     );
}

export default Awards;