import React, {useState, useEffect, createContext} from 'react'
import { v4 as uuid4 } from "uuid"


export const ItemContext = createContext();
export const TrendingItemContext = createContext();
export const RecipesItemContext = createContext();





export const ItemProvider = props => {

    useEffect(()=>{
        ItemRequest();
    }, []); 
    
    const ItemRequest = async () => {
        if(document.getElementById('itemload')){
            document.getElementById('itemload').classList.add('loading','min-height','d-block')
        }
        // const request = await fetch("./items.json");
        const request = await fetch("https://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/s?k=gaming+laptops&autoparse=true");
        const response = await request.json();
        // console.log(response);
        if(document.getElementById('itemload')){

            document.getElementById('itemload').classList.remove("loading","min-height",'d-block');
            document.getElementById('itemload').style.display= "none";
        }

        setItems(response.results);
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
        console.log("added");
        ItemRequest();
    }, []); 
    
    const ItemRequest = async () => {
        if(document.getElementById("recipeload")){
            document.getElementById('recipeload').classList.add('loading','min-height','d-block');
        }
        const request = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=67b7db34&app_key=b0f94e41d66422015311373c4dcfe5b1");
        const response = await request.json();
        const arr = await response.hits.map(item=> item.recipe)
        if (document.getElementById("recipeload")) {
            document.getElementById('recipeload').classList.remove('loading','min-height','d-block');
            document.getElementById('recipeload').style.display= "none";
        }
        console.log("removed");
        setRecipes(()=>{
           return [
                arr.map(i=>(

                    {i, sno: uuid4()}
                )
                )
                ]
        })
        // console.log(response.hits);
    }
    
    const [recipes, setRecipes] = useState([]);
    // console.log(recipes);
    
    return (
        <RecipesItemContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipesItemContext.Provider>
    )
}


export const TrendingProvider = props => {
    useEffect(()=>{
        trendingRequest();
        itemRequest();
        console.log("working");
    }, [])
    const itemRequest = async () => {
        const request = await fetch("http://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/s?k=gaming+laptops&autoparse=true");
        const response = await request.json();
        // const json = await JSON.parse(request);
        // setItem(json)
        console.log(response, request);
    }
    
    const trendingRequest = async () => {
        if(document.getElementById('trendingload')){
             document.getElementById('trendingload').classList.add('loading','min-height','d-block')
        }
        const request = await fetch('./trending.json');
        const response = await request.json();
        if(document.getElementById('trendingload')){
            
            document.getElementById('trendingload').classList.remove('loading','min-height','d-block');
            document.getElementById('trendingload').style.display= "none"
        } 
        setTrending(response);
    }

    const [item, setItem] = useState([]);

    const [trending, setTrending] = useState([]);
    return (
        <TrendingItemContext.Provider value={[trending, setTrending]}>
            {props.children}
        </TrendingItemContext.Provider>
    )
}

export const AmazonProvider = () => {
    
    const [item, setItem] = useState([]);

    async function Request (){
        const request = await fetch("http://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/s?k=gaming+laptops");
        const response = await request.json();
        console.log(response);
    }
    
    useEffect(()=> {
        Request();
    }, [])
}