import React, { useEffect, useState } from "react";
import { Menu } from "../components/menuApi";
import { createTheme } from "@mui/material/styles";
import { Button, Tab, Tabs, TextField, ThemeProvider } from "@mui/material";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import "../components/SingleContent/SingleContent.css";
import SingleContent from "../components/SingleContent/SingleContent";
import { withTheme } from "@emotion/react";
import { options } from "../components/Servies/Auth";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const Search = () => {
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const[menuData ,setMenuData]=useState([]);
  const[totalPages,setTotalPages]=useState(null);
  
  
  
  const getDataSearch = () => {
   
    fetch(
      `https://api.themoviedb.org/3/search/${type}?query=${search}&include_adult=false&language=en-US&page=${page}`,
      options
    )
    .then( async(response) => {
      let JsonRes3= await response.json()
      console.log('response.json()1', JsonRes3.results)
      if(search=="" || page==1){
        setMenuData(JsonRes3.results)
      }else
    {setMenuData((prev) => [...JsonRes3.results,...prev]);}
      setTotalPages(JsonRes3.total_pages)
    })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
 
  useEffect(() => {
    // fetchSearch();
    getDataSearch();
    // pageNumber(page);
    window.scroll(0, 0);
  }, [type,page,search]);

  
  return (
    <>
      <div className="">
        <ThemeProvider theme={darkTheme}>
          <div className="search">
            <TextField
              style={{ flex: 1, background: withTheme }}
              className="searchBox"
              label="Search"
              variant="filled"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              onClick={() =>getDataSearch()}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </div>

          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5 }}
            aria-label="disabled tabs example"
          >
            <Tab
             type="movie"
              style={{ width: "50%" }}
              label="Search Movies"
              value={"movie"}
            />
            <Tab
            type="tv"
              style={{ width: "50%" }}
              label="Search TV Series"
              value={"tv"}
            />
          </Tabs>
          <div>
            <SingleContent menuData={menuData} totalPages={totalPages} page={page} setPage={setPage}/>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};
export default Search;
