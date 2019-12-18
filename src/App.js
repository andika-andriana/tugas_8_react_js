import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Figure,
  Breadcrumb,
  Carousel,
  Jumbotron,
  Button,
  ListGroup,
  Form,
  Image,
  Modal
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tampil: false
    };
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
  }
  onCloseModal(e) {
    e.preventDefault();
    this.setState({ tampil: !this.state.tampil });
  }
  onOpenModal(e) {
    e.preventDefault();
    this.setState({ tampil: !this.state.tampil });
  }

  render() {
    return (
      <div>
        <Row style={{ backgroundColor: "Black", marginTop: "10px" }}>
          <Col>
            <Navbar style={{ marginTop: "-10px" }}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Pilih Bahasa"
                    style={{ marginTop: "-40px", marginLeft: "-15px" }}
                  >
                    <Dropdown.Item href="#/action-1">
                      Bahasa Indonesia
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Spanyol</Dropdown.Item>
                  </DropdownButton>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Brand href="#home" style={{ marginTop: "-1px" }}>
                <Figure style={{ marginLeft: "15px" }}>
                  <Figure.Image
                    width="50"
                    height="50"
                    alt="50x50"
                    src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                  />
                </Figure>
                <Figure.Caption
                  style={{
                    color: "white",
                    fontSize: "14px",
                    marginTop: "-10px"
                  }}
                >
                  Alan Saputra
                </Figure.Caption>
              </Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 9 }}>
              <Breadcrumb style={{ marginRight: "-10px" }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Berita
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <center>
            <Carousel style={{ width: 700 }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  alt="First slide"
                  style={{ height: 300 }}
                />
                <Carousel.Caption>
                  <h6>Diego Godin Ukir Rekor Spesial Lawan Thailand</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="Third slide"
                  style={{ height: 300 }}
                />

                <Carousel.Caption>
                  <h6>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  alt="Third slide"
                  style={{ height: 300 }}
                />

                <Carousel.Caption>
                  <h6>Inggris Mau Jadi Tim Terbaik Di Dunia</h6>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </center>
        </Container>
        <Row style={{ marginTop: 10 }}>
          <Col md={{ span: 3 }}>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Liga 1 Indonesia
              </ListGroup.Item>
              <ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item as="li">Divisi Primera</ListGroup.Item>
              <ListGroup.Item as="li">Serie A</ListGroup.Item>
              <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={{ span: 5 }}>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>Main untuk Catalunya, Gerad Pique Minta Di Hormati</p>
              <p>
                <Button variant="primary">Read More</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col md={{ span: 3 }}>
            <Form>
              <center>
                <Image
                  width="50"
                  height="50"
                  src="https://www.gstatic.com/webp/gallery3/2.png"
                  rounded
                />
                <h5>Silahkan Login</h5>
              </center>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Masukan Email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Term & Condition" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={e => this.onCloseModal(e)}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Modal show={this.state.tampil}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Anda Berhasil Login</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.onOpenModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.onOpenModal}>
              Save Username & Password
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
