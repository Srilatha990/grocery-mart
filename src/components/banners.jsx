

import React from 'react'

function Banners() {
  return (
    <div className='banners-sec'>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-lg-4 col-12 col-sm-12 col-md-12'>
                    <div className='banner1'>
                        <div className='banner1-content'>
                            <h6>Fruits</h6>
                            <h2>Healthy & Goods
                            Fruits</h2>
                            <button>Shop Now <span className='bi bi-chevron-right'></span></button>
                        </div>
                        <div className='b1-img'>
                            <img src='../../images/b-img1.webp'/>
                        </div>
                    </div>
                </div>
               
                <div className='col-lg-4 col-12 col-sm-12 col-md-12'>
                    <div className='banner2'>
                        
                        <div className='b2-img'>
                            <img src='../../images/b-img2.webp'/>
                        </div>
                        <div className='banner2-content'>
                            <h6>Vegetable</h6>
                            <h2>Frash & Goods
                            Vegetable</h2>
                            <button>Shop Now <span className='bi bi-chevron-right'></span></button>
                        </div>
                    </div>
                </div>
               
               
                <div className='col-lg-4 col-12 col-sm-12 col-md-12'>
                    <div className='banner3'>
                        <div className='banner3-content'>
                            <h6>Juices</h6>
                            <h2>Best Fruits
                            Juices</h2>
                            <button>Shop Now <span className='bi bi-chevron-right'></span></button>
                        </div>
                        <div className='b3-img'>
                            <img src='../../images/b-img3.webp'/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Banners