import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function NotFound() {
    return (
        <>
            <div className='container  text-center'>
                <div className='row mt-5'>

                    <h2 className='mt-5 text-clr'>404 Not Found</h2>
                    <p className=' text-clr'>Sorry the page you are looking for does not exists.</p>
                    <Link to="/">Go to Hoempage</Link>
                </div>

            </div>
        </>

    );
}

export default NotFound;