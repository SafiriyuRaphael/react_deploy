import React from "react";
import { useEffect} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreState, useStoreActions } from "easy-peasy";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  
  
  
   const editPostTitle = useStoreState((state) => state.editPostTitle);
   const editPostBody = useStoreState((state) => state.editPostBody);
 
   const editPost = useStoreActions((actions) => actions.editPost);
   const setEditPostTitle = useStoreActions((actions) => actions.setEditPostTitle);
   const setEditPostBody = useStoreActions((actions) => actions.setEditPostBody);
   
   const getPostById = useStoreState((state) => state.getPostById);

   const post= getPostById(id)

  const handleEdit = (id) => {
    if (!editPostTitle||!editPostBody) return;

    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id,
      title: editPostTitle,
      datetime,
      body: editPostBody,
    };
    editPost(updatedPost)
    navigate(`/post/${id}`)
  };


  useEffect(() => {
    if (post) {
      setEditPostBody(post.body);
      setEditPostTitle(post.title);
    }
  }, [post, setEditPostTitle, setEditPostBody]);
  return (
    <main className="flex flex-col p-3 dark:bg-gray-800 dark:text-white flex-grow">
      {editPostTitle && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editPostTitle}
              onChange={(e) => setEditPostTitle(e.target.value)}
              className="h-12 mb-5"
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editPostBody}
              onChange={(e) => setEditPostBody(e.target.value)}
              className="h-24 mb-5"
            />
            <button
              type="button"
              className="h-10 rounded-2xl cursor-pointer"
              onClick={() => handleEdit(id)}
            >
              Submit
            </button>
          </form>
        </>
      )}
      {!editPostTitle && (
        <div className="grid place-content-center flex-grow gap-4 text-3xl text-center">
          <h2>Page Not Found</h2>
          <p>Well, that's dissapointing</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </div>
      )}
    </main>
  );
};

export default EditPost;
