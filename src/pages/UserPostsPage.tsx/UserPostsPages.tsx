import { useParams } from "react-router-dom";
import PostsList from "../../components/postsList/PostsList";
import UserInfo from "../../components/userInfo/UserInfo";
import UserInfoPlaceholder from "../../components/userInfo/UserInfoPlaceholder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import { Container } from "react-bootstrap";

const UserPostsPages = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "user/fetchUser", payload: id });
  }, [dispatch]);

  const { user, userInfoIsLoading, userPostsError, userPostsIsLoading } =
    useSelector((store: RootState) => store?.userSlice);

  return (
    <>
      <SearchInput />
      <Container>
        {!userInfoIsLoading && user ? (
          <UserInfo user={user} />
        ) : (
          <UserInfoPlaceholder />
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
