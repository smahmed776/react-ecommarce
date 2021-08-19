import React, {useState, useEffect, createContext} from 'react'


export const ItemContext = createContext();



export const ItemProvider = props => {

    useEffect(()=>{
        ItemRequest();
    }, []); 
    
    const ItemRequest = async () => {
        const request = await fetch('./items.json');
        const response = await request.json();
        // console.log(response);
        setItems(response);
    }
    
    const [items, setItems] = useState([]);
    
    return (
        <ItemContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemContext.Provider>
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

