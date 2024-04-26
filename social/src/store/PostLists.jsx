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
  const [postLists, dispatchPostLists] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostLists.Provider value={(postLists, deletePost, addPost)}>
      {children}
    </PostLists.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Hyderabad",
    body: "Hi Freinds, iam going to Hyderabad for my vacation,",
    reactions: "1000",
    userId: "user_90",
    tags: ["vacations", "Hyderabad", "Enjoy"],
  },
  {
    id: "2",
    title: "pass ho bhai",
    body: "2 sal ke masti ke baad bhi mca pass ho gaya",
    reactions: "1000",
    userId: "user_2",
    tags: ["mca", "pass", "enjoy"],
  },
];

export default PostListsProvider;
