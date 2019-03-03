import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10462.039558016862!2d23.386263099183896!3d42.64668820279311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86ef931f8677%3A0x690a5e72458f2f9f!2sCAPITAL+FORT!5e0!3m2!1sel!2sgr!4v1551624417421"

            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;