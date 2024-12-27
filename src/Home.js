import React from "react";
import Feed from "./Feed";
import Loader from "./Loader";
import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
  const  searchResult  = useStoreState((state) => state.searchResult);
  return (
    <main className="dark:bg-gray-800 dark:text-white flex-grow">
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        (searchResult.length ? (
          <Feed posts={searchResult} />
        ) : (
          <p className="mt-2">No posts to display</p>
        ))}
    </main>
  );
};

export default Home;
