import Post from "../post/Post";
import PostPlaceholder from "../post/PostPlaceholder";
import { memo } from "react";
import { PostProps } from "../post/Post";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface PostListProps {
  posts: PostProps[];
  postsError: string;
  postsIsLoading: boolean;
  title: string;
}

const PostsList = memo(
  ({ posts, postsError, postsIsLoading, title }: PostListProps) => {
    if (!posts && !postsIsLoading) {
      return postsError ? <h2>{postsError}</h2> : null;
    }
    // const { search } = useSelector((store: RootState) => store?.searchSlice);

    return (
      <div style={{ maxWidth: "768px" }} className="m-auto">
        <h2 style={{ color: "#000" }}>{title}:</h2>
        {postsIsLoading
          ? Array(5)
              .fill(5)
              .map((_, index) => <PostPlaceholder key={index} />)
          : posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
      </div>
    );
  }
);

export default PostsList;
