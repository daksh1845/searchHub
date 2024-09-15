function Reducer(state, action){
    switch(action.type){
        case 'ADD_TO_HITS': return{
            ...state,
            hits : action.payload.x,
            nbPages : action.payload.y
        }
        case 'LOADING1' : return{
            ...state,
            isLoading:true
        }
        case 'LOADING2' : return{
            ...state,
            isLoading:false
        }
        case 'REMOVE_SECTION' : return{
            ...state,
            hits : state.hits.filter((curPost)=>
                curPost.objectID != action.payload
            )
        }
        case 'SEARCH' : return{
            ...state,
            query : action.payload
        }
        case 'PREV_VALUE' : 
        
        const val_1 = state.page
        if(val_1 <= 1){
            state.page = 1
        }
        return{
            ...state,
            page : val_1 - 1
        }

        case 'NEXT_VALUE' : 
        
        const val_2 = state.page
        if(val_2 >= state.nbPages-1){
            state.page = -1
        }
        return{
            ...state,
            page : val_2 + 1
        }
    }
}

export default Reducer