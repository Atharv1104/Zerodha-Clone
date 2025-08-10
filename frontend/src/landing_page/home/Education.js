import '../../css/Home/education.css'

import React from 'react';

function Education() {
    return ( 
        <>
            <div className='container pb pt'>
                <div className='row d-flex'>
                    <div className='col'>
                        <img src='/Media/images/index-education.png'/>
                    </div>
                    <div className='col'>
                        <h2 className='text-clr'>Free and open market education</h2>
                        <p className='mt-3 text-clr'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='#'>Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i></a>

                        <p className='mt-3 text-clr'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='#'>TradingQ&A&nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
        

     );
}

export default Education;