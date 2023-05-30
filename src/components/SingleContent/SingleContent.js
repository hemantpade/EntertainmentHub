import React, { useState } from "react";
import { Menu } from "../menuApi";
import Badge from "@mui/material/Badge";
import "../SingleContent/SingleContent.css";
// import MainNav from "./MainNav";
import Header from "../Header/Header";
import PaginationSize from "../Pagination/SingleTemplate";

const SingleContent = ({
  menuData,
  setMenuData,
  content,
  page,
  setPage,
  media_type,
  totalPages,
  stateId,
  gener,
  setGener,
  type,
}) => {
  return (
    <>
      {/* <section className="trending">
        {menuData &&
          menuData.map((curElem) => {
            return (
              <>
             
                <div key={curElem.id} className="media">
              
                <Badge
                  badgeContent={curElem.vote_average}
                  color={curElem.vote_average > 6 ? "primary" : "secondary"}
                />
           
                  <img src={curElem.poster} alt="" className="poster" ></img>
                  <b className="title">{curElem.title}</b>
                  <span className="subTitle">
                    {curElem.type}
                    <span className="subTitle">{curElem.releaseDate}</span>
                  </span>
                </div>
              </>
            );
          })}
      </section> */}

      <PaginationSize
        setMenuData={setMenuData}
        menuData={menuData}
        content={content}
        media_type={media_type}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        stateId={stateId}
        gener={gener}
        setGener={setGener}
        type={type}
      />
    </>
  );
};
export default SingleContent;
