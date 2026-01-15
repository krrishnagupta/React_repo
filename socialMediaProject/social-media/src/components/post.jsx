import { RiDeleteBin6Fill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";

const Post = ({ post }) => {
  console.log("post.tags =", post.tags);
  const {deletePost} = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
           onClick={() => deletePost(post.id)}>
            <RiDeleteBin6Fill />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge mx-1 text-bg-primary">
            {tag}
          </span>
        ))}
        <div className="alert alert-info mt-3 mb-0" role="alert">
          Total reactions :
          <button type="button" className="btn pt-0 position-relative">
            <FcLike className="icon-size" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.reaction}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>

        </div>
      </div>
    </div>

  )
}

export default Post;