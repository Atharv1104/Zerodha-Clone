import React from 'react';
import '../../css/About/team.css'

function Team(){
    return(
        <>
        <div className='container  pb'>
            <div className='row'>
                <div className='col d-flex justify-content-center ms-auto'>
                <img src='/Media/images/Atharv.jpg' className='my-img'/>

                </div>
                <div className='col custom-para'>
                    <h2>People</h2>
                    <p className='mt-5'>
                    From learning to building – Zerodha clone by Atharv Pore.
                    </p>
                    <p className='custom-margin-para'>
                        <ul>
                            <li>Final Year EXTC Student | Full Stack Developer</li>
                            <li>Passionate about building meaningful software</li>
                            <li>Apna College Sigma Batch | MERN Stack | DSA</li>
                            <li>Open to Web Dev roles</li>
                            <li><a href='https://www.linkedin.com/in/atharv-pore/'>Linkedin</a></li>
                            <li><a href='https://github.com/Atharv1104/Zerodha-Clone'>Github</a></li>
                            
                        </ul>
                    </p>
                    
                </div>

            </div>

        </div>
        </>
    )
}
export default Team;