import { Outlet, Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

const DetailView = ({ }) => {
  const { id } = useParams();
  const [post, getPost] = useState({});
  const [upvoteCount, setUpvoteCount] = useState(0)

  useEffect(() => {
    // READ selected post from table
    const fetchPost = async () => {
      const { data } = await supabase.from("Posts").select().eq("id", id);
      // set state of post
      getPost(data[0]);
      setUpvoteCount(data[0].upvotes)
    };
    fetchPost();
  }, [id]);

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("Posts").delete().eq("id", id);

    window.location = "/";
  };

  const updateCount = (e) => {
    setUpvoteCount(upvoteCount + 1)
    incrementUpvotes(e)
  }

  const incrementUpvotes = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({
        upvotes: (upvoteCount + 1)
      })
      .eq("id", id)

  }

  return (
    <div className="detail-page">
      <div className="detail-header">
      <h2>{post.title}</h2>
      </div>
      <p className="description">
        {post.description}
      </p>
      <p className="detail-image">
        <img src={post.image} />
      </p>
      <div className="detail-upvotes">
        <button className="detail-upvotes-button" onClick={
          (e) => {
            updateCount(e);
          }}>
          {upvoteCount}⬆️
        </button>
      </div>
      <button className="detail-update">
        <Link to={"/" + "update/" + id}>Update post</Link>
      </button>
      <button className="detail-delete" onClick={deletePost}>
        Delete Post
      </button>
    </div>
  );
};
export default DetailView;
