import { Card, Placeholder, Row, Col } from "react-bootstrap";

const UserInfoPlaceholder = () => {
  return (
    <Card
      style={{
        color: "#000",
        maxWidth: "768px",
      }}
      className="m-auto mb-5"
    >
      <Row>
        <Col>
          <Placeholder
            as="img"
            variant="secondary"
            className="rounded-circle m-3 mb-0 "
            style={{ width: "50px", height: "50px", padding: "0" }}
          />
        </Col>
        <Col>
          <Placeholder.Button
            variant="secondary"
            className={"float-end m-3"}
            xs={3}
          />
        </Col>
      </Row>

      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Row>
          <Col>
            <Placeholder as={Card.Text} className="w-100" animation="glow">
              <Placeholder xs={9} />
              <Placeholder xs={8} />
              <Placeholder xs={7} />
              <Placeholder xs={6} />
              <Placeholder xs={5} />
              <Placeholder xs={4} />
            </Placeholder>
          </Col>
          <Col>
            <Placeholder as={Card.Text} className="w-100" animation="glow">
              <Placeholder xs={9} />
              <Placeholder xs={8} />
              <Placeholder xs={7} />
              <Placeholder xs={6} />
              <Placeholder xs={5} />
              <Placeholder xs={4} />
            </Placeholder>
          </Col>
        </Row>

        {/* <Placeholder as={Card.Text} className="w-100" animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button
          variant="secondary"
          className={"float-end"}
          xs={3}
        /> */}
      </Card.Body>
    </Card>
  );
};
export default UserInfoPlaceholder;
