import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResult = useStoreActions((actions) => actions.setSearchResult);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredResults.reverse());
  }, [posts, search, setSearchResult]);

  return (
    <nav className="bg-black pt-3 md:flex md:items-center md:justify-between md:px -10 sticky top-0">
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="sr-only" htmlFor="search">
          Search Posts
        </label>
        <input
          className="w-[80%] h-10 ml-2 md:w-[25rem] m-2"
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="flex gap-6 list-none md:text-2xl">
        <li>
          <Link
            to="/"
            className="visited:text-white hover:text-black
          hover:bg-white
          active:bg-white
          active:text-black
          "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/post"
            className="visited:text-white
          hover:text-black 
           hover:bg-white
          active:bg-white
          active:text-black"
          >
            Post
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="visited:text-white
          hover:text-black 
           hover:bg-white
          active:bg-white
          active:text-black"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
