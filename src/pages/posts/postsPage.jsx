import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_POSTS } from "../../redux/actions";
import PostsList from "../../components/postsList/postsList";
import { Container } from "react-bootstrap";

const PostsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_POSTS });
  }, [dispatch]);

  return (
    <Container>
      <PostsList />
    </Container>
  );
};

export default PostsPage;
