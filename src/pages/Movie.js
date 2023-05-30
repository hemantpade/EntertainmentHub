import React, { useEffect, useState } from "react";
import { Menu } from "../components/menuApi";
import "../components/SingleContent/SingleContent.css";
import BadgeInside from "../components/BadgeInside";
import axios from "axios";
// import MainNav from "./MainNav";
import SingleContent from "../components/SingleContent/SingleContent";
import PaginationSize from "../components/Pagination/SingleTemplate";
import Gener from "../components/Gener/Gener";
import useGenre from "../hooks/useGenre.js";
import { options } from "../components/Servies/Auth";
const Movie = () => {
  const [menuData, setMenuData] = useState([]);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [gener, setGener] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const [stateId, setStateId] = useState([]);
  const media_type = "movie";
  const[type,setType]=useState("movie")

  const getDataMovie = async () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&with_genres=${genreforURL}&sort_by=popularity.desc`,
      options
    )
      .then(async (response) => {
        let JsonRes = await response.json();
        console.log("response.json()", JsonRes);
        // setMenuData(JsonRes.results)
        if(page===1){
          setMenuData(JsonRes.results)
        }else
        {setMenuData((prev) => [...prev,...JsonRes.results]);}
        setTotalPages(JsonRes.total_pages);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    // setContent(response.data)
  };
 

  useEffect(() => {
    // filterItem();
    getDataMovie();

    // window.scroll(0, 0);
  }, [page,genreforURL]);

  return (
    <>
      <div>
        <span className="pageTitle">Discover Movies</span>
        <Gener
           menuData={menuData}
          gener={gener}
          type={type}
          setGener={setGener}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          stateId={stateId}
          setStateId={setStateId}
          page={page}
          setPage={setPage}
          setMenuData={setMenuData}
        />
        <SingleContent
          menuData={menuData}
          // filterItem={filterItem}   getDataMovie={getDataMovie()}
          value={"Movie"}
          type={type}
          stateId={stateId}
          page={page}
          setPage={setPage}
          media_type={media_type}
          totalPages={totalPages}
          setMenuData={setMenuData}
          gener={gener}
          setGener={setGener}
        />
      </div>
      <BadgeInside gener={gener} setGener={setGener}/>
    </>
  );
};
export default Movie;
