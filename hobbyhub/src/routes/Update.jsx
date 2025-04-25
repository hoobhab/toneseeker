import { Outlet, Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

const Update = ({}) => {
  const { id } = useParams();
  const [currPost, getPost] = useState({});
  const [post, setPost] = useState({});

  useEffect(() => {
    // READ current post from table
    const fetchPost = async () => {
      const { data } = await supabase.from("Posts").select().eq("id", id);
      // set state of post
      getPost(data[0]);
      setPost(currPost);
    };
    fetchPost();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({
        title: post.title,
        description: post.description,
        image: post.image
      })
      .eq("id", id);

    window.location = `/update/${id}`;
  };

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("Posts").delete().eq("id", id);

    window.location = "/";
  };

  return (
    <div className="update-page">
      <h2>Update Post</h2>
      <div className="update-current-info">
        {currPost ? (
          <div>
          <div className="detail-header">
          <h2>{currPost.title}</h2>
          </div>
          <p className="description">
            {currPost.description}
          </p>
          <p className="image">
            <img src={currPost.image} />
          </p>
          </div>
        ) : null}
      </div>
      <div className="update-form">
        <div>
          <form>
            <label for="title">Title</label> <br />
            <input 
            type="text" 
            id="title" 
            name="title" 
            onChange={handleChange} 
            defaultValue={currPost.title}
            />
            <br />
            <br />
            <label for="description">Description</label>
            <br />
            <textarea
              rows="5"
              cols="100"
              id="description"
              name="description"
              defaultValue={currPost.description}
              onChange={handleChange}
            ></textarea>
            <br />
            <label for="image">Image</label> <br />
            <input type="text" id="image" name="image" onChange={handleChange} />
            <br />
            <br />
            <input type="submit" value="Submit Update" onClick={updatePost} />
            <button className="deleteButton" onClick={deletePost}>
              Delete Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
