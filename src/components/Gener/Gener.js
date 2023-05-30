import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SingleTemplate from "../Pagination/SingleTemplate";
import OnClickView from "../OnClickView/OnClickView";
import BadgeInside from "../BadgeInside";
import {options} from "../Servies/Auth";
const Gener = ({
  gener,
  setGener,
  selectedGenres,
  setSelectedGenres,
  setStateId,
  type,
  setPage,
  page,
  menuData,
  setMenuData,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGener(gener.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleDelete = (gener1) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== gener1.id)
    );
    setGener([...gener, gener1]);
    setPage(1);
  };

  const getDataGener = () => {

    fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?language=en`,
      options
    )
      .then(async (response) => {
        let JsonRes4 = await response.json();
        setGener(JsonRes4.genres);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getDataGener();
  }, []);

  return (
    // <Stack direction="row" spacing={1}>
    <>
      <div style={{ padding: "6px 0" }}>
        {selectedGenres.map((g) => {
          return (
            <Chip
              label={g.name}
              spacing={1}
              color="primary"
              size="small"
              onDelete={() => handleDelete(g)}
              key={g.id}
            />
          );
        })}

        {gener.map((g) => {
          return (
            <Chip
              style={{ margin: 2 }}
              spacing={1}
              label={g.name}
              key={g.id}
              size="small"
              onClick={() => handleAdd(g)}
              sx={{
                background: " #e0e0e0",
                color: "#000000",
                fontWeight: "Bold",
                "&:hover": {
                  background: "#fff", // Change to the desired brighter color
                },
              }}
            />
          );
        })}
      </div>
      <BadgeInside gener={gener} setGener={setGener} />
    </>
  );
};
export default Gener;
