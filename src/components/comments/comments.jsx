import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Placeholder } from "react-bootstrap";
import { useSelector } from "react-redux";

const Comments = ({ comments }) => {
  const { commentsIsLoading } = useSelector((store) => store?.loadingReducer);

  return !commentsIsLoading ? (
    <ListGroup className="mt-3">
      {comments.map((comment) => (
        <ListGroup.Item key={comment.id}>
          <strong>{comment.email}</strong>
          <p>{comment.body}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  ) : (
    <Placeholder as={ListGroup} className="mt-3" animation="glow">
      <div className="row">
        {Array(7)
          .fill()
          .map((_, index) => (
            <div className={`col-${index + 3}`} key={index}>
              <Placeholder
                className="mb-3 col-2"
                style={{ height: "20px", width: "100%" }}
                as={ListGroup.Item}
              />
            </div>
          ))}
      </div>
    </Placeholder>
  );
};
export default Comments;
