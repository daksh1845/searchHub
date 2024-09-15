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

        case "NEXT_VALUE":
        let pageNumInc = state.page + 1;

        if (pageNumInc >= state.nbPages) {
          pageNumInc = 0;
        }
        return {
          ...state,
          page: pageNumInc,
        };

        case "PREV_VALUE":
        let pageNum = state.page - 1;

        if (pageNum <= 0) {
          pageNum = 0;
        }

        return {
          ...state,
          page: pageNum,
        };
    }
}

export default Reducer