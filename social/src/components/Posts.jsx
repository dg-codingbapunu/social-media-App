const Posts = ({ posts }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {posts.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {posts.reactions}
          </span>
        </h5>
        <p className="card-text">{posts.body}</p>
        {posts.tags.map((tag) => (
          <span class="badge text-bg-primary hasthag">{tag}</span>
        ))}
      </div>
    </div>
  );
};
export default Posts;
