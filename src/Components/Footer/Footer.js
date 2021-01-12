import React from "react";
// import React, { useEffect, useState } from "react";
// import { useStateValue } from "./StateProvider";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img className = "footer-album-logo" src="" alt =""/>
    <div className ="song-info">
    <h4>Yeah...</h4>
    <p>Usher</p>

    </div>
      </div>
      <div className="footer-center">
        <ShuffleIcon className = "footer-green"/>
        <SkipPreviousIcon className ="footer-icon"/>
        <PlayCircleOutlineIcon fontSize = "large" className ="footer-icon"/>
        <SkipNextIcon className ="footer-icon"/>
        <RepeatIcon className ="footer-green"/>

      </div>
      <div className="footer-right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
