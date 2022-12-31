import React from 'react';
import './Card.css'

const Card = () => {
    return (
        <div className='grid grid-cols-1 mx-auto main-card text-white'>

            <h1 className='card-title'>Let’s Create Big Stories Together</h1>
            <p className='card-text'>Mobile is in our nerves. We don’t just build apps, we create brand. <br />
                Choosing us will be your best decision.</p>
                <button className='card-button'>Get A Free Quote
                <img class="ml-3" src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/arrow-right-white.svg" alt=""/>
                </button>
        </div>
    );
};

export default Card;