import React from 'react';
import AboutUsImg from '../../images/aboutus.jpg';

const AboutUs = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-5 col-sm-12">
                    <h1 className="text-uppercase">About Us</h1>
                    <p>We are a young team with enormous love for coffee who dares to think big and isn't afraid to be different. Most importantly we believe that every cup of coffee can be a special experience and has the power to turn your day into a great one. That's why our mission is to bring you ail the best coffee props with unique looks and well thought through user experience so you can enjoy your doffee every single time with every single cup.</p>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <img className="img-fluid" src={AboutUsImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;