import {
  Button,
  Card,
  Row,
  Col,
  Placeholder,
  ListGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteComments } from "../../redux/reducers/commentsSlice";
import Comments from "../comments/Сomments";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { memo } from "react";

export type PostProps = {
  id: number;
  body: string;
  title: string;
  userId: number;
};

const Post = ({ id, body, title, userId }: PostProps) => {
  const dispatch = useDispatch();

  const { comments, commentsIsLoading } = useSelector(
    (store: RootState) => store?.commentsSlice?.comments?.[id - 1] || {}
  );

  const handleComments = useCallback(() => {
    if (!comments) {
      dispatch({ type: "comments/fetchComments", payload: id });
    } else dispatch(deleteComments(id - 1));
  }, [comments, dispatch, id]);

  return (
    <Card style={{ marginBottom: "1rem", color: "#000" }}>
      <Link to={`/users/${userId}`}>
        <div
          className="rounded-circle overflow-hidden  m-3 mb-0"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
        >
          <Card.Img
            src="https://via.placeholder.com/150/66b7d2"
            alt="Avatar"
            className="w-100 object-fit-cover "
          />
        </div>
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Row>
          <Col>
            <Button
              variant="primary"
              className="float-end"
              onClick={handleComments}
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
                .fill(7)
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
export default memo(Post);
