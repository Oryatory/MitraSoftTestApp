import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_POSTS } from "../../redux/actions";
import PostsList from "../../components/postsList/postsList";
import { Container } from "react-bootstrap";

const PostsPage = () => {
  const { posts } = useSelector((store) => store?.postsReducer || {});
  const { postsError } = useSelector((store) => store?.errorsReducer || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_POSTS });
  }, [dispatch]);

  return (
    <Container>
      <PostsList posts={posts} error={postsError} title="All Posts" />
    </Container>
  );
};

export default PostsPage;
