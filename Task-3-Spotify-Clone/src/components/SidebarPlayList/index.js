import React from "react";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./style.css";

function PlayLists() {
  return (
    <div className="sidebar__playlist__container">
      <p className="playlist__title">Playlists</p>
      <div className="playlist__row">
        <AddIcon className="playlist__row__icon" />
        <span className="playlist__row__label">Create playlist</span>
      </div>
      <div className="playlist__row">
        <FavoriteIcon className="playlist__row__icon--favorite" />
        <span className="playlist__row__label">Liked songs</span>
      </div>
      <hr style={{ width: 180, backgroundColor: "grey" }} />
      <p style={{ fontFamily: "Spotify Bold", color: "#999" }} className="pt-3">
        Schedule 🔥
      </p>
      <p style={{ fontFamily: "Spotify Bold", color: "#999" }} className="pt-3">
        Traveling... 🚕{" "}
      </p>
      <p style={{ fontFamily: "Spotify Bold", color: "#999" }} className="pt-3">
        Bored 😲{" "}
      </p>
      <br />
    </div>
  );
}

export default PlayLists;
