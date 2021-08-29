import React, {useState, useEffect, createContext} from 'react'
import { v4 as uuid4 } from "uuid"


export const ItemContext = createContext();
export const RecipesItemContext = createContext();




export const ItemProvider = props => {

    useEffect(()=>{
        ItemRequest();
    }, []); 
    
    const ItemRequest = async () => {
        const request = await fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=99d68360&app_key=419e582f891567c617f0192b41ac1708&ingr=chicken&nutrition-type=cooking");
        const response = await request.json();
        console.log(response.hints);
        setItems(response.hints);
    }
    
    const [items, setItems] = useState([]);
    
    return (
        <ItemContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemContext.Provider>
    )
}

export const RecipeProvider = props => {
    
    useEffect(()=>{
        ItemRequest();
    }, []); 
    
    const ItemRequest = async () => {
        const request = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=67b7db34&app_key=b0f94e41d66422015311373c4dcfe5b1");
        const response = await request.json();
        const arr = await response.hits.map(item=> item.recipe)
        
        setRecipes(()=>{
           return [
                arr.map(i=>(

                    {i, sno: uuid4()}
                )
                )
                ]
        })
        console.log(response.hits);
    }
    
    const [recipes, setRecipes] = useState([]);
    console.log(recipes);
    
    return (
        <RecipesItemContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipesItemContext.Provider>
    )
}

export const TrendingProvider = props => {
    useEffect(()=>{
        trendingRequest();
    }, [])

    const trendingRequest = async () => {
        const request = await fetch('./trending.json');
        const response = await request.json();
        setTrending(response);
    }

    const [trending, setTrending] = useState([]);
    return (
        <ItemContext.Provider value={[trending, setTrending]}>
            {props.children}
        </ItemContext.Provider>
    )
}

