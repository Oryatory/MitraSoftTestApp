import Post from "../post/Post";
import PostPlaceholder from "../post/PostPlaceholder";
import { PostProps } from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Row, Col, Button } from "react-bootstrap";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";
import { useState } from "react";
import { setDisplayedPosts } from "../../redux/reducers/displayedPostsSlice";

export interface PostListProps {
  posts: PostProps[];
  postsError: string;
  postsIsLoading: boolean;
  title: string;
}

const PostsList = ({
  posts,
  postsError,
  postsIsLoading,
  title,
}: PostListProps) => {
  const { displayedPosts } = useSelector(
    (store: RootState) => store?.displayedPostsSlice || {}
  );

  const dispatch = useDispatch();
  if (!posts && !postsIsLoading) {
    return postsError ? <h2>{postsError}</h2> : null;
  }
  const [isSortAscending, setIsSortAscending] = useState(false);
  const handleSort = () => {
    const sortedPosts = [...displayedPosts].sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    });
    if (isSortAscending) {
      sortedPosts.reverse();
    }
    setIsSortAscending(!isSortAscending);
    dispatch(setDisplayedPosts(sortedPosts));
  };

  posts = displayedPosts;
  return (
    <div style={{ maxWidth: "768px" }} className="m-auto">
      <Row>
        <Col>
          <h2 style={{ color: "#000" }}>{title}:</h2>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <Button
            variant="secondary"
            style={{
              height: "60%",
              width: "2.1rem",
              overflow: "visible",
              padding: "7px",
            }}
            className="d-flex justify-content-end align-items-center"
            onClick={() => handleSort()}
          >
            {!isSortAscending ? (
              <BsSortAlphaDown style={{ fontSize: "1.8rem" }} />
            ) : (
              <BsSortAlphaUpAlt style={{ fontSize: "1.8rem" }} />
            )}
          </Button>
        </Col>
      </Row>

      {postsIsLoading ? (
        Array(5)
          .fill(5)
          .map((_, index) => <PostPlaceholder key={index} />)
      ) : posts.length > 0 ? (
        posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })
      ) : (
        <p>The search has not lead to any results...</p>
      )}
    </div>
  );
};

export default PostsList;
