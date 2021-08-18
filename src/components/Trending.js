import React, {useContext} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ItemContext } from './itemContext';

const Trending = () => {
    const [trending] = useContext(ItemContext);

    const PrevButton = (props)=> {
        const {onClick} = props;
        return(
            <button className="slick-arrow btn btn-outline-primary prevbtn" type="button" onClick={onClick}>
                <span className="bi bi-chevron-left"></span>
            </button>
        )
    }
    const NextButton = (props)=> {
        const {onClick} = props;
        return(
            <button className="slick-arrow btn btn-outline-primary nextbtn" type="button" onClick={onClick}>
                <span className="bi bi-chevron-right"></span>
            </button>
        )
    }

    return (
    <div className="container  marketing my-4 pe-0">
		<div className="d-flex justify-content-between align-items-center" style={{borderBottom: "1px solid rgb(149, 153, 149)"}}>
			<h2 className="pb-0 text-bold ">
				<span> TRENDING ON EASYSHOPPING.COM</span>
			</h2>
			{/* <div className="indicatorb d-inline-block" style={{paddingBottom: "8px"}}>
				<button style={{fontSize: "16px", fontWeight: "bolder"}} className="btn btn-outline-primary disabled" id="hellop">&#8810</button>
				<button style={{fontSize: "16px", fontWeight: "bolder"}} className="btn btn-outline-primary" id="hellon">&#8811</button>
			</div> */}
		</div>
		
	
        
        <Slider className="py-4 trending" 
            
            infinite 
            nextArrow= {<NextButton />}
            prevArrow= {<PrevButton />}
            slidesToShow={5}   
            slidesToScroll={3}
            responsive= {[
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true
                    }
                }, 
                {
                    breakpoint: 992,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 285,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1
                    }
                }
            ]}
        >
                {trending.map(t=>(
                    <div className="col pb-2" id="top">
                        <div className="itemimg">
                            <img className="pimg" src={t.profileURL} alt="" height="80%" width="100%" />
                        </div>
                        <div className="pname" >
                            <p className="p-0 m-0" id="itemName">{t.itemName}</p>
                            <p className="text-muted pt-2">{t.author}</p>
                        </div>
                        <div className="pbody">
                            <img className="pimg" id="lgimg" src={t.profileURL} alt="" height="80%" width="100%" />
                            <div className="itemHover" >
                                <div>
                                    <a href="./product.html" title="See Product in detail">
                                        <button className="btn btn-info" id="cartButton1" >Details</button>
                                    </a>
                                    <button className="btn btn-warning" id={'cartButton'+t.pid} data-bs-pid={t.pid} >Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body ">
                            <div className="mt-3 m-0 ps-2">
                                <span className={`bi bi-star-fill ${t.firststar}`}></span>
                                <span className={`bi bi-star-fill ${t.secondstar}`}></span>
                                <span className={`bi bi-star-fill ${t.thirdstar}`}></span>
                                <span className={`bi bi-star-fill ${t.fourthstar}`}></span>
                                <span className={`bi bi-star-fill ${t.fifthstar}`}></span>
                            </div>
                            <div className="card-text m-0">
                                <p className="d-flex justify-content-between px-1 my-0">
                                    <span className="">Tk.{t.price} only</span>
                                    <span className="bi bi-heart fav" ></span>
                                </p>
                            </div>
                
                            <a href="./product.html" title="See Product in detail">
                                <button className="btn btn-info Mbutton" id="cartButton1" >Details</button>
                            </a>
                            <button className="btn btn-warning Mbutton" id="cartButton1" href="">Add to cart</button>
                        </div>
                        
                    </div>
                ))}
        </Slider>
    </div>
    )
}

export default Trending
