import React, { useContext } from 'react'
import { CartItemContext } from './CartItemContext';

export const Item = (props) => {
    const [cartItem, setCartItem] = useContext(CartItemContext);

    const addToCart = (e) => {
        console.log(e.target.dataset);
        setCartItem([...cartItem, {name: e.target.dataset.name, profileURL: e.target.dataset.src, id: e.target.id}]);
    }
    return (
        <div className="col pb-2" id="top">
            <div className="itemimg">
                <img className="pimg" src={props.profileURL} alt={props.itemName} height="80%" width="100%" />
            </div>
            <div className="pname" >
                <p className="p-0 m-0" id="itemName">{props.itemName}</p>
                <p className="text-muted pt-2"></p>
            </div>
            <div className="pbody">
                <img className="pimg" id="lgimg" src={props.profileURL} alt={props.itemName} height="80%" width="100%" />
                <div className="itemHover" >
                    <div>
                        <a href="./product.html" title="See Product in detail">
                            <button className="btn btn-info" id="cartButton1" >Details</button>
                        </a>
                        <button className="btn btn-warning ms-2" key={props.pid} id={'cartButton'+props.pid}
                         data-name={props.itemName} 
                         data-src={props.profileURL}
                         data-bs-pid={props.pid}
                          onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card-body ">
                <div className="mt-3 m-0 ps-2">
                    <span className={`bi bi-star-fill ${props.firststar}`}></span>
                    <span className={`bi bi-star-fill ${props.secondtstar}`}></span>
                    <span className={`bi bi-star-fill ${props.thirdstar}`}></span>
                    <span className={`bi bi-star-fill ${props.fourthstar}`}></span>
                    <span className={`bi bi-star-fill ${props.fifthstar}`}></span>
                </div>
                <div className="card-text m-0">
                    <p className="d-flex justify-content-between px-1 my-0">
                        <span className="">Tk.{props.price} only</span>
                        <span className="bi bi-heart fav" ></span>
                    </p>
                </div>

                <a href="./product.html" title="See Product in detail">
                    <button className="btn btn-info Mbutton" id="cartButton1" >Details</button>
                </a>
                <button className="btn btn-warning Mbutton" id={'cartButton'+props.pid}
                 data-name={props.itemName}
                 data-src={props.profileURL}
                 data-bs-pid={props.pid}

                 onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export const RecipeItem = props => {
    const [cartItem, setCartItem] = useContext(CartItemContext);

    const addToCart = (e) => {
        console.log(e.target.dataset);
        setCartItem([...cartItem, {name: e.target.dataset.name, profileURL: e.target.dataset.src, id: e.target.id}]);
    }
    
    return (
        <div className="col pb-2" id="top">
        <div className="itemimg">
            <img className="pimg" src={props.profileURL} alt={props.itemName} height="80%" width="100%" />
        </div>
        <div className="pname" >
            <p className="p-0 m-0" id="itemName">{props.itemName}</p>
            <p className="text-muted pt-2">{`calories: ${props.calories}`}</p>
        </div>
        <div className="pbody">
            <img className="pimg" id="lgimg" src={props.profileURL} alt={props.itemName} height="80%" width="100%" />
            <div className="itemHover" >
                <div>
                    <a href="./product.html" title="See Product in detail">
                        <button className="btn btn-info" id="cartButton1" >Details</button>
                    </a>
                    <button className="btn btn-warning ms-2" key={props.pid} id={'cartButton'+props.pid}
                     data-name={props.itemName} 
                     data-src={props.profileURL}
                     data-bs-pid={props.pid}
                      onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
        <div className="card-body ">
            <div className="mt-3 m-0 ps-2">
                <span className={`bi bi-star-fill ${props.firststar}`}></span>
                <span className={`bi bi-star-fill ${props.secondtstar}`}></span>
                <span className={`bi bi-star-fill ${props.thirdstar}`}></span>
                <span className={`bi bi-star-fill ${props.fourthstar}`}></span>
                <span className={`bi bi-star-fill ${props.fifthstar}`}></span>
            </div>
            <div className="card-text m-0">
                <p className="d-flex justify-content-between px-1 my-0">
                    <span className="">Tk.{props.price} only</span>
                    <span className="bi bi-heart fav" ></span>
                </p>
            </div>

            <a href="./product.html" title="See Product in detail">
                <button className="btn btn-info Mbutton" id="cartButton1" >Details</button>
            </a>
            <button className="btn btn-warning Mbutton" id={'cartButton'+props.pid}
             data-name={props.itemName}
             data-src={props.profileURL}
             data-bs-pid={props.pid}

             onClick={addToCart}>Add to cart</button>
        </div>
    </div>
    )
}
