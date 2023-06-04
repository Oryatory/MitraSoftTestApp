import { useParams } from "react-router-dom";
import PostsList from "../../components/postsList/PostsList";
import UserInfo from "../../components/userInfo/UserInfo";
import UserInfoPlaceholder from "../../components/userInfo/UserInfoPlaceholder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import { Container } from "react-bootstrap";
import { setCurrentPage } from "../../redux/reducers/paginationSlice";
import BackToAllPostsBtn from "../../components/buttons/BackToAllPostsBtn";
import { setSearchTerm } from "../../redux/reducers/searchSlice";
import { setIsSorted } from "../../redux/reducers/displayedPostsSlice";

const UserPostsPages = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "user/fetchUser", payload: id });
    dispatch(setCurrentPage(1));
    dispatch(setIsSorted(false));
    dispatch(setSearchTerm(""));
  }, [dispatch]);

  const {
    user,
    userInfoIsLoading,
    userInfoError,
    userPostsError,
    userPostsIsLoading,
  } = useSelector((store: RootState) => store?.userSlice);

  return (
    <>
      <SearchInput />
      <Container>
        {userInfoIsLoading ? (
          <UserInfoPlaceholder />
        ) : user ? (
          <UserInfo user={user} />
        ) : (
          <div
            className="d-flex flex-nowrap justify-content-between"
            style={{ flexDirection: "row" }}
          >
            <p>{userInfoError}</p>

            <BackToAllPostsBtn />
          </div>
        )}
        <PostsList
          postsError={userPostsError}
          postsIsLoading={userPostsIsLoading}
          title={"User Posts"}
        />
      </Container>
    </>
  );
};
export default UserPostsPages;
