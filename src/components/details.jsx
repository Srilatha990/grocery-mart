
import React from 'react'

const Details = () => {
  return (
    <div className='details-sec'>
        <div className='container'>
            <div className='row rules'>
            <div className='col-lg-3 col-12 col-sm-12 col-md-12 fac'>
                <div>
                    <span className='bi bi-cart'></span>
                </div>
                <div>
                    <h6>Free Shipping</h6>
                    <p>When Ordering over $100</p>
                </div>
            </div>
            <div className='col-lg-3 col-12 col-sm-12 col-md-12 fac'>
                <div>
                    <span className='bi bi-arrow-clockwise'></span>
                </div>
                <div>
                    <h6>Free Return</h6>
                    <p>Get Return within 30 days</p>
                </div>
            </div>
            <div className='col-lg-3 col-12 col-sm-12 col-md-12 fac'>
                <div>
                    <span className='bi bi-shield-check'></span>
                </div>
                <div>
                    <h6>Secure Payment</h6>
                    <p>100% Secure Online Payment</p>
                </div>
            </div>
            <div className='col-lg-3 col-12 col-sm-12 col-md-12 fac'>
                <div>
                    <span className='bi bi-trophy'></span>
                </div>
                <div>
                    <h6>Best Quality</h6>
                    <p>Original Product Guarenteed</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Details