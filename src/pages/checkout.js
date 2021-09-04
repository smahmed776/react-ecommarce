import React from 'react'
import CheckBoard from './checkout/checkboard';
import CheckInput from './checkout/checkInput';
import { useCart } from '../components/custom hooks/cartHook';


const CheckOut = () => {
    const {itemCount, total, cartItem} = useCart();
    return (
        <div className="container bnfont" id="cartpageopen">
            <div className="py-4 text-center">
                <h2>আপনার ক্রয় নিশ্চিত করুন</h2>
            </div>
            
            <div className="row g-5">
                <CheckBoard cartItem={cartItem} itemCount={itemCount} total={total}/>
                
                <CheckInput />
	        </div>
        </div>
    )
}

export default CheckOut;
