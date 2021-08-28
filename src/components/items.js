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
		<h2 className="pb-0 text-center text-bold" style={{"border-bottom" : "1px solid green", "display" : "inline"}}> MOBILE PHONE AND ELECTRONICS</h2>
		<hr className="w-100" />
        
        <div className="row gx-0 row-cols-2 row-cols-md-3 row-cols-lg-6 py-4 overflow-hidden rr "  id="rr">
            {items.map(item => (
                <Item items={item} addItem={addItem}/>
            ))}
        </div>
    </div>
    )
}


// export const RecipeItems = () => {
//     const [recipes] = useContext(RecipesItemContext)
//     console.log(recipes);
//     return (
//     <div className="container electronics my-4 pe-0"  id="">	  
// 		<h2 className="pb-0 text-center text-bold" style={{"border-bottom" : "1px solid green", "display" : "inline"}}> Recipes</h2>
// 		<hr className="w-100" />
        
//         <div className="row gx-0 row-cols-2 row-cols-md-3 row-cols-lg-6 py-4 overflow-hidden rr "  id="rr">
//             {recipes.map(r => (
//                 <RecipeItem 
//                 itemName={r.recipe.label}
//                 key={r.pid} 
//                 pid={r.pid}
//                 calories= {r.recipe.calories}
//                 profileURL={r.recipe.image}
//                 price={r.price}
//                 firststar = {r.firststar}
//                 secondtstar = {r.secondstar}
//                 thirdstar = {r.thirdstar}
//                 fourthstar = {r.fourthstar}
//                 fifthstar = {r.fifthstar}
//                  />
//             ))}
//         </div>
//     </div>
//     )
// }