import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostLists } from "../store/PostLists";

const Posts = ({ posts }) => {
  const { deletePost } = useContext(PostLists);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {posts.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(posts.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{posts.body}</p>
        {posts.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hasthag">
            {tag}
          </span>
        ))}
        <span className="badge text-bg-success ">{posts.reactions}</span>
      </div>
    </div>
  );
};
export default Posts;
