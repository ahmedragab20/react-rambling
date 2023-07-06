export default ({ post }) => {
  if (!post) return null;

  return (
    <div>
      <div className="d-flex gap-1">
        <div>
          <h5 className="badge bg-light text-black">{post.id}</h5>
        </div>
        <h4>{post.title}</h4>
      </div>
      <small className="text-muted">{post.body}</small>

      <hr />
    </div>
  );
}
