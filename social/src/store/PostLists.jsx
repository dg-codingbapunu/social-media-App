import { createContext, useReducer } from "react";
const PostLists = createContext({
  postLists: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  return currentPostList;
};

const PostListsProvider = ({ children }) => {
  const [postLists, dispatchPostLists] = useReducer(postListReducer, []);
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostLists.Provider value={(postLists, deletePost, addPost)}>
      {children}
    </PostLists.Provider>
  );
};
export default PostListsProvider;
