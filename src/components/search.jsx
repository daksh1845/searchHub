import UseMe from "../context/context";

function Search(){

    const {query, handleSearch} = UseMe()

    return(
        <>
            <div style={{textAlign:"center"}}>
                <input value={query} onChange={e=>handleSearch(e.target.value)}/>
            </div>
        </>
    )
}

export default Search;