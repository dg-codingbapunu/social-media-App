import { MdDelete } from "react-icons/md";

const Posts = ({ posts }) => {
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {posts.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{posts.body}</p>
        {posts.tags.map((tag) => (
          <span className="badge text-bg-primary hasthag">{tag}</span>
        ))}
        <span className="badge text-bg-success ">{posts.reactions}</span>
      </div>
    </div>
  );
};
export default Posts;
