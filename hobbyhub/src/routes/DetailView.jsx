import { Outlet, Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

const DetailView = ({}) => {
  const { id } = useParams();
  const [adv, getAdv] = useState({});

  useEffect(() => {
    // READ selected adv from table
    const fetchAdv = async () => {
      const { data } = await supabase.from("Adventurers").select().eq("id", id);
      // set state of adv
      getAdv(data[0]);
    };
    fetchAdv();
  }, []);

  const deleteAdventurer = async (event) => {
    event.preventDefault();

    await supabase.from("Adventurers").delete().eq("id", id);

    window.location = "/";
  };

  return (
    <div className="detail-page">
      <h1>{adv.name}</h1>
      <p className="race">Race: {adv.race}</p>
      <p className="class">Class: {adv.class}</p>
      <p className="level">Level: {adv.level}</p>
      <p className="player">Player: {adv.player}</p>
      <div className="detail-description">
        <p className="description">{adv.description}</p>
      </div>
      <button className="detail-update">
        <Link to={"/" + "update/" + id}>Update Adventurer</Link>
      </button>
      <button className="detail-delete" onClick={deleteAdventurer}>
        Delete Adventurer
      </button>
    </div>
  );
};
export default DetailView;
