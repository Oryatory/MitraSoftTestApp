import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackToAllPostsBtn = () => {
  return (
    <Link to="/">
      <Button>Back to all posts</Button>
    </Link>
  );
};
export default BackToAllPostsBtn;
