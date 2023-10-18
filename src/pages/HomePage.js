import React from 'react'
import { Container, Button, Row, Col,Form , InputGroup} from "react-bootstrap";
import Header from '../components/Header'
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';

const HomePage = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
        <Header/>
            <div className='banner-home'>
                <Container>
                    <Row>
                        <Col md="8">
                            <div className='banner-content'>
                                <h1><span>Uplift </span>
                                    yourself without sharing who you are.</h1>
                                <div className='banner-btn'>
                                    <a> <img src='images/play-store.png' className='img-fluid' alt="banner" /> Google Play</a>
                                    <a> <img src='images/apple.png' className='img-fluid' alt="banner" /> App Store</a>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className='banner-img'>
                                <img src='images/Union.png' className='img-fluid' alt="banner" />
                            </div>
                        </Col>
                    </Row>
                   
                </Container>
            </div>

<div>
    <Container>
        <Row className='align-items-center'>
                        <Col md="4">
                            <div className='second-text'>
                                <h2>What can we do for you?</h2>
                            </div>
                        </Col>
                        <Col md="8">
                            <div className='second-text'>
                                <p>Uplift App helps you understand yourself better by letting you talk openly. You can have conversations through <span className='red'>Chat</span>, <span className='green'>Calls</span> , or <span className='blue'>video calls</span>.</p>
                            </div>
                        </Col>
                    </Row>
        
    </Container>
</div>

            {/* second section start */}
            <div className='try-us'>
                <Container>
                    <Row>
                        <Col md="6">
                            <div className='try-box'>
                                <h3>Can’t find someone to talk?</h3>
                                <a>Try us <img src='images/right-arrow.png' className='img-fluid' alt='arrow' /></a>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className='user-box'>
                                <h3>100+</h3>
                                <p>Speakers &
                                    Listeners</p>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className='user-box'>
                                <h3>1600+</h3>
                                <p>Happy<br></br> Souls
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* third section start */}
            <div className='choose-us-sec'>
                <Container>
                    <Row>
                        <h3><span className='red'>Connecting </span> <span className='green'>Emotions, </span> <span className='blue'>Healing Minds </span></h3>
                    </Row>
                    <Row className='align-items-center'>
                        <Col md="7">
                            <div className='choose-box'>
                                <p>Why choose us</p>
                                <div className='same-head'>Unlock the loneliness into the stress free life <span>- WE ARE THERE FOR YOU <img src='images/heart.png' className='img-fluid' alt='img' /></span> </div>
                                <p>Uplift is an app dedicated to enhancing emotional well-being. Here, you can have discreet conversations with our experienced Healers who have walked a similar path of hardship. They are committed to actively listening, making sure you feel truly understood and ultimately, better.</p>
                                <a className='download-btn'>Download now</a>
                            </div>
                        </Col>
                        <Col md="5">
                            <div>
                                <img src='images/choose-img.png' className='img-fluid' alt='img' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* fourth section start */}
            <div className='loneliness-sec'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md="12">
                            <div className='same-head text-center'>One of every five people experiences <span> loneliness.</span></div>

                        </Col>
                        <Col md="4">
                            <div>
                                <img src='images/loneliness.png' className='img-fluid' alt='img' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* fifth section start */}
            <div className='users-sec'>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='same-head text-center'> What do our users think?</div>
                        <Col md="8">
                            <div>
                                <Slider {...settings}>
                                    <div className='user-slide-box'>
                                        <div className='quote'>
                                            <img src='images/quote.png' className='img-fluid' alt='img' />
                                        </div>
                                        <p>I can confidently say that Uplift is a game changer when it comes to mental health and wellness.</p>
                                        <div className='identity-sec'>
                                            <div>
                                                <h4>Jenny Wilson</h4>
                                                <p>23, Breakup Story</p>
                                            </div>
                                            <div>
                                                <ul className='rating-sec'>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-slide-box'>
                                        <div className='quote'>
                                            <img src='images/quote.png' className='img-fluid' alt='img' />
                                        </div>
                                        <p>I can confidently say that Uplift is a game changer when it comes to mental health and wellness.</p>
                                        <div className='identity-sec'>
                                            <div>
                                                <h4>Jenny Wilson</h4>
                                                <p>23, Breakup Story</p>
                                            </div>
                                            <div>
                                                <ul className='rating-sec'>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-slide-box'>
                                        <div className='quote'>
                                            <img src='images/quote.png' className='img-fluid' alt='img' />
                                        </div>
                                        <p>I can confidently say that Uplift is a game changer when it comes to mental health and wellness.</p>
                                        <div className='identity-sec'>
                                            <div>
                                                <h4>Jenny Wilson</h4>
                                                <p>23, Breakup Story</p>
                                            </div>
                                            <div>
                                                <ul className='rating-sec'>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                    <li>
                                                        <i className='fa fa-star'></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* sixth section start */}
            <div className='listener-sec'>
                <Container>
                    <div className='heading text-center'> Our Listeners</div>
                    <Row className='justify-content-center'>
                        <Col md="4">
                            <div className='listener-box'>
                                <div className='content'>
                                    <img src='images/quote-small.png' className='img-fluid' alt='img' />
                                    <p>They become the core of our phone support operation. We plan to continue rolling-out .”</p>
                                </div>
                                <div className='listener-person'>
                                    <img src='images/alen.svg' className='img-fluid' alt='img' />
                                    <h4>Alen Hen</h4>
                                    <p>Managing Director</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className='listener-box'>
                                <div className='content'>
                                    <img src='images/quote-small.png' className='img-fluid' alt='img' />
                                    <p>They become the core of our phone support operation. We plan to continue rolling-out .”</p>
                                </div>
                                <div className='listener-person'>
                                    <img src='images/emma.svg' className='img-fluid' alt='img' />
                                    <h4>Emma Watson</h4>
                                    <p>Managing Director</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className='listener-box'>
                                <div className='content'>
                                    <img src='images/quote-small.png' className='img-fluid' alt='img' />
                                    <p>They become the core of our phone support operation. We plan to continue rolling-out .”</p>
                                </div>
                                <div className='listener-person'>
                                    <img src='images/alex.svg' className='img-fluid' alt='img' />
                                    <h4>Alex J.</h4>
                                    <p>Managing Director</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <div className='more-team'>
                                <img src='images/listen-team.png' className='img-fluid' alt='img' />
                                <h6>and many more...</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* seventh section start */}
            <div className='faq-sec'>
                <Container>
                    <div className='same-head text-center'> Frequently Asked Questions (FAQs)
                    </div>
                    <Row>
                        <Col md="12">
                            <div className='accordion-faq'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is Uplift ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is the vision of Uplift app ? </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What platforms does Instapay payment gateway support?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Does Instapay provide international payments support? </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='get-touch-sec'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md="10">
                            <div className='get-box'>
                                <Row className='align-items-center'>
                                    <Col md="6">
                                        <h4>You deserve someone to talk!</h4>
                                        <p>Love to hear from you.</p>
                                    </Col>
                                    <Col lg="5" md="6" className='offset-lg-1'>
                                        <div className='form-box'>
                                            <h5>Want to get in touch?</h5>
                                            <div className='form'>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="name" placeholder="name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="Email" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="Country" />
                                                </Form.Group>

                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon1">
                                                        <Form.Select aria-label="Default select example">
                                                            <option>+91</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Phone number"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                                <div>
                                                    <button className='submit-btn'>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <div className='footer-sec'>
                        <Row>
                            <Col md="5">
                                <div>
                                    <img src='images/logo-home.png' className='img-fluid logo' alt='logo'/>
                                    <p className='copyright'>Copyright 2023 Uplift   Powered By: Stack Racers Inc</p>
                                    <div className='social-links'>
                                        <a>
                                    <img src='images/twitter.png' className='img-fluid' alt='logo'/>
                                        </a>
                                        <a>
                                    <img src='images/instagram.png' className='img-fluid' alt='logo'/>
                                        </a>
                                        <a>
                                    <img src='images/Linkedin.png' className='img-fluid' alt='logo'/>
                                        </a>
                                        <a>
                                    <img src='images/facebook.png' className='img-fluid' alt='logo'/>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div>
                                    <h4>What are you waiting for?</h4>
                                    <div className='banner-btn'>
                                    <a> <img src='images/play-store.png' className='img-fluid' alt="banner" /> Google Play</a>
                                    <a> <img src='images/apple.png' className='img-fluid' alt="banner" /> App Store</a>
                                </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <h5>Company</h5>
                                <ul>
                                    <li>
                                        <a className='copyright'>About us</a>
                                    </li>
                                    <li>
                                        <a className='copyright'>Contact us</a>
                                    </li>
                                    <li>
                                        <a className='copyright'>Terms of Service</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default HomePage