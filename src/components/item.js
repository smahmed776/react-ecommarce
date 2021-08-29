import React from 'react'

export const Item = ({items, addItem}) => {


    return (
        <div className="col pb-2" id="top">
            <div className="itemimg">
                <img className="pimg" src={items.profileURL} alt={items.itemName} height="80%" width="100%" />
            </div>
            <div className="pname" >
                <p className="p-0 m-0" id="itemName">{items.itemName}</p>
                <p className="text-muted pt-2"></p>
            </div>
            <div className="pbody">
                <img className="pimg" id="lgimg" src={items.profileURL} alt={items.itemName} height="80%" width="100%" />
                <div className="itemHover" >
                    <div>
                        <a href="./product.html" title="See Product in detail">
                            <button className="btn btn-info" id="cartButton1" >Details</button>
                        </a>
                        <button className="btn btn-warning ms-2" key={items.sno} id={'cartButton'+items.sno}
                         data-name={items.itemName} 
                         data-src={items.profileURL}
                         data-bs-pid={items.sno}
                          onClick={()=> addItem(items)}>Add to cart</button>
                    </div>
                </div>
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
                        <span className="">Tk.{items.price} only</span>
                        <span className="bi bi-heart fav" ></span>
                    </p>
                </div>

                <a href="./product.html" title="See Product in detail">
                    <button className="btn btn-info Mbutton" id="cartButton1" >Details</button>
                </a>
                <button className="btn btn-warning Mbutton" id={'cartButton'+items.sno}
                 data-name={items.itemName}
                 data-src={items.profileURL}
                 data-bs-pid={items.sno}

                 onClick={()=> addItem(items)}>Add to cart</button>
            </div>
        </div>
    )
}

export const RecipeItem = ({items, addItem}) => {
    const obj = { itemName: items.i.label, sno: items.sno, profileURL: items.i.image, price: parseInt(items.i.totalWeight), quantity: 1 }

    
    return (
        <div className="col pb-2" id="top" key={items.sno}>
        <div className="itemimg">
            <img className="pimg" src={items.i.image} alt={items.i.label} height="80%" width="100%" />
        </div>
        <div className="pname" >
            <p className="p-0 m-0" id="itemName">{items.i.label}</p>
            <p className="text-muted pt-2">{`calories: ${items.i.calories}`}</p>
        </div>
        <div className="pbody">
            <img className="pimg" id="lgimg" src={items.i.image} alt={items.i.label} height="80%" width="100%" />
            <div className="itemHover" >
                <div>
                    <a href="./product.html" title="See Product in detail">
                        <button className="btn btn-info" id="cartButton1" >Details</button>
                    </a>
                    <button className="btn btn-warning ms-2" key={items.i.sno} id={'cartButton'+items.i.sno}
                     data-name={items.i.label} 
                     data-src={items.i.image}
                     data-bs-pid={items.i.sno}
                     onClick={()=> addItem(obj)}
                     >Add to cart</button>
                </div>
            </div>
        </div>
        <div className="card-body ">
            <div className="mt-3 m-0 ps-2">
                <span className={`bi bi-star-fill ${items.firststar}`}></span>
                <span className={`bi bi-star-fill ${items.secondtstar}`}></span>
                <span className={`bi bi-star-fill ${items.thirdstar}`}></span>
                <span className={`bi bi-star-fill ${items.fourthstar}`}></span>
                <span className={`bi bi-star-fill ${items.fifthstar}`}></span>
            </div>
            <div className="card-text m-0">
                <p className="d-flex justify-content-between px-1 my-0">
                    <span className="">Tk.{parseInt(items.i.totalWeight)} only</span>
                    <span className="bi bi-heart fav" ></span>
                </p>
            </div>

            <a href="./product.html" title="See Product in detail">
                <button className="btn btn-info Mbutton" id="cartButton1" >Details</button>
            </a>
            <button className="btn btn-warning Mbutton" id={'cartButton'+items.i.sno}
             data-name={items.i.label}
             data-src={items.i.image}
             data-bs-pid={items.i.sno}
             onClick={()=> addItem(obj)}

            >Add to cart</button>
        </div>
    </div>
    )
}
