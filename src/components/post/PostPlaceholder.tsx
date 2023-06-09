import { Card, Placeholder } from "react-bootstrap";

const PostPlaceholder = () => {
  return (
    <Card style={{ marginBottom: "1rem", color: "#000" }}>
      <Placeholder
        as="img"
        variant="secondary"
        className="rounded-circle m-3 mb-0 "
        style={{ width: "50px", height: "50px", padding: "0" }}
      />

      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} className="w-100" animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button
          variant="secondary"
          className={"float-end"}
          xs={3}
        />
      </Card.Body>
    </Card>
  );
};
export default PostPlaceholder;
