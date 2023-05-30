import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.css";
import { Menu } from "../menuApi";
import "../Pagination/Pagination.css";
import Chip from "@mui/material/Chip";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import OnClickView from "../OnClickView/OnClickView";
import { img_300, unavailable } from "../../configuration/Configuration";
import {options} from "../Servies/Auth"
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});
export default function PaginationSize({
  menuData,
  media_type,
  totalPages,
  stateId,
  page,
  setPage,
  gener,
  type,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [itemsToDisplay, setitemsToDisplay] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [iD, setID] = useState();
  const [offset, setOffset] = useState();
  const [data, setData] = useState([]);
  const itemsPerPage = 10;
  const updatedList = [];
  
  
  const getDataTime = () => {

    fetch(`https://api.themoviedb.org/3/${type}/${iD}?language=en-US`, options)
      .then(async (response) => {
        let JsonRes6 = await response.json();
        setData(JsonRes6);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDataTime();
  }, [type, iD]);

  useEffect(() => {
    paginate(page);
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      // console.log("scrollHeight", scrollHeight);
      // console.log("currentHeight", currentHeight);
      if (currentHeight + 1 >= scrollHeight) {
        setPage(page + 1);
      }
      e.preventDefault();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, [page, menuData]);
  


  const handlePageClick = (event, value) => {
    // console.log(event, value);

    paginate(value);
   
  };
 
  const paginate = (currentPage) => {
    var temp = menuData;
    // const itemsToDisplayTemp = temp.slice(
    //   (currentPage - 1) * itemsPerPage,
    //   currentPage * itemsPerPage
    // );
    // console.log("currentPage", currentPage, itemsToDisplayTemp, menuData);
    setitemsToDisplay(menuData);
  };

  const filterItem = (id) => {
    setID(id);
  };

  const handleOpen = (index) => {
    filterItem(index);
    const eleID = index;
    setOpen(true);
    setModalData(eleID);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <section className="trending">
        <OnClickView
          openparams={open}
          iD={iD}
          type={type}
          menuData={menuData}
          handleClose={handleClose}
          gener={gener}
          data={data}
          modalData={modalData}
        />
        {totalPages &&
          itemsToDisplay.map((curElem, index) => {
            return (
              <>
                <div
                  key={curElem.id}
                  className="media"
                  onClick={() => handleOpen(curElem.id)}
                >
                  <Badge
                    badgeContent={curElem.vote_average}
                    color={curElem.vote_average > 6 ? "primary" : "secondary"}
                  />
                  {/* src={poster ? `${img_300}${poster}` : unavailable} */}
                  <img
                    src={
                      curElem.poster_path
                        ? `${img_300}${curElem.poster_path}`
                        : unavailable
                    }
                    alt=""
                    className="poster"
                  ></img>
                  <b className="title">{curElem.title || curElem.name}</b>
                  <span className="subTitle">
                    {curElem.media_type
                      ? curElem.media_type.charAt(0).toUpperCase() +
                      curElem.media_type.slice(1)
                      : media_type === "tv"
                        ? "TV Series"
                        : "Movie"}
                    <span className="subTitle">
                      {curElem.release_date || curElem.first_air_date}
                    </span>
                  </span>
                </div>
              </>
            );
          })}
        {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}>
          <ThemeProvider theme={darkTheme}>
        {   totalPages>1 &&
            <Pagination
              onChange={handlePageClick}
              // onChange={(e) => handlePageClick(e.target.textContent)}
              count={totalPages}
              pageNumber={pageNumber}
              color="primary"
                hideNextButton
                hidePrevButton
            />}
          </ThemeProvider>
        </div>
         */}
      </section>
    </>
  );
}
