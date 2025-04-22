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
      <h2 className="title">{props.title}</h2>
      <Link to={"details/" + props.id}>
        <div className="spyglass">🔎</div>
      </Link>
      <p className="description">{props.description}</p>
      {props.image ?
      <p className="image">
        <img 
        src={props.image}
        />
      </p>
      : null}
    </div>
  );
};

export default Card;
