import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/reducer';
const Sample = React.createContext();

const API="https://hn.algolia.com/api/v1/search?query="

const initialState = {
    isLoading:true,
    query:"",
    hits:[],
    page:0,
    nbPages:0
}

export const SampleProvider=({children})=>{

    const [items, dispatch] = useReducer(reducer, initialState)
    
    const handleRemove = (uid) => {
        dispatch({
            type:"REMOVE_SECTION",
            payload: uid
        })
    }

    const handleSearch = (keyVal) => {
        dispatch({
            type:"SEARCH",
            payload: keyVal
        })
    }

    const handlePrev = () => {
        dispatch({
            type:"PREV_VALUE"
        })
    }

    const handleNext = () => {
        dispatch({
            type:"NEXT_VALUE"
        })
    }

    const fetchUrl = async (URL) => {

        dispatch({
            type:"LOADING1"
        })
        
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);

        dispatch({
            type:"LOADING2"
        })

        dispatch({
            type:"ADD_TO_HITS",
            payload: {
                x:data.hits,
                y:data.nbPages
            }
        })
    }

    useEffect(()=>{
        fetchUrl(`${API}${items.query}&page=${items.page}`)
    },[items.query, items.page])
    
    
    return(
        <Sample.Provider value={{...items, handleRemove, handleSearch, handlePrev, handleNext}}>
            {children}
        </Sample.Provider>
    )
}

function UseMe(){ return useContext(Sample) }
export default UseMe;