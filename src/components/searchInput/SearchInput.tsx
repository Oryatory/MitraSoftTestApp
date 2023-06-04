import { setSearchTerm } from "../../redux/reducers/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { RootState } from "../../redux/store";
import { useLocation } from "react-router-dom";
import { setDisplayedPosts } from "../../redux/reducers/displayedPostsSlice";
import { setCurrentPage } from "../../redux/reducers/paginationSlice";
import alphabetSort from "../../filters/alphabetSort";
import { memo } from "react";

const SearchInput = memo(() => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store: RootState) => store?.postsSlice);
  const { userPosts } = useSelector((store: RootState) => store?.userSlice);
  const { searchTerm } = useSelector((store: RootState) => store?.searchSlice);
  const { isSorted, isSortAscending } = useSelector(
    (store: RootState) => store?.displayedPostsSlice
  );
  const location = useLocation();

  const handleClearSearch = () => {
    dispatch(setDisplayedPosts(location.pathname === "/" ? posts : userPosts));
    dispatch(setSearchTerm(""));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    let newPosts =
      location.pathname === "/"
        ? posts.filter((post) => post.title.includes(searchTerm))
        : userPosts.filter((post) => post.title.includes(searchTerm));
    dispatch(setCurrentPage(1));
    newPosts = isSorted
      ? isSortAscending
        ? alphabetSort(newPosts, false)
        : alphabetSort(newPosts, true)
      : newPosts;
    dispatch(setDisplayedPosts(newPosts));
  };

  return (
    <Container>
      <div
        className="input-group mb-3 m-auto align-items-center"
        style={{ color: "black", maxWidth: "768px" }}
      >
        <input
          type="text"
          name="search-input"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            dispatch(setSearchTerm(e.target.value));
            handleSearch(e);
          }}
        />
        {searchTerm && (
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: "0.5rem",
              zIndex: "10",
              color: "grey",
            }}
            onClick={handleClearSearch}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </Container>
  );
});

export default SearchInput;
