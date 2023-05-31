import  React ,{useState ,useEffect }from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useNavigate } from "react-router-dom";

  export const  MainNav = ({filterItem}) =>  {
   const navigate=useNavigate()
    const [value, setValue] = useState(0);
    return (
      <BottomNavigation
      sx={{width:'100%',position:'fixed',bottom:'0', backgroundColor:'#2d313a',border: '1px solid black',zIndex:'100'}}
       
      value={value}
        onChange={(event, newValue) => {
          // console.log("newValue",newValue)
          setValue(newValue);
          // filterItem(newValue);
          navigate(newValue)
        }}
       >
        <BottomNavigationAction
          // onClick={()=>filterItem("Trending")}
          style={{ color: "white" }} 
          label="Trending"
          value={"All"}
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
        // onClick={()=>filterItem("Movies")}
          style={{ color: "white" }}
          label="Movies"
          value={"Movie"}
          icon={<MovieCreationIcon />}
        />
        <BottomNavigationAction
        // onClick={()=>filterItem("Tv Series")}
          style={{ color: "white" }}
          label="TV Series"
          value={"TVSeries"}
          icon={<TvIcon />}
        />
        <BottomNavigationAction
        // onClick={()=>filterItem("Search")}
          style={{ color: "white" }}
          label="Search"
          value={"Search"}
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    );
  }

  export default MainNav;