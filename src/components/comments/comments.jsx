import { ListGroup } from "react-bootstrap";

const Comments = ({ comments }) => {
  return (
    <ListGroup className="mt-3">
      {comments.map((comment) => (
        <ListGroup.Item key={comment.id}>
          <strong>{comment.email}</strong>
          <p>{comment.body}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default Comments;
