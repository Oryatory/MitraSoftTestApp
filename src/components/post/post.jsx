import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  Row,
  Col,
  Placeholder,
  ListGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_COMMENTS, SET_COMMENTS } from "../../redux/actions";
import Comments from "../comments/comments";

const Post = ({ id, body, title }) => {
  const dispatch = useDispatch();

  const { comments, commentsIsLoading } = useSelector(
    (store) => store?.commentsReducer?.[id - 1] || {}
  );
  const handleComments = (id) => {
    if (!comments) {
      dispatch({ type: GET_COMMENTS, payload: id });
    } else dispatch({ type: SET_COMMENTS, payload: id - 1 });
  };

  return (
    <Card style={{ marginBottom: "1rem", color: "#000" }}>
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
        <Row>
          <Col>
            <Button
              variant="primary"
              className="float-end"
              onClick={() => handleComments(id)}
            >
              {comments || commentsIsLoading
                ? "Hide Comments"
                : "Show Comments"}
            </Button>
          </Col>
        </Row>

        {comments && !commentsIsLoading ? (
          <Comments comments={comments} />
        ) : commentsIsLoading ? (
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
        ) : null}
      </Card.Body>
    </Card>
  );
};
export default Post;
