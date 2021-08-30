import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const PrevButton = (props)=> {
    const {onClick} = props;
    return(
        <button className="slick-arrow carousel-control-prev" type="button" onClick={onClick}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
    )
}
const NextButton = (props)=> {
    const {onClick} = props;
    return(
        <button className="slick-arrow carousel-control-next" type="button" onClick={onClick}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    )
}


const carousel = () => {
    return (
    <div className="my-2 ms-2">            
        <Slider infinite={true}
                autoplay
                dots
                nextArrow= {<NextButton />}
                prevArrow= {<PrevButton />}
                customPaging= {(i)=>{
                    return(
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target>{i}</button>
                    </div>
                    )
                }}
        >
            <div className="">
               <img className="" width="100%" height="170px" src="./img/ad1.jpg" aria-hidden="true" focusable="false" alt="" />
            </div>
            <div className="">
               <img className="" width="100%" height="170px" src="./img/ad2.jpg" aria-hidden="true" focusable="false" alt="" />
            </div>
            <div className="">
               <img className="" width="100%" height="170px" src="img/ad3.jpg" aria-hidden="true" focusable="false" alt="" />
            </div>
           

        </Slider>
    </div>
    )
}

export default carousel
