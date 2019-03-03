import React from 'react';
import Fade from 'react-reveal/Fade';
import drmvln from '../../resources/images/drmvln.png';


const Footer = () => {
    return (
        <footer className="bck_black">
            <Fade delay={500}>
                <div className="footer font_righteous">
                    The DreamVillain
                </div>
                <div className="footer_copyright">
                    All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;