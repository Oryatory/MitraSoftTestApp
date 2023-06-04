import Post from "../post/Post";
import PostPlaceholder from "../post/PostPlaceholder";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Row, Col } from "react-bootstrap";
import Pagination from "../pagination/Pagination";
import AlphabetSortBtn from "../buttons/AlphabetSortBtn";

export interface PostListProps {
  postsError: string;
  postsIsLoading: boolean;
  title: string;
}

const PostsList = ({ postsError, postsIsLoading, title }: PostListProps) => {
  const { displayedPosts } = useSelector(
    (store: RootState) => store?.displayedPostsSlice || {}
  );

  const { currentPage, itemsPerPage } = useSelector(
    (store: RootState) => store?.paginationSlice || {}
  );

  if (displayedPosts.length === 0 && !postsIsLoading) {
    return postsError ? (
      <p>{postsError}</p>
    ) : (
      <p>The search has not lead to any results...</p>
    );
  }

  const totalPages = Math.ceil(displayedPosts.length / itemsPerPage);
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = displayedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div style={{ maxWidth: "768px" }} className="m-auto ">
      {totalPages > 1 && !postsIsLoading && (
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      )}
      <Row>
        <Col>
          <h2 style={{ color: "#000" }}>{title}:</h2>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <AlphabetSortBtn />
        </Col>
      </Row>

      {postsIsLoading
        ? Array(5)
            .fill(5)
            .map((_, index) => <PostPlaceholder key={index} />)
        : currentPosts.length > 0 &&
          currentPosts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
    </div>
  );
};

export default PostsList;
