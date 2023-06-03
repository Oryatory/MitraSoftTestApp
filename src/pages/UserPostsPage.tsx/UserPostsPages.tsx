import { useParams } from "react-router-dom";
import PostsList from "../../components/postsList/PostsList";
import UserInfo from "../../components/userInfo/UserInfo";
import UserInfoPlaceholder from "../../components/userInfo/UserInfoPlaceholder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import { Container, Row, Col } from "react-bootstrap";
import { setCurrentPage } from "../../redux/reducers/paginationSlice";
import BackToAllPostsBtn from "../../components/buttons/BackToAllPostsBtn";
import { setSearchTerm } from "../../redux/reducers/searchSlice";

const UserPostsPages = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "user/fetchUser", payload: id });
    dispatch(setCurrentPage(1));
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
          <Row
            style={{ maxWidth: "768px" }}
            className="display-flex justify-space-between"
          >
            <Col>
              <p>{userInfoError}</p>
            </Col>
            <Col className="d-flex justify-content-end">
              <BackToAllPostsBtn />
            </Col>
          </Row>
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
