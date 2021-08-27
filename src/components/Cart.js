import React, {useEffect, useRef } from 'react'
import {useCart} from './cartHook'

const Cart = (props) => {
    const {cartItem, increase, decrease, removeItem, itemCount, total} = useCart();
  
    const cartshake = useRef(null);
    const mcartshake = useRef(null);
    const toast = useRef(null);
     const toastinnertext = (number) =>{
          let innerText = "";
          if(cartItem.length === 1){
              innerText = `${number} item added to cart.`
            } else {
                innerText = `total ${number} items added to cart.`
            }
            
            return innerText;
        }
    useEffect(() => {
        const toastText = toast.current;
        if(cartItem){
            toastText.className = "showtoast";
            setTimeout(()=>{
                toastText.className= toastText.className.replace("showtoast", "");
                console.log('timout working!!');
            }, 800)
        } else {
            // toastText.className.replace("show", "");
        };

        if (props.mobile){
            const mreference = mcartshake.current;
            if(cartItem){
                mreference.classList.add("cartshake");
                toastText.className = "showtoast";
            } else {
                mreference.classList.remove('cartshake');
                // toastText.className.replace("show", "");
            } 
            setTimeout(()=>{
                mreference.classList.remove('cartshake');
                toastText.className= toastText.className.replace("showtoast", "");
                console.log('timout working!!');
            }, 800)
        } else {

            const reference = cartshake.current;
            if(cartItem){
                reference.classList.add("cartshake");
                toastText.className = "showtoast";
            } else {
                reference.classList.remove('cartshake');
                // toastText.className.replace("show", "");
            } 
            setTimeout(()=>{
                reference.classList.remove('cartshake');
                toastText.className= toastText.className.replace("showtoast", "");
                console.log('timout working!!');
            }, 800)
        }
        console.log("cartshake added!!");
    }, [cartItem.length]);

   



    return (
        <>
             <div id="snackbar" ref={toast}>{toastinnertext(itemCount)}</div> 
            {(props.mobile?
            <>

                <a ref={mcartshake} className="btn nav-link dropdown-toggle px-2 d-flex justify-content-center text-dark" 
                  data-bs-toggle="dropdown" 
                  id="dropdown2" 
                  aria-expanded="false" 
                  style={{"padding":"4px 8px"}} 
                  data-bs-auto-close="outside">
                    <span className="bi bi-cart4" style={{"font-size":"21px","padding-right":"5px","-webkit-box-pack":"start","-webkit-justify-content":"flex-start","-ms-flex-pack":"start","justify-content":"flex-start","position":"relative"}}>
                        <span className={cartItem.length? "bage bg-primary rounded-pill cart" : "bage bg-danger rounded-pill cart"}   style={{"position":"absolute","top":"0","right":"0"}} id="cartPill2">{itemCount}</span>
                    </span>
                    <span style={{"margin-top":"-8px"}}>Cart</span>
                </a>
                <ul className="dropdown-menu mobilecart" aria-labelledby="dropdown2">
                    {cartItem.length?
                    <>
                    <li>
                            <div className="w-100 p-2 pt-0 text-center" style={{boxShadow: "0 0 5px rgb(0 0 0 / 10%)"}} >
                                <h4 className="dropdown-item text-primary" id="cartDropDown">{`You have ${itemCount} items in your cart.`}</h4>
                                <h6 className="dropdown-item text-dark text-center" ><span className="m-auto">{`Total price: ${total} Taka`}</span></h6>
                                  
                            </div>
                              
                            <div className="cartdrop ps-4">
                                {cartItem.map(c => (
                                    <>
                                    <div className="p-2 mt-2" key={c.id}>
                                        <h5 key={c.id}>{c.itemName} </h5> 
                                        <div className="d-block h-auto">
                                            <img className="mb-2" style={{float: "left"}} src={c.profileURL} alt={c.name} height="55px" width="55px" />
                                            
                                            <div style={{float: "right"}}>
                                            <small className="ps-3 mt-1 text-muted d-block">Price: {c.price} Taka</small>
                                                <button  className="btn bi bi-plus-circle-fill text-success" id={`p${c.id}`} data-product={c.id} onClick={()=>increase(c)}></button>
                                                <span>Quantity: {c.quantity}</span>                                                    
                                                <button className="btn bi bi-dash-circle-fill text-danger" id={`p${c.id}`}  onClick={()=>decrease(c)}></button>                                                    
                                                <button className="btn bi bi-trash-fill text-danger"  onClick={()=>removeItem(c)}></button>                                                    
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-100 m-0" />
                                    </>
                                ))}
                            </div>
                    </li>
                    <li style={{height: "35px"}}>
                        <button className="btn btn-secondary w-100 text-white" href="./cart.html" id="cartLink">ক্রয় নিশ্চিত করুন &gt;&gt;</button>
                    </li>
                    </>
                      :
                      <p className="dropdown-item" id="cartDropDown">Your cart is empty! Please add some items to cart to procced.</p>
                    }
                </ul>
                    
            </>
            

            :


            <>
            
                <a ref={cartshake} className="nav-link dropdown-toggle px-2 d-flex justify-content-center" data-bs-toggle="dropdown" id="dropdown1" data-bs-auto-close="false" aria-expanded="false" style={{ padding: "4px 8px" }} href="#">
                    <i className= "bi bi-cart3 "  style={{ fontSize: "21px", paddingRight: "5px", WebkitBoxPack: "start", WebkitJustifyContent: "flex-start", msFlexPack: "start", justifyContent: "flex-start" }}></i>
                    <span className={cartItem.length? "bage bg-primary rounded-pill cart" : "bage bg-danger rounded-pill cart"} id="cartPill">{itemCount}</span>
                </a>

                <ul className="dropdown-menu cartdropdown p-0"  aria-labelledby="dropdown1">
                    {cartItem.length?
                       <> 
                        <li>
                            <div className="w-100 p-2 text-center" style={{boxShadow: "0 0 5px rgb(0 0 0 / 10%)"}} >
                                <h4 className="dropdown-item text-primary" id="cartDropDown">{`You have ${itemCount} items in your cart.`}</h4>
                                <h6 className="dropdown-item text-dark text-center" ><span className="m-auto">{`Total price: ${total} Taka`}</span></h6>
                                
                            </div>
                            
                            <div className="cartdrop ps-4">
                                {cartItem.map(c => (
                                    <div className="p-2 mt-2" key={c.id}>
                                        <h5 key={c.id}>{c.itemName}</h5>
                                        <img className="mb-2" src={c.profileURL} alt={c.name} height="55px" width="55px" />
                                        <button  className="btn bi bi-plus-circle-fill text-success" id={`p${c.id}`} data-product={c.id} onClick={()=>increase(c)}></button>
                                        <span>Quantity: {c.quantity}</span>                                                    
                                        <button className="btn bi bi-dash-circle-fill text-danger" id={`p${c.id}`}  onClick={()=>decrease(c)}></button>                                                    
                                        <button className="btn bi bi-trash-fill text-danger"  onClick={()=>removeItem(c)}></button>                                                    
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </li>
                        <li>
                            <a href="./cart.html" style={{ paddingBottom: "10px" }} id="cartLink">ক্রয় নিশ্চিত করুন &gt;&gt;</a>
                        </li>
                        </>
                        :
                        <p className="dropdown-item" id="cartDropDown">Your cart is empty! Please add some items to cart to procced.</p>
                    }
                </ul>
            </>




           //  <a ref={cartshake} className="nav-link dropdown-toggle px-2 d-flex justify-content-center" data-bs-toggle="dropdown" id="dropdown1" data-bs-auto-close="false" aria-expanded="false" style={{ padding: "4px 8px" }} href="#">
              //                  <i className= "bi bi-cart3 "  style={{ fontSize: "21px", paddingRight: "5px", WebkitBoxPack: "start", WebkitJustifyContent: "flex-start", msFlexPack: "start", justifyContent: "flex-start" }}></i>
                //                <span className={cartItem? "bage bg-primary rounded-pill cart": "bage bg-danger rounded-pill cart"} id="cartPill">
                  //                  {cartItem}
                    //            </span>
                      //      </a>
                        //    <ul className="dropdown-menu cartdropdown"  aria-labelledby="dropdown1">
                          //      <li id>
                            //        {cartItem?
                              //      <div>
                                //        <h4 className="dropdown-item text-primary" id="cartDropDown">{`You have ${cartItem} items in your cart.`}</h4>
                                  //      <div className="cartdrop">
                                    //        {cartItem.map(c => (
                                      //          <div className="p-2 mt-2" key={c.id}>
                                        //            <h5 key={c.id}>{c.name}</h5>
                                          //          <img className="mb-2" src={c.profileURL} alt={c.name} height="55px" width="55px" />
                                            //        <button  className="btn bi bi-plus-circle-fill text-success" id={c.id} data-product={c.id} onClick={(e)=>{addQuantity(e.target.dataset.product)}}></button>
                                              //      <span>Quantity: {c.quantity}</span>                                                    
                                                //    <button className="btn bi bi-dash-circle-fill text-danger" id={c.id} ></button>                                                    
                                                  //  <button className="btn bi bi-trash-fill text-danger"></button>                                                    
                                                 //   <hr />
                                           //     </div>
                                         //   ))}
                                     //   </div>
                                    //    <a href="./cart.html" style={{ paddingBottom: "10px" }} id="cartLink">ক্রয় নিশ্চিত করুন &gt;&gt;</a>
                                 //   </div>
                                //    :
                               //     <p className="dropdown-item" id="cartDropDown">Your cart is empty! Please add some items to cart to procced.</p>
                            //    }
                           //     </li>
                         //   </ul>
        //    
            )} 
        </>
    )
}

export default Cart
