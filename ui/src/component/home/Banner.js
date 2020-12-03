import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Banner() {
    return (
        <div className='container p-3 my-3'>

                <Carousel interval={3000} keyboard={false} pauseOnHover={true}>

                    <Carousel.Item style={{'height': "300px"}}>

                        <svg className="bd-placeholder-img" width="100%" height="100%"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img">
                            <rect width="100%" height="100%" fill="#777"></rect>
                        </svg>

                        <Carousel.Caption>

                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a>
                                    </p>
                                </div>
                            </div>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item style={{'height': "300px"}}>

                        <svg className="bd-placeholder-img" width="100%" height="100%"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img">
                            <rect width="100%" height="100%" fill="#777"></rect>
                        </svg>

                        <Carousel.Caption>

                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a>
                                    </p>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': "300px"}}>
                        <svg className="bd-placeholder-img" width="100%" height="100%"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img">
                            <rect width="100%" height="100%" fill="#777"></rect>
                        </svg>
                        <Carousel.Caption>
                            <div className="container">
                                <div className="carousel-caption text-right">
                                    <h1>Example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a>
                                    </p>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}
