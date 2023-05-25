import { useSelector } from "react-redux";
import Post from "../post/post";
import PostLoading from "../post/postLoading";

const PostsList = ({ posts, title, error }) => {
  const { postsIsLoading } = useSelector((store) => store?.loadingReducer);

  if (!posts && !postsIsLoading) {
    return error ? <h2>{error}</h2> : null;
  }

  return (
    <div style={{ maxWidth: "768px" }} className="m-auto">
      <h2 style={{ color: "#000" }}>{`${title}:`}</h2>
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
