import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const handleDelete = () => {
    deletePost(id);
    navigate("/");
  };

  return (
    <main className="dark:bg-gray-800 dark:text-white flex-grow">
      <article className="flex flex-col gap-3 ml-3 mt-6">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <div>
              <Link to={`/edit/${id}`} className="p-0">
                <button className="w-20 h-8 bg-black rounded text-white cursor-pointer">
                  Edit Post
                </button>
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className="w-20 h-8 bg-red-500 rounded text-white ml-2 cursor-pointer"
              >
                Delete Post
              </button>
            </div>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's dissapointing</p>
            <Link to="/">Visit Our Homepage</Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
