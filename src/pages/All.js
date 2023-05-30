import React ,{useEffect, useState} from "react";
import {Menu} from "../components/menuApi"
import "../components/SingleContent/SingleContent.css";
import MainNav from "../components/NavigationBar/MainNav";
import SingleContent from "../components/SingleContent/SingleContent";
import {options} from "../components/Servies/Auth"

const All = ()=>{
    const [menuData, setMenuData] = useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);
   
    const pageNumber =()=>{
        setPage(val=>(val+1))
        console.log('inside page number', page )
      }
      
    const getDataAll=()=>{
          fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, options)
          .then(async(response) => {
            let JsonRes2= await response.json()
            console.log('response.json()', JsonRes2)
            if(page===1){
              setMenuData(JsonRes2.results)
            }else
            {setMenuData((prev) => [...prev,...JsonRes2.results]);}
            setTotalPages(JsonRes2.total_pages)
          })
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
   
       useEffect(()=>{
        // filterItem();
        getDataAll()
        // window.scroll(0, 0);
       },[page])
    return(
        <>
        <div>
      <span className="pageTitle">trending today</span>
       <SingleContent menuData={menuData} value={"All"}  totalPages={totalPages} page={page} setPage={setPage}/>
       </div>
        </>    
    )
};
export default All;