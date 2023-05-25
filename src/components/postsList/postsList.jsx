import { useSelector } from "react-redux";
import Post from "../post/post";
import PostLoading from "../post/postLoading";

const PostsList = () => {
  const { postsIsLoading } = useSelector((store) => store?.loadingReducer);
  const { posts } = useSelector((store) => store?.postsReducer || {});
  const { postsError: error } = useSelector(
    (store) => store?.errorsReducer || {}
  );
  if (!posts && !postsIsLoading) {
    return error ? <h2>{error}</h2> : null;
  }

  return (
    <div style={{ maxWidth: "768px" }} className="m-auto">
      <h2 style={{ color: "#000" }}>All Posts:</h2>
      {postsIsLoading
        ? Array(5)
            .fill()
            .map((_, index) => <PostLoading key={index} />)
        : posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
    </div>
  );
};

export default PostsList;
