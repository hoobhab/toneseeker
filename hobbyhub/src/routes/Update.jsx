import { Outlet, Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

const Update = ({}) => {
  const { id } = useParams();
  const [currAdv, getAdv] = useState({});
  const [adv, setAdv] = useState({});

  useEffect(() => {
    // READ current adv from table
    const fetchAdv = async () => {
      const { data } = await supabase.from("Adventurers").select().eq("id", id);
      // set state of adv
      getAdv(data[0]);
      setAdv(currAdv);
    };
    fetchAdv();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdv((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateAdv = async (event) => {
    event.preventDefault();

    await supabase
      .from("Adventurers")
      .update({
        name: adv.name,
        race: adv.race,
        class: adv.class,
        level: adv.level,
        description: adv.description,
      })
      .eq("id", id);

    window.location = `/update/${id}`;
  };

  const deleteAdventurer = async (event) => {
    event.preventDefault();

    await supabase.from("Adventurers").delete().eq("id", id);

    window.location = "/";
  };

  return (
    <div className="update-page">
      <h2>Update Adventurer</h2>
      <div className="update-current-info">
        {currAdv ? (
          <div>
            <h3>{currAdv.name}</h3>
            <h4>
              {currAdv.race} {currAdv.class}
            </h4>
            <h5>Level: {currAdv.level}</h5>
          </div>
        ) : null}
      </div>
      <div className="update-form">
        <div>
          <form>
            <label for="name">Name</label> <br />
            <input type="text" id="name" name="name" onChange={handleChange} />
            <br />
            <br />
            <label for="race">Race</label>
            <br />
            <input type="text" id="race" name="race" onChange={handleChange} />
            <br />
            <br />
            <label for="level">Level</label>
            <br />
            <input
              type="number"
              id="level"
              name="level"
              min="1"
              max="20"
              onChange={handleChange}
            />
            <br />
            <br />
            <fieldset>
              <legend>Class:</legend>

              <div>
                <input
                  type="radio"
                  id="class"
                  name="class"
                  value="Rogue"
                  onChange={handleChange}
                />
                <label for="Rogue">Rogue</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="class"
                  name="class"
                  value="Cleric"
                  onChange={handleChange}
                />
                <label for="Cleric">Cleric</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="class"
                  name="class"
                  value="Warlock"
                  onChange={handleChange}
                />
                <label for="Warlock">Warlock</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Druid"
                  name="class"
                  value="Druid"
                  onChange={handleChange}
                />
                <label for="Druid">Druid</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Barbarian"
                  name="class"
                  value="Barbarian"
                  onChange={handleChange}
                />
                <label for="Barbarian">Barbarian</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Artificer"
                  name="class"
                  value="Artificer"
                  onChange={handleChange}
                />
                <label for="Artificer">Artificer</label>
              </div>
            </fieldset>
            <br />
            <label for="description">Description</label>
            <br />
            <textarea
              rows="5"
              cols="100"
              id="description"
              name="description"
              defaultValue={currAdv.description}
              onChange={handleChange}
            ></textarea>
            <br />
            <input type="submit" value="Submit Update" onClick={updateAdv} />
            <button className="deleteButton" onClick={deleteAdventurer}>
              Delete Adventurer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
