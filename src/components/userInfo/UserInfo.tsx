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
    <Card style={{ maxWidth: "768px" }} className="m-auto mb-5">
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

        <h2>{username} user-info:</h2>
        <Row>
          <Col>
            <Card.Text>Name: {name}</Card.Text>
            <Card.Text>Email: {email}</Card.Text>
            <Card.Text>Phone: {phone}</Card.Text>
          </Col>
          <Col>
            <Card.Text>Personal website: {website}</Card.Text>
            <Card.Text>Adress: {`${street}, ${suite}, ${city}`}</Card.Text>
            <Card.Text>Works at: {companyName}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
});
export default UserInfo;
