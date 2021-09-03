import React, {useContext} from 'react';
import { ItemContext, RecipesItemContext } from './itemContext';
import { Item,  RecipeItem } from './item';
import { useCart } from './cartHook';


export const Items = () => {
    const [items] = useContext(ItemContext);
    const {addItem} = useCart();
    console.log(items);

    return (
    <div className="container electronics my-4 pe-0"  id="">	  
		<h2 className="pb-0 text-center text-bold" style={{borderBottom : "1px solid green", "display" : "inline"}}> MOBILE PHONE AND ELECTRONICS</h2>
		<hr className="w-100" />
        
        <div className="row gx-0 row-cols-2 row-cols-md-3 row-cols-lg-6 py-4 overflow-hidden g-3 rr "  id="rr2" style={{position: "relative"}}>
            <div className="" id="itemload" style={{display: "none"}}></div>
            {items.map(item => (
                <Item items={item} addItem={addItem} key={item.name}/>
            ))}
        </div>
    </div>
    )
}


export const RecipeItems = () => {
    const [recipes] = useContext(RecipesItemContext);
    const {addItem} = useCart();

    // console.log(recipes);
    return (
    <div className="container electronics my-4 pe-0" id="">	  
		<h2 className="pb-0 text-center text-bold" style={{borderBottom : "1px solid green", "display" : "inline"}}> Recipes</h2>
		<hr className="w-100" />
        
        <div className="row gx-0 row-cols-2 row-cols-md-3 row-cols-lg-6 py-4 overflow-hidden g-3 rr "  id="rr">
            <div className="" id="recipeload" style={{display: "none"}}></div>
            {recipes.map(r => (
                r.map(item=> (

                    <RecipeItem items={item} addItem={addItem} key={item.sno}/>
                    ))
            ))}
        </div>
    </div>
    )
}