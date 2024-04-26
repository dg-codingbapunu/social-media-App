import React, { useContext } from "react";
import { PostLists } from "../store/PostLists";
import Posts from "./Posts";

const PostList = () => {
  const { postLists } = useContext(PostLists);

  return (
    <>
      {postLists.map((posts) => (
        <Posts key={posts.id} posts={posts} />
      ))}
    </>
  );
};

export default PostList;
