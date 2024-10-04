

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Vegetables() {
  return (
    <div className='vegetable-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-3'>
                    <h2 className='heading'>Fresh Vegetables</h2>
                </div>
                <div className='col-6 view mt-3'>
                    View All
                </div>
            </div>
            <div className='row mt-4 vegetables'>
                <div className='col-lg-3 col-12 col-sm-12 col-md-12'>
                   <Card  className='c'>
                   <Card.Img variant="top" src="../../images/v1.webp" />
                   <Card.Body>
                   <Card.Title>
                    <div className='stars'>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                    </div>
                    <h5>Fresh Red Tomatos</h5>
                    <p>$6.99</p>
                   </Card.Title>
                    <Button className='b'>Add to Cart</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3 col-12 col-sm-12 col-md-12'>
                   <Card className='c'>
                   <Card.Img variant="top" src="../../images/v2.webp" />
                   <Card.Body>
                   <Card.Title>
                    <div className='stars'>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                    </div>
                    <h5>Chicken Eggs</h5>
                    <p>$5.99</p>
                   </Card.Title>
                    <Button className='b'>Add to Cart</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3 col-12 col-sm-12 col-md-12'>
                   <Card className='c'>
                   <Card.Img variant="top" src="../../images/v3.webp" />
                   <Card.Body>
                   <Card.Title>
                    <div className='stars'>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                    </div>
                    <h5>Fresh Watemelon</h5>
                    <p>$8.99</p>
                   </Card.Title>
                    <Button className='b'>Add to Cart</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-3 col-12 col-sm-12 col-md-12'>
                   <Card className='c'>
                   <Card.Img variant="top" src="../../images/v4.webp" />
                   <Card.Body>
                   <Card.Title>
                    <div className='stars'>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                    </div>
                    <h5>Beef Steak</h5>
                    <p>$12.99</p>
                   </Card.Title>
                    <Button className='b'>Add to Cart</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
 
        </div>
    </div>
  )
}

export default Vegetables