import '../css/footer.css'
import React from 'react';

function Footer() {
    return (
        <>
            <footer className='border-top'>
                <div className=' container ms-auto mt-5'>
                    <div className='row custom-p ms-5'>
                        <div className='col'>
                            <span className='text-center'>
                                <img src='/Media/images/logo.svg' className='footer-logo-img' />
                            </span>
                            <br />
                            <br />
                            <p className="text-clr">&copy; 2010 - 2025, Zerodha Broking Ltd. <br />All rights reserved.</p>
                            <div className='row'>
                                <div className='col'>
                                    <img src='/Media/images/x-twitter.svg' />
                                </div>
                                <div className='col'><i class="fa-brands fa-facebook fs-5 text-clr"></i></div>
                                <div className='col'><i class="fa-brands fa-square-instagram fs-5 text-clr"></i></div>
                                <div className='col'><i class="fa-brands fa-linkedin fs-5 text-clr"></i></div>
                                <br />
                                <br />
                                <hr />
                                <div className='col'>
                                    <img src='/Media/images/youtube.svg' />
                                </div>
                                <div className='col'>
                                    <img src='/Media/images/whatsapp-logo.svg' className='custom-whatsapp-img' />
                                </div>
                                <div className='col'><i class="fa-brands fa-telegram fs-5 text-clr"></i></div>
                            </div>
                        </div>
                        <div className='col custom-font text-center'>
                            <p>company</p>
                            <p>About</p>
                            <p>Products</p>
                            <p>Pricing</p>
                            <p>Referral programme</p>
                            <p>Careers</p>
                            <p>Zerodha.tech</p>
                            <p> Open source</p>
                            <p>Press & media</p>
                            <p>Zerodha Cares (CSR)</p>
                        </div>
                        <div className='col custom-font text-center'>
                            <p>Structure</p>
                            <p>Contact us</p>
                            <p>Support portal</p>
                            <p>Z-Connect blog</p>
                            <p>List of charges</p>
                            <p>Downloads & resources</p>
                            <p>Videos</p>
                            <p>Market overview</p>
                            <p>How to file a complaint?</p>
                            <p>Status of your complaints</p>
                        </div>
                        <div className='col custom-font text-center'>
                            <p>Account</p>
                            <p>Open an account</p>
                            <p>Fund transfer</p>
                        </div>
                        <div className='row mt-5 custom-footer-text text-center' >
                            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. SEBI Registration  no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#'>complaints@zerodha.com</a>, for DP related to <a href='#'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                            <p>Procedure to file a complaint on <a href='#'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                            <p><a href='#'>Smart Online Dispute Resolution</a> | <a href='#'>Grievances Redressal Mechanism</a></p>
                            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                            <p>Attention investors: 1- Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2- Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3- Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <a href='#'>please create a ticket here.</a></p>
                        </div>
                        <div className='row custom-footer-font text-center'>
                            <div className='col'>
                                <p></p>
                            </div>
                            <div className='col'>
                                <p>NSE</p>
                            </div>
                            <div className='col'>
                                <p>BSE</p>
                            </div>
                            <div className='col'>
                                <p>MCX</p>
                            </div>
                            <div className='col'>
                                <p>Terms & conditions</p>
                            </div>
                            <div className='col'>
                                <p>Policies & procedures</p>
                            </div>
                            <div className='col'>
                                <p>Privacy policy</p>
                            </div>
                            <div className='col'>
                                <p>Disclosure</p>
                            </div>
                            <div className='col'>
                                <p>For investor's attenmtion</p>
                            </div>
                            <div className='col'>
                                <p>Investor charter</p>
                            </div>
                            <div className='col'>
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        </>

    );
}

export default Footer;