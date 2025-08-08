import React from 'react';
import '../../css/Product/universe.css'

function Universe() {
    return (
        <>
            <div className='container mt-5 text-center text-clr'>
                <p className='fs-5 mb-5'>Want to know more about our technology stack? Check out the <a href='#'>Zerodha.tech</a> blog.</p>
                <h2 className='p-5'>The Zerodha Universe
                </h2>
                <p className='pb'>Extend your trading and investment experience even further with our partner platforms</p>


                <div className='row ml-8 me-5'>


                    <div className='col p-5'>
                        <div className='row '>
                            <img className="universe-image" src='Media/images/zerodhaFundhouse.png' />
                        </div>
                        <div className='row text-center'>
                            <p className='mt-3 universe-para-font'>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
                        </div>

                    </div>
                    <div className='col p-5'>
                        <div className='row'>
                            <img className="universe-image" src='Media/images/sensibullLogo.svg' />
                        </div>
                        <div className='row'>
                            <p className='mt-3 universe-para-font'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                        </div>

                    </div>
                    <div className='col p-5'>
                        <div className='row'>
                            <img className="universe-image" src='Media/images/tijori.svg' />
                        </div>
                        <div className='row'>
                            <p className='mt-3 universe-para-font'>
                                Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more..
                            </p>
                        </div>

                    </div>


                </div>
                <div className='row ml-8 me-5'>


                    <div className='col p-5'>
                        <div className='row '>
                            <img className="universe-image" src='Media/images/streakLogo.png' />
                        </div>
                        <div className='row text-center'>
                            <p className='mt-3 universe-para-font'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                        </div>

                    </div>
                    <div className='col p-5'>
                        <div className='row'>
                            <img className="universe-image" src='Media/images/smallcaseLogo.png' />
                        </div>
                        <div className='row'>
                            <p className='mt-3 universe-para-font'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFS.</p>
                        </div>

                    </div>
                    <div className='col p-5'>
                        <div className='row'>
                            <img className="universe-image" src='Media/images/dittoLogo.png' />
                        </div>
                        <div className='row'>
                            <p className='mt-3 universe-para-font'>
                            Personalized advice on life and health insurance. No spam and no mis-selling.
                            </p>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
export default Universe;