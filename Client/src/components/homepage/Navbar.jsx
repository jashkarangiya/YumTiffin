import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import Cart from '../../images/cart.png'
import User from '../../images/user.png'
// import user = useSelector((state) => state.user);
// import { useSelector } from 'react-redux';
// import { userSelector } from '../../App ';

// const user = userSelector((state) => state.user);
// const fullName = `${user.firstName} ${user.lastName}`;

const name = [
  {
    names: 'Jash Karangiya'
  },
  {
    names: 'Hetvi Bhadani'
  },
  {
    names: 'Sangati Chapla'
  }  

]

function NavScrollExample() {
  return (
    
    <Navbar bg="light" expand="lg" className='nav-bar'>
      <Container fluid>
        <Navbar.Brand href="/home" id='navtitle'>YUMTIFFIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='navlinks'>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll 
          >
            <Nav.Link href="/home" id='navl'>Hello, Jash</Nav.Link>
            
            <Nav.Link href="/logout" id='navl'>Logout</Nav.Link>
            

            <Nav.Link id='navl' href="/cart"><img src={Cart} id='navicon'></img></Nav.Link>
           
            <Nav.Link id='navl' href="/profile" action="/profile"><img src={User} id='navicon'></img></Nav.Link>
   
          
            
              
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;