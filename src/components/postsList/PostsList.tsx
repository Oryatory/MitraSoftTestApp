import Post from "../post/Post";
import PostPlaceholder from "../post/PostPlaceholder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Row, Col, Button } from "react-bootstrap";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";
import { useState } from "react";
import { setDisplayedPosts } from "../../redux/reducers/displayedPostsSlice";
import { setCurrentPage } from "../../redux/reducers/paginationSlice";

export interface PostListProps {
  postsError: string;
  postsIsLoading: boolean;
  title: string;
}

const PostsList = ({ postsError, postsIsLoading, title }: PostListProps) => {
  const dispatch = useDispatch();

  const { displayedPosts } = useSelector(
    (store: RootState) => store?.displayedPostsSlice || {}
  );

  if (!displayedPosts && !postsIsLoading) {
    return postsError ? <h2>{postsError}</h2> : null;
  }

  const { currentPage, itemsPerPage } = useSelector(
    (store: RootState) => store?.paginationSlice || {}
  );

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

  const totalPages = Math.ceil(displayedPosts.length / itemsPerPage);
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = displayedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => dispatch(setCurrentPage(pageNumber));

  return (
    <div style={{ maxWidth: "768px" }} className="m-auto">
      {totalPages > 1 && !postsIsLoading && (
        <div className="pagination display-flex justify-content-center flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              variant="primary"
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      )}
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
      ) : currentPosts.length > 0 ? (
        currentPosts.map((post) => {
          return <Post key={post.id} {...post} />;
        })
      ) : (
        <p>The search has not lead to any results...</p>
      )}
    </div>
  );
};

export default PostsList;
