import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./product.css"
import { useCart } from '../../components/cartHook';



const Product = ({ location }) => {
    const {addItem} = useCart();
    const [recipeItem, setRecipeItem] = useState([]);
    const hash= location.hash;
    const str = location.search;
    const idstr = str.toString().replace("?id=", "")
    const [idx, setIdx] = useState(idstr);
    const [itemboolean, setItemboolean] = useState(false);
    const [obj, setObj] = useState({});
    console.log(obj);
    async function requestApi(id){
        if(document.getElementById('productload')) {
            document.getElementById('productload').classList.add("loading","min-height","d-block")
        }
        const req = await fetch(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=67b7db34&app_key=b0f94e41d66422015311373c4dcfe5b1`);
        const res = await req.json();
        if(document.getElementById('productload')) {
            document.getElementById('productload').classList.remove("loading","min-height","d-block")
            document.getElementById('productload').style.display= "none"
        }
        setRecipeItem([res.recipe]);

       

    }
    
    // useEffect(()=>{
    //     if(recipeItem > 0){

    //         setObj(
    //            { itemName: recipeItem[0].label, sno: idx, profileURL: recipeItem[0].image, price: parseInt(recipeItem[0].totalWeight), url: recipeItem[0].uri, quantity: 1 }
    //        ) 
    //        console.log("setobj working!!");
    //     }
    // }, [recipeItem]);

    useEffect(()=>{
        console.log("run time");
        if(recipeItem.length > 0){
            setObj(
               { itemName: recipeItem[0].label, sno: idx, profileURL: recipeItem[0].image, price: parseInt(recipeItem[0].totalWeight), url: recipeItem[0].uri, quantity: 1 }
           ) 
           console.log(recipeItem);
        }
        
        if(hash && idx){
            setItemboolean(!itemboolean)
            console.log(itemboolean)
        } else {
            if(recipeItem <= 0){

                requestApi(idx);
                console.log("reques accepted");
            }
        }
    }, [idx, recipeItem]);
    const arr = ["img/mob1.jpg", "img/mob2.jpg", "img/download.jpg", "img/download (1).jpg" ]
    const imgArr = [
        { image:  "img/iPhone/iphone12.jpg" , label: "this is label"}
    ]

    return (
        <div className="container-fluid pt-5 ps-1 pb-3">
            <div className="row row-cols-1 row-cols-sm-2 g-4 g-md-2 g-lg-1" style={{position: "relative", minHeight: "75vh"}}>
                <div id="productload" style={{display: "none"}}></div>
                <div className="col  h-100 ">
                    <Slider 
                        className="custom-slick"
                        slidesToShow={1}
                        dots
                        customPaging= {i => {
                            return ( <div>
                                        <img src={arr[i]} alt="" />
                                     </div>)
                                    }}
                        dotsClass= "slick-dots custom-dots"
                    >
                        {
                            
                        itemboolean? 
                       
                                imgArr.map(item=> 
                                <div key={item.label}>
                                    <img src={item.image} alt="" />
                                </div>
                                )
                        :

                        recipeItem.map(item => (
                        <div key={item.label}>
                            <img src={item.image} alt="" />
                        </div>
                            )
                        )
                        }
                    </Slider>
                    <button className="btn btn-danger w-100 mx-1 mx-0" onClick={()=> addItem(obj)} ><span className="bi bi-cart4"> </span>Add to Cart</button>
                    
                </div>



                <div className="col ">
                    {
                        itemboolean?
                        imgArr.map(item=>(
                            <p>{item.label}</p>
                        ))
                        :
                recipeItem.map(item => (
                    <div key={item.label}>

                        <h1 key={item.label}>{item.label}</h1>
                        <h5>
                            <span className="bi bi-star-fill text-warning"></span>
                            <span className="bi bi-star-fill text-warning"></span>
                            <span className="bi bi-star-fill text-warning"></span>
                            <span className="bi bi-star-fill text-warning"></span>
                            <span className="bi bi-star-fill"></span>
                        </h5>
                        <h6>Price: {parseInt(item.totalWeight)} Taka</h6>
                        <div className="row">
                            <div className="col-2">Description:</div>
                            <div className="col-10">
                                <ul>{item.ingredientLines.map(it =>(
                                    <li>{it}</li>

                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Product
