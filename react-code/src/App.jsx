import { Accordion, Col, Container, Row } from "react-bootstrap";
import { LeafFill, Twitch } from "react-bootstrap-icons";

const App = () => {
  return (
    <Container fluid="md">
      <Row className="justify-content-center mb-5">
        <Col sm="auto">
          <h1 className="border border-2 border-top-0 rounded-bottom-4 p-3">
            Jude Ogboru's Portfolio
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col xs="11" md="9" className="border border-2 rounded-3 p-3">
          <h2 id="about-me" className="text-end">
            About me
          </h2>
          <hr />
          <p>
            Hi! My name is Jude Ogboru. I am a graduate <b>Sofware Engineer</b>{" "}
            from Babcock University class of 2025.
          </p>
          <p>
            I am interested in Graphics Programming and Fullstack Web
            Development.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Accordion className="col-md-11 col-lg-5 mb-4">
          <Accordion.Item eventKey="fullstack-java">
            <Accordion.Header>Fullstack</Accordion.Header>
            <Accordion.Body>
              I use Java's <LeafFill style={{ color: "green" }} /> Spring Boot
              to create the backend logic and implement the fontend in HTML.
              <br />
              Currently learning to use React.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="col-md-11 col-lg-5 mb-4">
          <Accordion.Item eventKey="graphics-java">
            <Accordion.Header>Graphics</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default App;
