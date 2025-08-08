import React from 'react';
import '../../css/Product/rightsec.css'

function RightSec({ 
    imageUrl, 
    productName, 
    productDescription,  
    learnMore, 
 }) {
    return(
        <>
            <div className='container p-5'>
                <div className='row '>
                   
                    <div className='col ml-8 mt-8 '>
                        <h2>{productName}</h2>
                        <p className='mt-5'>{productDescription}</p>
                        <a href={learnMore}>Learn More</a>
                        
                    </div>
                    <div className='col '>
                        <img src={imageUrl}/>
                    </div>
                </div>

            </div>

        </>
    )

}
export default RightSec;