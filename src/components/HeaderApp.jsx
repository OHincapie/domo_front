import { Navbar, Nav, Container } from 'react-bootstrap';

export const HeaderApp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
    <Container>
      <Navbar.Brand href="#home">Proyecto Domótica</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav >
          <Nav.Link>Inicio</Nav.Link>
          <Nav.Link>Dispositivos</Nav.Link>
          <Nav.Link>Equipo</Nav.Link>
          <Nav.Link>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
