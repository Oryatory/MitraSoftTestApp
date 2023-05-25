import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { GET_COMMENTS, SET_COMMENTS } from "../../redux/actions";
import Comments from "../comments/comments";
import { memo } from "react";

const Post = memo(({ id, body, title, comments }) => {
  const dispatch = useDispatch();

  const handleComments = (id) => {
    !comments
      ? dispatch({ type: GET_COMMENTS, payload: id })
      : dispatch({ type: SET_COMMENTS, payload: id });
  };

  return (
    <Card key={id} style={{ marginBottom: "1rem", color: "#000" }}>
      <div
        className="rounded-circle overflow-hidden  m-3 mb-0"
        style={{ width: "50px", height: "50px" }}
      >
        <Card.Img
          src="https://via.placeholder.com/150/66b7d2"
          alt="Avatar"
          className="w-100 object-fit-cover "
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary" onClick={() => handleComments(id)}>
          {comments ? "Hide Comments" : "Show Comments"}
        </Button>
        {comments ? <Comments comments={comments} /> : null}
      </Card.Body>
    </Card>
  );
});
export default Post;
