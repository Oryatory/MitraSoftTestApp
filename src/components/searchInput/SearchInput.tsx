import { setSearchTerm } from "../../redux/reducers/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { setPosts } from "../../redux/reducers/postsSlice";
import { RootState } from "../../redux/store";

const SearchInput = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store: RootState) => store?.postsSlice);
  const { searchTerm } = useSelector((store: RootState) => store?.searchSlice);
  const handleSearch = () => {
    dispatch(
      setPosts(
        posts.filter((post) => post.title.includes(searchTerm.toLowerCase()))
      )
    );
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    dispatch(setSearchTerm(""));
  };

  return (
    <Container>
      <div
        className="input-group mb-3 m-auto align-items-center"
        style={{ color: "black", maxWidth: "768px" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: "4.5rem",
              zIndex: "10",
              color: "grey",
            }}
            onClick={handleClearSearch}
          >
            <FaTimes />
          </button>
        )}
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </Container>
  );
};

export default SearchInput;
