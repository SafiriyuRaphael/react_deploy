import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreState, useStoreActions } from "easy-peasy";

const NewPost = () => {
  const navigate = useNavigate();
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postTitle || !postBody) {
      return;
    }
    const id = posts.length ? (parseInt(posts[posts.length - 1].id) + 1).toString() : "1";
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    savePost(newPost);
    navigate("/");
  };

  return (
    <main className="flex flex-col p-3 dark:bg-gray-800 dark:text-white flex-grow">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="h-12 mb-5"
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          className="h-24 mb-5"
        />
        <button type="submit" className="h-10 rounded-2xl">
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
