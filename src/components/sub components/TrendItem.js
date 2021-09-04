import React from 'react'
import { Link } from 'react-router-dom';

const TrendItem = ({items, addItem}) => {


    const productId = () =>{
        const url = items.url;
        const urlStr = url.toString();
        const firstSide = urlStr.substring(urlStr.indexOf("/dp/") + 4);
        const lastSide = firstSide.substring(firstSide.indexOf("/ref"));
        const pid = firstSide.replace(lastSide, "");
        return pid;
    }


    const addObj = {
        ...items, itemName: items.name, price: items.price, profileURL: items.image, sno: productId()
    }



    return ( 
        <div className="col pb-2" id="top" key={items.price}>
            <div className="border">
                
                <div className="itemimg">
                    <img className="pimg" src={items.name} alt="" height="80%" width="100%" />
                </div>
                <div className="pname" >
                    <p className="p-0 m-0" id="itemName">{items.name}</p>
                    <p className="text-muted pt-2">{items.author}</p>
                </div>
                <div className="pbody">
                    <img className="pimg" id="lgimg" src={items.image} alt="" height="80%" width="100%" />
                    
                </div>
                <div className="card-body ">
                    <div className="mt-3 m-0 ps-2">
                        <span className={`bi bi-star-fill ${items.firststar}`}></span>
                        <span className={`bi bi-star-fill ${items.secondstar}`}></span>
                        <span className={`bi bi-star-fill ${items.thirdstar}`}></span>
                        <span className={`bi bi-star-fill ${items.fourthstar}`}></span>
                        <span className={`bi bi-star-fill ${items.fifthstar}`}></span>
                    </div>
                    <div className="card-text m-0">
                        <p className="d-flex justify-content-between px-1 my-0">
                            <span className="">${items.price} only</span>
                            <span className="bi bi-heart fav" ></span>
                        </p>
                    </div>
                    <Link to={`/product?id=${productId()}#list=item`}><button className="btn btn-outline-info Mbutton mb-2 mt-1 w-100" title="See Product in detail" id="cartButton1" >Details</button></Link>
                    <button className="btn btn-outline-dark Mbutton  w-100" id={'cartButton'+items.sno}
                             data-name={items.itemName}
                             data-src={items.profileURL}
                             data-bs-pid={items.sno}
            
                             onClick= {()=> addItem(addObj)}
                    >Add to cart</button>
                </div>
            </div>
                                
        </div>
    )
}

export default TrendItem
