import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contacts-container'>
                <div className='call-section'>
                    <h3>TALK TO US</h3>
                    <h6>Toll Free: 78 5674 343</h6>
                    <h6>Fax:  4357 8906 678</h6>
                </div>
                <div className='mail-section'>
                    <h3>MAIL US</h3>
                    <h6>support@hermain.com</h6>
                    <h6>info@hermaingym.com</h6>
                </div>
                <div className='address-section'>
                    <h3>OUR LOCATION</h3>
                    <h6 className=''>
                        09, Adabor,<br />
                        Dhaka-1207.
                    </h6>
                </div>
            </div>
            <div className='text-white pb-2 text-center'>
                &copy;
                {(new Date().getFullYear())}
                <span className='ms-1'>Hermain Gym. All rights reserved. Design by Imran Sorker</span>
            </div>
        </div>
    );
};

export default Footer;