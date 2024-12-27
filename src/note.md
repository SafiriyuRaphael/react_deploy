   try {
      const response = await api.put(`./posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditPostBody("");
      setEditPostTitle("");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }





    import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreState, useStoreActions } from "easy-peasy";

const NewPost = () => {
  const {setPosts, posts}= useContext(DataContext)
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate= useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!postTitle || !postBody) {
        return;
      }
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const newPost = { id, title: postTitle, datetime, body: postBody };
      try {
        const response = await api.post("/posts", newPost);
        const allPost = [...posts, response.data];
        setPosts(allPost);
        setPostBody("");
        setPostTitle("");
        navigate("/");
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
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
        <button type="submit"
        className="h-10 rounded-2xl">Submit</button>
      </form>
    </main>
  );
};


  try {
        const response = await api.post("/posts", newPost);
        const allPost = [...posts, response.data];
        setPosts(allPost);
        setPostBody("");
        setPostTitle("");
        navigate("/");
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }

export default NewPost;


import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  /*  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchPosts();
  }, []); */

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredResults.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResult,

        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

