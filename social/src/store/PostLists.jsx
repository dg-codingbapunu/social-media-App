import React, { createContext, useReducer } from "react";

// Create the context
export const PostLists = createContext({
  postLists: [],
  addPost: () => {},
  deletePost: () => {},
});
// Reducer function for managing post lists
const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...currentPostList, action.payload];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);
    default:
      return currentPostList;
  }
};

// Default post list data
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Hyderabad",
    body: "Hi Friends, I am going to Hyderabad for my vacation.",
    reactions: " 👍 56",
    userId: "user_90",
    tags: ["#vacations", "#Hyderabad", "#Enjoy"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "2 saal ke masti ke baad bhi MCA pass ho gaya.",
    reactions: " 👍 107",
    userId: "user_2",
    tags: ["#MCA", "#pass", "#enjoy"],
  },
];

// Context provider component
const PostListsProvider = ({ children }) => {
  // Initialize state using useReducer
  const [postLists, dispatchPostLists] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  // Function to add a new post
  const addPost = (newPost) => {
    dispatchPostLists({ type: "ADD_POST", payload: newPost });
  };

  // Function to delete a post
  const deletePost = (postId) => {
    dispatchPostLists({ type: "DELETE_POST", payload: postId });
  };

  return (
    <PostLists.Provider value={{ postLists, addPost, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

export default PostListsProvider;
