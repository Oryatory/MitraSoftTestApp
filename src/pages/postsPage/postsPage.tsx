import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import PostsList from "../../components/postsList/PostsList";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import SearchInput from "../../components/searchInput/SearchInput";

const PostsPage = () => {
  const { posts, postsError, postsIsLoading } = useSelector(
    (store: RootState) => store?.postsSlice || {}
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "posts/fetchPosts" });
  }, [dispatch]);

  return (
    <>
      <SearchInput />
      <Container>
        <PostsList
          posts={posts}
          postsError={postsError}
          postsIsLoading={postsIsLoading}
          title={"All Posts"}
        />
      </Container>
    </>
  );
};

export default PostsPage;
