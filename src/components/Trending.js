import React, {useContext, useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCart } from './custom hooks/cartHook';
import { TrendingItemContext } from './contexts/itemContext';
import TrendItem from './sub components/TrendItem';

const Trending = () => {
    const [trending] = useContext(TrendingItemContext);
    const {addItem} = useCart();


    // const [aitem, setAitem] = useState([]);


    // async function req (){
    //     for (let i = 0; i < trending.length; i++) {
        
    //     // console.log(items)
    //     aitem.push(<TrendItem items={trending[i]} addItem={addItem}/>)
    //    await setAitem([...aitem])
        
    //    }
    // }

    // useEffect(()=>{
    //     if(trending.length >= 1){
    //         req();
    //         // console.log(aitem);
    //     } 
    // }, [trending])






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
             {
                trending.map(item=>
                    <TrendItem items={item} addItem={addItem} />
                )
            }
        </Slider>
    </div>
    )
}

export default Trending
