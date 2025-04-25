import React from "react";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import more from "../assets/more.png";

const Card = (props) => {
  return (
    <div className="Card">
      <Link to={"update/" + props.id}>
        <button className="edit-button">Edit</button>
      </Link>
      <Link style={{ color: "black"}} to={"details/" + props.id}>
      <h2 className="title">{props.title}
        {props.image ?
          <div className="photo-icon">📷</div>
          : null}</h2>
      </Link>
      <div className="post-created-at">
        {props.created_at}
      </div>
      <br></br>
      <div className="upvote-button">
        ⬆️  {props.upvotes}
      </div>
    </div>
  );
};

export default Card;
