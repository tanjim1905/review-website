import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner container">
          <div className="col-md-6 col-sm-12 pe-lg-3">
            <h1>Innovation for education and society</h1>
            <p>
              Our interdisciplinary majors and minors mean you can chart your
              own course for your success.
            </p>
            <button className="btn btn-warning rounded-pill px-3 py-2">
              Visit our Course
            </button>
          </div>
        </div>
    );
};

export default Banner;