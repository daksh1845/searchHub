import Pagination from "./components/pagination";
import Search from "./components/search";
import Stories from "./components/stories";

function App(){
  return(
    <>
      <div style={{textAlign:"center", fontSize:"3rem", paddingTop:"4%", paddingBottom:"2%",}}>
        SEARCH HERE
      </div>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  )
}

export default App;