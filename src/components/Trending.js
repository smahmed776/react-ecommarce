import React, {useContext} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCart } from './cartHook';
import { TrendingItemContext } from './itemContext';

const Trending = () => {
    const [trending] = useContext(TrendingItemContext);
    const {addItem} = useCart();


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
    <div className="container  marketing my-4 pe-0" style={{position: "relative", minHeight: "55vh"}}>
		<div className="d-flex justify-content-between align-items-center" style={{borderBottom: "1px solid rgb(149, 153, 149)"}}>
			<h2 className="pb-0 text-bold ">
				<span> TRENDING ON EASYSHOPPING.COM</span>
			</h2>
		</div>
		<div className="" id="trendingload" style={{display: "none"}}></div>
	
        
        <Slider className="py-4 trending" 
            autoplay
            infinite 
            nextArrow= {<NextButton />}
            prevArrow= {<PrevButton />}
            slidesToShow={6}  
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
                    <div className="col pb-2" id="top" key={t.sno}>
                        <div className="itemimg">
                            <img className="pimg" src={t.profileURL} alt="" height="80%" width="100%" />
                        </div>
                        <div className="pname" >
                            <p className="p-0 m-0" id="itemName">{t.itemName}</p>
                            <p className="text-muted pt-2">{t.author}</p>
                        </div>
                        <div className="pbody">
                            <img className="pimg" id="lgimg" src={t.profileURL} alt="" height="80%" width="100%" />
                            
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
                
                            <button className="btn btn-outline-info Mbutton mb-2 mt-1 w-100" title="See Product in detail" id="cartButton1" >Details</button>
                <button className="btn btn-outline-dark Mbutton  w-100" id={'cartButton'+t.sno}
                 data-name={t.itemName}
                 data-src={t.profileURL}
                 data-bs-pid={t.sno}

                 onClick={()=> addItem(t)}>Add to cart</button>
                        </div>
                        
                    </div>
                ))}
        </Slider>
    </div>
    )
}

export default Trending
