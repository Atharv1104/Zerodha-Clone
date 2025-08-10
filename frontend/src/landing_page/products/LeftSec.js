import React from 'react';
import '../../css/Product/leftsec.css'

function LeftSec({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <>
            <div className='container '>
                <div className='row ml-8'>
                    <div className='col p-3 text-center'>
                        <img src={imageUrl} />
                    </div>
                    <div className='col text-start'>
                        <h2 className='mt-5 ps-5'>{productName}</h2>
                        <p className='ps-5 pe-8 mt-5 fs-6'>{productDescription}</p>
                        <div className='row'>
                            <div className='col ms-2 mb-3   '>
                                <a href={tryDemo} className='p-5'>Try Demo</a>
                            </div>
                            <div className='col me-5'>
                                <a href={learnMore} className='p-5'>Learn More</a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col ms--2'>
                                <a href={googlePlay} className='p-5'><img src='Media/images/googlePlayBadge.svg' /></a>
                            </div>
                            <div className='col me-5'>
                                <a href={appStore} className='p-5'><img src='Media/images/appstoreBadge.svg' /></a>
                            </div>
                        </div>




                    </div>
                </div>

            </div>

        </>
    )

}
export default LeftSec;