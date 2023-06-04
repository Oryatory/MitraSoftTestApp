import { ListGroup, Placeholder } from "react-bootstrap";
import { CommentData } from "../../redux/reducers/commentsSlice";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface CommentsProps {
  id: number;
}

const Comments = ({ id }: CommentsProps) => {
  const { comments, commentsIsLoading, commentsError } = useSelector(
    (store: RootState) => store?.commentsSlice?.allComments?.[id] || {}
  );
  return comments && !commentsIsLoading ? (
    <ListGroup className="mt-3">
      {comments.map((comment: CommentData) => (
        <ListGroup.Item key={comment.id}>
          <strong>{comment.email}</strong>
          <p>{comment.body}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
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
  ) : commentsError !== "" ? (
    <p>{commentsError}</p>
  ) : null;
};
export default Comments;
