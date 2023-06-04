import { Button } from "react-bootstrap";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";
import {
  setDisplayedPosts,
  setIsSortAscending,
  setIsSorted,
} from "../../redux/reducers/displayedPostsSlice";
import alphabetSort from "../../filters/alphabetSort";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const AlphabetSortBtn = () => {
  const dispatch = useDispatch();
  const { displayedPosts, isSortAscending } = useSelector(
    (store: RootState) => store?.displayedPostsSlice || {}
  );
  return (
    <Button
      variant="secondary"
      style={{
        height: "60%",
        width: "2.1rem",
        overflow: "visible",
        padding: "7px",
      }}
      className="d-flex justify-content-end align-items-center"
      onClick={() => {
        dispatch(setIsSorted(true));
        dispatch(
          setDisplayedPosts(alphabetSort(displayedPosts, isSortAscending))
        );
        dispatch(setIsSortAscending());
      }}
    >
      {!isSortAscending ? (
        <BsSortAlphaDown style={{ fontSize: "1.8rem" }} />
      ) : (
        <BsSortAlphaUpAlt style={{ fontSize: "1.8rem" }} />
      )}
    </Button>
  );
};
export default AlphabetSortBtn;
