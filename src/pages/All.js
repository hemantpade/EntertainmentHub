import React, { useEffect, useState } from "react";
import "../components/SingleContent/SingleContent.css";
import MainNav from "../components/NavigationBar/MainNav";

import { options } from "../components/Servies/Auth";
import viewModal from "../components/ViewModal/ViewModal";
import { getDataTrendingApi } from "../services/ApiRequest";
import PaginationSize from "../components/PageTemplate/PageTemplate";
const All = () => {
  const [menuData, setMenuData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const[type,setType]=useState("movie")
  const media_type=media_type
  const pageNumber = () => {
    setPage((val) => val + 1);
    console.log("inside page number", page);
  };

  const getDataAll = () => {
    getDataTrendingApi(`trending/all/day?language=en-US&page=${page}`)
      .then((JsonRes2) => {
        console.log("response.json()", JsonRes2);
        if (page === 1) {
          setMenuData(JsonRes2.results);
        } else {
          setMenuData((prev) => [...prev, ...JsonRes2.results]);
        }
        setTotalPages(JsonRes2.total_pages);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // filterItem();
    getDataAll();
    // window.scroll(0, 0);
  }, [page]);
  return (
    <>
      <div>
        <span className="pageTitle">trending today</span>
        <PaginationSize
          menuData={menuData}
          value={"All"}
          totalPages={totalPages}
          page={page}
          setPage={setPage}
          // setMenuData={setMenuData}
          // content={content}
          // media_type={media_type}
          // stateId={stateId}
          // gener={gener}
          // setGener={setGener}
          type={type}
        />
      </div>
    </>
  );
};
export default All;
