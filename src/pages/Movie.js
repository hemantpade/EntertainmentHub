import React, { useEffect, useState } from "react";import "../components/SingleContent/SingleContent.css";

import axios from "axios";
// import MainNav from "./MainNav";
import PaginationSize from "../components/PageTemplate/PageTemplate";
import Gener from "../components/Gener/Gener";
import useGenre from "../hooks/useGenre.js";
import { getDataMovieApi } from "../services/ApiRequest";
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
    getDataMovieApi(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&with_genres=${genreforURL}&sort_by=popularity.desc`).then((JsonRes) => {
        // setMenuData(JsonRes.results)
        if(page===1){
          setMenuData(JsonRes.results)
        }else
        {setMenuData((prev) => [...prev,...JsonRes.results]);}
        setTotalPages(JsonRes.total_pages);
      })
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
        <PaginationSize
          menuData={menuData}
          value={"All"}
          totalPages={totalPages}
          page={page}
          setPage={setPage}
          setMenuData={setMenuData}
          content={content}
          media_type={media_type}
          stateId={stateId}
          gener={gener}
          setGener={setGener}
          type={type}
        />
      </div>
     
    </>
  );
};
export default Movie;
