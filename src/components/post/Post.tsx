import { Button, Card, Row, Col } from "react-bootstrap";
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
    (store: RootState) => store?.commentsSlice?.allComments?.[id] || {}
  );

  const handleComments = useCallback(() => {
    if (!comments) {
      dispatch({ type: "comments/fetchComments", payload: id });
    } else dispatch(deleteComments(id));
  }, [comments, dispatch, id]);

  const MemoizedCardText = memo(Card.Text);
  const MemoizedCardImg = memo(Card.Img);
  const MemoizedCardBody = memo(Card.Body);
  const MemoizedCardTitle = memo(Card.Title);

  return (
    <Card style={{ marginBottom: "1rem", color: "#000" }}>
      <Link to={`/users/${userId}`}>
        <div
          className="rounded-circle overflow-hidden  m-3 mb-0"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
        >
          <MemoizedCardImg
            src="https://via.placeholder.com/150/66b7d2"
            alt="Avatar"
            className="w-100 object-fit-cover "
          />
        </div>
      </Link>
      <MemoizedCardBody>
        <MemoizedCardTitle>{title}</MemoizedCardTitle>
        <MemoizedCardText>{body}</MemoizedCardText>
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

        <Comments id={id} />
      </MemoizedCardBody>
    </Card>
  );
};
export default memo(Post);
