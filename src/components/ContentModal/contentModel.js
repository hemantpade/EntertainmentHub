// import {Menu} from "./menuApi";
// import SingleContent from "./SingleContent";
// import {MainNav} from './MainNav';
// import Search from "./search";
// import Movie from "./Movie";

// const ContentModel = () => {
   
//     const [menuData, setMenuData] = useState(Menu);
//     const[search,setSearch]=useState("");
//     const filterItem = (type) => {
//         // console.log("type",Menu)
//         console.log("type",type)
//         setSearch(type);
//         if(type==="All"){
//             const sortByDate=Menu.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
//             setMenuData(sortByDate);
//             return sortByDate;
//         }
//        else{
//         const updatedList = Menu.filter((curElem) => {
//             return curElem.type === type;
//         });
//         setMenuData(updatedList);
//        }
//     }; 
//     console.log(search);
//     return(
//        <>
//         {/* {search==='Search'?<Search/>:<SingleContent menuData={menuData}/>} */}
//         {/* <MainNav filterItem={filterItem}/> */}
//         </>
//     );
// }
// export default ContentModel;