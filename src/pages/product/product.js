import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./product.css"
import { useCart } from '../../components/custom hooks/cartHook';



const Product = ({ location }) => {
    const {addItem} = useCart();
    const [amazoneItem, setAmazoneItem] = useState([]);
    const str = location.search;
    const idstr = str.toString().replace("?id=", "")
    const [idx, setIdx] = useState(idstr);
    const [obj, setObj] = useState({});
    const [imgArr, setImgArr] = useState([]);



   
    const amazonRequest = async (id) => {
        if(document.getElementById('productload')) {
            document.getElementById('productload').classList.add("loading","min-height","d-block")
            document.getElementById('addCartBtn').style.marginTop = '65vh'
        }
        const req = await fetch(`https://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/dp/${id}&autoparse=true`);
        const res = await req.json();
        if(document.getElementById('productload')) {
            document.getElementById('productload').classList.remove("loading","min-height","d-block")
            document.getElementById('addCartBtn').style.marginTop = "0";
            document.getElementById('productload').style.display= "none"
        }
        await setAmazoneItem([res]);
        // console.log(res);
    }
    
    const changeMain = e => {
        const target = e.target.src;
        const main = document.getElementById("mainimage");
        main.src = target;
    }


    useEffect(()=>{

        console.log("useeffect running");
        if(amazoneItem.length > 0){
            console.log(amazoneItem);
            setObj(
               { 
                   itemName: amazoneItem[0].name,
                   sno: idx, 
                   profileURL: amazoneItem[0].images[0], 
                   price: parseInt(amazoneItem[0].pricing.toString().replace("$", "")), 
                   url: amazoneItem[0].url, 
                   quantity: 1 
                }
           ) 
           
           console.log(imgArr);
           console.log(obj);
        }
        
        if(amazoneItem <= 0){
                amazonRequest(idx);
                console.log("requested");
        } 

    }, [idx, amazoneItem]);




    return (

        <div className="container-fluid pt-5 ps-1 pb-3">
            <div className="row row-cols-1 row-cols-sm-2 g-4 g-md-2 g-lg-1" style={{position: "relative", minHeight: "100vh" }}>
                <div id="productload" style={{display: "none", marginBottom: "2rem"}}></div>
                <div className="col rowsticky" style={{position: "sticky", top: "15%", left: "0",}}>
                    <div className="row justify-content-center align-items-center pe-2 rowabsolute" style={{ position: "absolute", top: "0", left: "0", width: "100%"}}>
                        <div className="col-2 smallImage" style={{}}>
                            {amazoneItem.length? amazoneItem[0].images.map(item=> (

                                <img onClick={e => changeMain(e)} src={item} alt="" />
                            )
                            ): null
                            }
                                
                            

                        </div>
                        <div className="col-10 m-auto pt-2 ps-2 pe-2 border rowimage" >{
                            amazoneItem.length? 
                            <img id="mainimage" src={amazoneItem[0].images[0]} onClick={()=> console.log(amazoneItem)} alt="" />
                            : null
                        }
                        </div>
                        <div className="col">
                            <button className="btn btn-danger w-100 mx-1 mx-0 mt-2 mb-2" id="addCartBtn" onClick={()=> addItem(obj)} ><span className="bi bi-cart4"> </span>Add to Cart</button>
                        </div>
                    </div>
                    
                </div>



                <div className="col ps-2 pe-3" style={{minHeight: "100vh"}}>
                    {
                        amazoneItem? 
                        amazoneItem.map(item=>(
                        <>
                            <h3 key={item.name}>{item.name}</h3>
                            <h5>
                                <span className="bi bi-star-fill text-warning"></span>
                                <span className="bi bi-star-fill text-warning"></span>
                                <span className="bi bi-star-fill text-warning"></span>
                                <span className="bi bi-star-fill text-warning"></span>
                                <span className="bi bi-star-fill"></span>
                            </h5>
                            <div>
                                <h5>Price: {item.pricing} <span className=" ms-2 text-muted text-decoration-line-through">{item.list_price}</span></h5>
                            </div>
                            <div className="row mt-1">
                                <div className="col-12 ps-3 pe-2 pt-2 pb-2">
                                    <p>Description: </p>
                                    <p className="px-4">{item.small_description}</p>
                                </div>
                            
                            </div>
                        </>
                        ))
                        : null
                    }
                               
                </div>
            </div>
        </div>
               
                    
    )
}

export default Product

//trending on amazon by catagory 
// "https://www.amazon.com/b/?node=15529609011&gb_f_deals1=enforcedCategories:172282%252C541966"