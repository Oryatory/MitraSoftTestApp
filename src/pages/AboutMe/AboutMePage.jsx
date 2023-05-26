import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <Container>
      <Row style={{ color: "#000", maxWidth: "768px" }} className="m-auto pb-3">
        <Col>
          <h2>About Me</h2>
        </Col>
        <Col>
          <Button variant="primary" className="float-end text-reset">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              {" "}
              Back to posts
            </Link>
          </Button>
        </Col>
      </Row>

      <Card style={{ color: "#000", maxWidth: "768px" }} className="m-auto p-5">
        <Row>
          <Col md={4} className="text-center">
            <div
              className="rounded-circle overflow-hidden mx-auto mb-3"
              style={{ width: "150px", height: "150px" }}
            >
              <Card.Img
                src="https://img.hhcdn.ru/photo/723406891.jpeg?t=1685126842&h=EREXAywN9wA8wY3HUtIJDA"
                className="w-100 h-100 object-fit-cover"
                alt="Profile"
              />
            </div>
            <Card.Title style={{ fontWeight: "700", fontSize: "1.5rem" }}>
              Ilia Larin
            </Card.Title>
          </Col>
          <Col md={8}>
            <Card.Text>
              Разрабатываю удобные, интерактивные, красивые пользовательские
              интерфейсы, уделяю внимание деталям и мелочам.
            </Card.Text>
            <Card.Text className="h4">Stack:</Card.Text>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>ReduxToolkit and ReduxSaga</li>
            </ul>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default AboutMePage;
