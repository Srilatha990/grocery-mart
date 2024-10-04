

import React from 'react'

function Footer() {
  return (
    <div className='f-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <img src='../../images/logo.webp' className='logo'/>
                </div>
                <div className='col-lg-3 col-12 col-sm-12 col-md-12 s'>
                    <h4>About Us</h4>
                    <a>Rave’s Story</a>
                    <a>Work With Us</a>
                    <a>Coporate News</a>
                    <a>Investors</a>
                </div>
                <div className='col-lg-3 col-12 col-sm-12 col-md-12 s'>
                    <h4>Quick Links</h4>
                    <a>Rave’s Story</a>
                    <a>Work With Us</a>
                    <a>Coporate News</a>
                    <a>Investors</a>
                </div>
                <div className='col-lg-3 col-12 col-sm-12 col-md-12 g'>
                    <h4>Contact info</h4>
                    <div className='contact'>
                        <span className='bi bi-geo-alt'></span>
                        <div>
                            <h6>Address:</h6>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                    </div>
                    <div className='contact'>
                        <span className='bi bi-telephone'></span>
                        <div>
                            <h6>Phone:</h6>
                            <p>+880171889547</p>
                        </div>
                    </div>
                    <div className='contact'>
                        <span className='bi bi-envelope'></span>
                        <div>
                            <h6>Email:</h6>
                            <p>
                            Demo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer