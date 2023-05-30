import React, { useEffect, useState } from "react";
import { Menu } from "../components/menuApi";
import "../components/SingleContent/SingleContent.css";
import SingleContent from "../components/SingleContent/SingleContent";
import useGenre from "../hooks/useGenre";
import Gener from "../components/Gener/Gener"
import BadgeInside from "../components/BadgeInside";
import { options } from "../components/Servies/Auth";

const Series = () => {
  const [menuData, setMenuData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [gener, setGener] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const[type,setType]=useState("tv")
  const genreforURL = useGenre(selectedGenres);
 
  const media_type = "tv";
  let prevGenre = '';
  useEffect(() => {
    getDataSeries();
  }, [page, genreforURL]);

  const getDataSeries = async () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&with_genres=${genreforURL}&sort_by=popularity.desc`,
      options
    )
      .then(async (response) => {
        let JsonRes1 = await response.json()
        if (page === 1) {
          setMenuData(JsonRes1.results)
        } else {
          setMenuData((prev) => [...prev,...JsonRes1.results]);
        }
        setTotalPages(JsonRes1.total_pages)
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <span className="pageTitle">Discover Series</span>
        <Gener
          gener={gener}
          type={type}
          page={page}
          setPage={setPage}
          setGener={setGener}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
        <SingleContent
          menuData={menuData}
          type={type}
          value={"tv"}
          page={page}
          setPage={setPage}
          gener={gener}
          setGener={setGener}
          // pageNumber={pageNumber}
          media_type={media_type}
          totalPages={totalPages}
        />
      </div>
      <BadgeInside gener={gener} setGener={setGener}/>
    </>
  );
};
export default Series;
