import React from 'react';

const Slider = ({img,text}) => {
    return (
        <div className=" bg-base-200">
            <div className="hero-content justify-between">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-4 w-1/3'>
                    <p className="py-6">{text}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className='w-1/2'>
                    <ul>
                        <li>Item-1</li>
                        <li>Item-2</li>
                        <li>Item-3</li>
                        <li>Item-4</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Slider;