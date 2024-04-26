import { createContext, useReducer } from "react";
const PostLists = createContext({
  postLists: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListsProvider = ({ children }) => {
  const [postLists, dispatchPostLists] = useReducer();

  return <PostLists.Provider value={[]}>{children}</PostLists.Provider>;
};
export default PostListsProvider;
