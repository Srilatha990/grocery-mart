

import React from 'react';
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MobileHeader = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='mobile-nav'>
            <Navbar bg="light"  expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home"><img src='../../images/logo.webp' className='logo'/></Navbar.Brand>
                    <Button className='b'  onClick={handleShow}>
                        <span className='bi bi-list'></span>
                    </Button>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link href="#home" className='f'>Home</Nav.Link>
                        <Nav.Link href="#about" className='f'>About</Nav.Link>
                        <Nav.Link href="#services" className='f'>Services</Nav.Link>
                        <Nav.Link href="#contact" className='f'>Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default MobileHeader;