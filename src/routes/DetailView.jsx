import { Outlet, Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";

const DetailView = ({}) => {
  const { id } = useParams();
  const [post, getPost] = useState({});
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [currComments, getComments] = useState([]);
  const [newComment, setNewComment] = useState({
    comment: null,
  });

  useEffect(() => {
    // READ selected post from table
    const fetchPost = async () => {
      const { data } = await supabase.from("Posts").select().eq("id", id);
      // set state of post
      getPost(data[0]);
      setUpvoteCount(data[0].upvotes);
      getComments(data[0].comments);
    };
    fetchPost();
  }, [id]);

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("Posts").delete().eq("id", id);

    window.location = "/";
  };

  const updateCount = (e) => {
    setUpvoteCount(upvoteCount + 1);
    incrementUpvotes(e);
  };

  const incrementUpvotes = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({
        upvotes: upvoteCount + 1,
      })
      .eq("id", id);
  };

  const handleComment = (event) => {
    const { name, value } = event.target;
    setNewComment((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitComment = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({
        comments: newComment.comment,
      })
      .eq("id", id);

    window.location = `/details/${id}`;
  };

  return (
    <div>
      <div className="detail-page">
        <div className="detail-header">
          <h2>{post.title}</h2>
        </div>
        <p className="description">{post.description}</p>
        <p className="detail-image">
          <img src={post.image} />
        </p>
        <div className="detail-upvotes">
          <button
            className="detail-upvotes-button"
            onClick={(e) => {
              updateCount(e);
            }}
          >
            {upvoteCount}⬆️
          </button>
        </div>
        <div className="detail-option-buttons">
          <button className="detail-update">
            <Link to={"/" + "update/" + id}>Update post</Link>
          </button>
          <button className="detail-delete" onClick={deletePost}>
            Delete Post
          </button>
        </div>
      </div>
      <div className="comment-box">
        <textarea
          rows="10"
          cols="100"
          id="comment"
          name="comment"
          placeholder="Write your comment here"
          onChange={handleComment}
        ></textarea>
        <button className="submit-comment" onClick={submitComment}>
          Submit comment
        </button>
      </div>
    </div>
  );
};
export default DetailView;
