import Post from "../post/Post";
import PostPlaceholder from "../post/PostPlaceholder";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Pagination from "../pagination/Pagination";
import AlphabetSortBtn from "../buttons/AlphabetSortBtn";
import { useEffect } from "react";

export interface PostListProps {
  postsError: string;
  postsIsLoading: boolean;
  title: string;
}

const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

const PostsList = ({ postsError, postsIsLoading, title }: PostListProps) => {
  const { displayedPosts } = useSelector(
    (store: RootState) => store?.displayedPostsSlice || {}
  );
  const { searchTerm } = useSelector((store: RootState) => store?.searchSlice);
  const { currentPage, itemsPerPage } = useSelector(
    (store: RootState) => store?.paginationSlice || {}
  );

  useEffect(() => {
    const bodyStyles = document.body.style;
    bodyStyles.paddingRight =
      searchTerm === "" || displayedPosts.length < 1
        ? `${scrollbarWidth}px`
        : "0px";
  }, [searchTerm, displayedPosts]);

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
      <div
        className="d-flex justify-content-between flex-nowrap"
        style={{ flexDirection: "row" }}
      >
        <h2 style={{ color: "#000" }}>
          {searchTerm !== ""
            ? `${
                title === "User Posts" ? "User " : "All "
              }posts matching "${searchTerm}" request`
            : title}
          :
        </h2>
        <AlphabetSortBtn />
      </div>

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
