import { Outlet, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { supabase } from "../client";

const New = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    description: null,
    image: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .insert({
        title: newPost.title,
        description: newPost.description,
        image: newPost.image,
      })
      .select();

    window.location = "/";
  };

  return (
    <div className="New">
      <div className="new-header">
      <h2>Create new post</h2>
      </div>
      <form className="new-post">
        <div className="new-post-title">
        <label for="title">Post Title</label> <br />
        <input type="text" id="title" name="title" onChange={handleChange} />
        <br />
        </div>
        <label for="description"></label>
        <br />
        <textarea
          rows="10"
          cols="100"
          id="description"
          name="description"
          placeholder="Post text (optional)"
          onChange={handleChange}
        ></textarea>
        <br />
        <div className="image-text-box">
        <label for="image">Image (optional)</label> <br />
        <input type="text" id="image" name="image" onChange={handleChange} />
        <br />
        <br />
        </div>
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default New;
