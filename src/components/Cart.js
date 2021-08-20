import React, { useRef, useContext, useEffect } from 'react'
import { CartItemContext } from './CartItemContext'

const Cart = (props) => {
    const [cartItem] = useContext(CartItemContext);
    console.log(cartItem);
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
        if(cartItem.length){
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
            if(cartItem.length){
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
            if(cartItem.length){
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
    }, [cartItem]);

    return (
        <>
            <div id="snackbar" ref={toast}>{toastinnertext(cartItem.length)}</div>
            {(props.mobile?
            <>
                <a ref={mcartshake} className="btn nav-link dropdown-toggle px-2 d-flex justify-content-center text-dark" 
                  data-bs-toggle="dropdown" 
                  id="dropdown2" 
                  aria-expanded="false" 
                  style={{"padding":"4px 8px"}} 
                  data-bs-auto-close="outside">
                    <span className="bi bi-cart4" style={{"font-size":"21px","padding-right":"5px","-webkit-box-pack":"start","-webkit-justify-content":"flex-start","-ms-flex-pack":"start","justify-content":"flex-start","position":"relative"}}>
                        <span className={cartItem.length? "bage bg-primary rounded-pill cart": "bage bg-danger rounded-pill cart"}   style={{"position":"absolute","top":"0","right":"0"}} id="cartPill2">{cartItem.length}</span>
                    </span>
                    <span style={{"margin-top":"-8px"}}>Cart</span>
                </a>
                <ul className="dropdown-menu mobilecart" aria-labelledby="dropdown2">
                    {cartItem.length?
                      <li className="dropdown=item">
                          <h4 className="text-primary">{`You have ${cartItem.length} items in your cart.`}</h4>
                          {cartItem.map(c => (
                              <div className="p-2 mt-2" key={c.id}>
                                <h5 key={c.id}>{c.name}</h5>
                                <img className="mb-2" src={c.profileURL} alt={c.name} height="55px" width="55px" />
                              
                                <hr />
                          </div>
                          ))}
                      </li>
                      :
                      <p className="dropdown-item" id="cartDropDown">Your cart is empty! Please add some items to cart to procced.</p>
                    }
                </ul>
            </>




            :



            <>
            <a ref={cartshake} className="nav-link dropdown-toggle px-2 d-flex justify-content-center" data-bs-toggle="dropdown" id="dropdown1" data-bs-auto-close="false" aria-expanded="false" style={{ padding: "4px 8px" }} href="#">
                                <i className= "bi bi-cart3 "  style={{ fontSize: "21px", paddingRight: "5px", WebkitBoxPack: "start", WebkitJustifyContent: "flex-start", msFlexPack: "start", justifyContent: "flex-start" }}></i>
                                <span className={cartItem.length? "bage bg-primary rounded-pill cart": "bage bg-danger rounded-pill cart"} id="cartPill">
                                    {cartItem.length}
                                </span>
                            </a>
                            <ul className="dropdown-menu cartdropdown"  aria-labelledby="dropdown1">
                                <li id>
                                    {cartItem.length?
                                    <div>
                                        <h4 className="dropdown-item text-primary" id="cartDropDown">{`You have ${cartItem.length} items in your cart.`}</h4>
                                        <div className="cartdrop">
                                            {cartItem.map(c => (
                                                <div className="p-2 mt-2" key={c.id}>
                                                    <h5 key={c.id}>{c.name}</h5>
                                                    <img className="mb-2" src={c.profileURL} alt={c.name} height="55px" width="55px" />
                                                    
                                                    <hr />
                                                </div>
                                            ))}
                                        </div>
                                        <a href="./cart.html" style={{ paddingBottom: "10px" }} id="cartLink">ক্রয় নিশ্চিত করুন &gt;&gt;</a>
                                    </div>
                                    :
                                    <p className="dropdown-item" id="cartDropDown">Your cart is empty! Please add some items to cart to procced.</p>
                                }
                                </li>
                            </ul>
            </>
            )}
        </>
    )
}

export default Cart
