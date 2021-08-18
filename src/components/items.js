import React, {useContext} from 'react';
import { ItemContext } from './itemContext';
import Item from './item';


const Items = () => {
    const [items] = useContext(ItemContext);
    return (
    <div className="container electronics my-4 pe-0"  id="">	  
		<h2 className="pb-0 text-center text-bold" style={{"border-bottom" : "1px solid green", "display" : "inline"}}> MOBILE PHONE AND ELECTRONICS</h2>
		<hr className="w-100" />
        
        <div className="row gx-0 row-cols-2 row-cols-md-3 row-cols-lg-6 py-4 overflow-hidden rr "  id="rr">
            {items.map(item => (
                <Item 
                itemName={item.itemName} 
                key={item.pid} 
                pid={item.pid}
                profileURL={item.profileURL}
                price={item.price}
                firststar = {item.firststar}
                secondtstar = {item.secondstar}
                thirdstar = {item.thirdstar}
                fourthstar = {item.fourthstar}
                fifthstar = {item.fifthstar}
                 />
            ))}
        </div>
    </div>
    )
}

export default Items