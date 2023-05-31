import React, { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import "./ViewModal.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Button from "@mui/material/Button";
import Carousel from "../Carousel/Corousel";
import Chip from "@mui/material/Chip";

import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../configuration/Configuration.js";
import { getDataCarouselAPI, getDataTimeAPI } from "../../services/ApiRequest";
const style = {
  pt: 8,
  px: 10,
  pb: 5,
};

export default function ViewModal(props) {

 const[type,setType]=useState("");
 const [actor, setActor] = useState([]);
 const [data, setData] = useState([]);

//time
 const getDataTime = () => {
  getDataTimeAPI(`${props.type}/${props.iD}?language=en-US`)
    .then( (JsonRes6) => {
      setData(JsonRes6);
    })
    .catch((err) => console.error(err));
};
 
  const getDataOnClick = () => {
    getDataCarouselAPI(
      `${props.type}/${props.iD}/credits?api_key=26ba5e77849587dbd7df199727859189&language=en-US`
    )
      .then( (JsonRes5) => {
        if (JsonRes5.cast) {
          setActor(JsonRes5.cast);
        }
      })
      .catch((err) => console.error(err));
  };
  
  useEffect(() => {
    getDataOnClick();
    getDataTime()
  }, [props.type, props.iD]);
  const convertMinutesToTime = (minutes) => {
    const totalSeconds = minutes * 60;
    const hours = Math.floor(totalSeconds / 3600);
    const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

  
    return { hours, minutesRemaining, remainingSeconds };
    
  };
  let { hours, minutes, remainingSeconds } = convertMinutesToTime(
    data.runtime || data.episode_run_time
  );
  
  return (
    <>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.openparams}
        onClose={props.handleClose}
        // closeAfterTransition
        sx={style}
        className="modal"
      >
        <div className="jss3">
          {props.menuData
            .filter((single) => single.id == props.iD)
            .map((curElem) => {
              return (
                <div className="ContentModal" key={curElem.id}>
                 <div className="container">
                 <img
                    className="image"
                    src={
                      curElem.poster_path
                        ? `${img_500}${curElem.poster_path}`
                        : unavailable
                    }
                  >
                  </img>
                  <div className="time" >
                      {hours}hr:
                      {minutes}min:
                      {remainingSeconds}sec
                    </div>
                 </div>
                 

                  <div className="ContentModal__about">
                    <span className="ContentModal__title">
                      {curElem.name || curElem.title}
                    </span>
                    <div className="ContentModal__badge">
                      {props.gener &&
                        props.gener
                          .filter((h) => curElem.genre_ids.includes(h.id))
                          .map((p) => {
                            return (
                              <Chip
                                size="small"
                                sx={{
                                  "& .parent-class .css-1ohgopd-MuiChip-root": {
                                    marginRight: "8px",
                                    justifyContent: "space-between",
                                  },
                                  background: "#e0e0e0",
                                  color: "#000000DE",
                                  fontWeight: "bold",
                                  paddingRight: "2px",
                                }}
                                label={p.name}
                              />
                            );
                          })}
                    </div>
                    <span className="ContentModal__description">
                      {curElem.overview}
                    </span>
                    <div>
                      <Carousel actor={actor}/>
                    </div>
                    <Button
                      variant="contained"
                      startIcon={<EmojiObjectsOutlinedIcon />}
                      color="secondary"
                      onClick={()=>window.open( props.data.homepage)}
                    >
                     Know more
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </Modal>
    </>
  );
}
