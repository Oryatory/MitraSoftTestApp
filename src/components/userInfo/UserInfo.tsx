import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { memo } from "react";
import { userType } from "../../redux/reducers/userSlice";

interface UserInfoProps {
  user: userType;
}

const UserInfo = memo(({ user }: UserInfoProps) => {
  const { name, username, email, address, phone, website, company } = user;
  const { street, suite, city } = address;
  const { name: companyName } = company;
  return (
    <Card className=" mb-5">
      <Card.Body>
        <Row>
          <Col>
            <div
              className="rounded-circle overflow-hidden mb-4"
              style={{ width: "50px", height: "50px" }}
            >
              <Card.Img
                src="https://via.placeholder.com/150/66b7d2"
                alt="Avatar"
                className="w-100 object-fit-cover "
              />
            </div>
          </Col>

          <Col className="d-flex justify-content-end">
            <Link to="/">
              <Button>Back to all posts</Button>
            </Link>
          </Col>
        </Row>

        <h2>{username}`s info:</h2>
        <Row>
          <Col>
            <Card.Text>
              <b>Name:</b> {name}
            </Card.Text>
            <Card.Text>
              <b>Email:</b> {email}
            </Card.Text>
            <Card.Text>
              <b>Phone:</b> {phone}
            </Card.Text>
          </Col>
          <Col>
            <Card.Text>
              <b>Personal website:</b> {website}
            </Card.Text>
            <Card.Text>
              <b>Adress:</b> {`${street}, ${suite}, ${city}`}
            </Card.Text>
            <Card.Text>
              <b>Works at:</b> {companyName}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
});
export default UserInfo;
