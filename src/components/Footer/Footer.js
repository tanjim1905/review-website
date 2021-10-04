import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer py-5">
            <div className="container">
        <h4 className="text-uppercase text-center">Support Forum</h4>
        <p className="text-center">Write your email into below field and join our quick support forum.</p>

        <div className="subscribe">
        <div class="input-group mb-3 w-50 mx-auto">
        <input type="text" class="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button class="btn btn-warning subscribe-btn" type="button" id="button-addon2">Subscribe</button>
      </div>
        </div>
            </div>

            <div className="social-icons">
        
        </div>
            <div className="copyright">
                <p className="text-center">&copy; All Right Reserved By- Tanjim Ahmed &#128151;</p>
            </div>
            
        </footer>
    );
};

export default Footer;