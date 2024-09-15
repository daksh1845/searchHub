import UseMe from "../context/context";

function Pagination(){

    const {page, nbPages, handlePrev, handleNext} = UseMe()

    return(
        <>
            <div className="pagination_btn" style={{textAlign:"center"}}>
                <button onClick={handlePrev}>PREV</button>
                <p>{page+1} of {nbPages}</p>
                <button onClick={handleNext}>NEXT</button>
            </div>
        </>
    )
}

export default Pagination;