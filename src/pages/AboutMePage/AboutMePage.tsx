import { Container, Card, Row, Col } from "react-bootstrap";
import BackToAllPostsBtn from "../../components/buttons/BackToAllPostsBtn";

const AboutMePage = () => {
  return (
    <Container>
      <div
        className="d-flex justify-content-between flex-nowrap align-items-center gap-2 mb-3"
        style={{ flexDirection: "row" }}
      >
        <h2>About Me</h2>
        <BackToAllPostsBtn />
      </div>

      <Card style={{ color: "#000", maxWidth: "768px" }} className="m-auto p-5">
        <Row>
          <Col md={4} className="text-center">
            <div
              className="rounded-circle overflow-hidden mx-auto mb-3"
              style={{ width: "150px", height: "150px" }}
            >
              <Card.Img
                src="https://i.ibb.co/KDhk2y5/photo-2022-12-03-15-26-10-2.jpg"
                className="w-100 h-100 object-fit-cover"
                alt="Profile"
              />
            </div>
            <Card.Title style={{ fontWeight: "700", fontSize: "1.5rem" }}>
              Ilya Larin
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
              <li>React-bootstrap</li>
              <li>React-router</li>
              <li>Redux</li>
              <li>ReduxToolkit and ReduxSaga</li>
              <li>TypeScript</li>
            </ul>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default AboutMePage;
