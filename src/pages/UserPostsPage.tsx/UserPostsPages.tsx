import { useParams } from "react-router-dom";
import PostsList from "../../components/postsList/PostsList";
import UserInfo from "../../components/userInfo/UserInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

const UserPostsPages = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "user/fetchUser", payload: id });
  }, [dispatch]);

  const { user, userPosts, userPostsError, userPostsIsLoading } = useSelector(
    (store: RootState) => store?.userSlice
  );

  return (
    <Container>
      {user ? <UserInfo user={user} /> : null}
      <PostsList
        posts={userPosts}
        postsError={userPostsError}
        postsIsLoading={userPostsIsLoading}
        title={"User Posts"}
      />
    </Container>
  );
};
export default UserPostsPages;
