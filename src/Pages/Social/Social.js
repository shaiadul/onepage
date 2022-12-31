import React from 'react';
import './Social.css';

const Social = () => {
    return (
        <div className='flex justify-between align-middle mt-20 mb-20 px-6 lg:px-60'>
            {/* div one */}
            <div className='social-box-one'>
                <h1 className='social-title'>Social Media</h1>
                <p className='social-text'>Don’t Miss To Follow Us On Our Social <br />
                    Networks Accounts.</p>

            </div>


            {/* div two */}
            <div className='social-box-two'>
                <div className='social-box-two-inner flex justify-center align-middle'>
                    <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/fb-icon.svg" alt="facebook" />
                    <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tw-icon.svg" alt="twitter"/>
                    <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tw-icon.svg" alt="twitter"/>
                    <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/in-icon.svg" alt="linkedin"/>
                    <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/yt-icon.svg" alt="youtube"/>
                    <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/tp-icon.svg" alt="tp"/>

                </div>
            </div>

        </div>
    );
};

export default Social;