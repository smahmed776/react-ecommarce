import React, { useRef, useContext, useEffect } from 'react'
import { CartItemContext } from './CartItemContext'

const Cart = () => {
    const [cartItem] = useContext(CartItemContext);
    console.log(cartItem);
    const cartshake = useRef(null)
    useEffect(() => {
        const reference = cartshake.current;
        (cartItem.length? reference.classList.add("cartshake"): reference.classList.remove('cartshake'));
        setTimeout(()=>{
            reference.classList.remove('cartshake');
            console.log('timout working!!');
        }, 800)
        console.log("cartshake added!!");
    }, [cartItem])
    return (
        <div>
            <a ref={cartshake} className="nav-link dropdown-toggle px-2 d-flex justify-content-center" data-bs-toggle="dropdown" id="dropdown1" aria-expanded="false" style={{ padding: "4px 8px" }} href="#">
                                <i className= "bi bi-cart3 "  style={{ fontSize: "21px", paddingRight: "5px", WebkitBoxPack: "start", WebkitJustifyContent: "flex-start", msFlexPack: "start", justifyContent: "flex-start" }}></i>
                                <span className={cartItem.length? "bage bg-primary rounded-pill cart": "bage bg-danger rounded-pill cart"} id="cartPill">
                                    {cartItem.length}
                                </span>
                            </a>
                            <ul className="dropdown-menu" style={{ right: "0", left: "auto", padding: "5px 0 28px 0" }} aria-labelledby="dropdown1">
                                <li id>
                                    {cartItem.length?
                                    <div>
                                        <p className="dropdown-item" id="cartDropDown">{`You have ${cartItem.length} items in your cart.`}</p>
                                        <div className="cartdrop">
                                            {cartItem.map(c => (
                                                <h4 key={c.id}>{c.name}</h4>
                                            ))}
                                        </div>
                                        <a href="./cart.html" style={{ paddingBottom: "10px" }} id="cartLink">ক্রয় নিশ্চিত করুন &gt;&gt;</a>
                                    </div>
                                    :
                                    <p className="dropdown-item" id="cartDropDown">Your cart is empty! Please add some items to cart to procced.</p>
                                }
                                </li>
                            </ul>
        </div>
    )
}

export default Cart
