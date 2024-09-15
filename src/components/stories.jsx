import UseMe from "../context/context";

function Stories(){

    const {hits, isLoading, handleRemove} = UseMe()

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return(
        <>
            <div className="stories-div" style={{paddingBottom:"5%"}}>
                {hits.map((x)=>{
                    const {title, author, objectID, url, num_comments} = x

                    return(
                        <>
                            <div className="card">
                                <h2>{title}</h2>
                                <p>By <span>{author}</span> |<span> {num_comments} </span>comments</p>
                                <div className="card-button">
                                    <a href={url} target=" ">Read more</a>
                                    <a onClick={()=>handleRemove(objectID)} style={{cursor:"pointer"}}>Remove</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Stories;