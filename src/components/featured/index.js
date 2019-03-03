import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';
import swoosh from '../../resources/images/swoosh.png'
import { noConflict } from 'q';
import { NONAME } from 'dns';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>
            
            <Carousel />

            <div className="artist_name">
                
                    <div 
                    className="carrousel_center_image"
                    style= {{
                        background: `url(${swoosh}`
                    }}
                    ></div>
                
            </div>

            <TimeUntil />
        </div>
    );
};

export default Featured;