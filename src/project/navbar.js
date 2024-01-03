// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import logo from './logo.jpg'
// import { useNavigate } from 'react-router-dom';

// function NavBar() {
//     const navigate = useNavigate();

//   return (
//     <>

//       <br />
//       <Navbar sticky='top' id='navbar'>
//         <Container>
//           <Navbar.Brand 
//           style={{color: "white", fontFamily:"Cursive"}}  >
//             <img
//             id='logo'
//               alt=""
//               src={logo}
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{' '}
//             ABOUT THE SHOP...
//           </Navbar.Brand>
//           <Nav.Link onClick={()=>{navigate("/about")
//         console.log("jjj")}}></Nav.Link>

//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


function NavBar() {

        const navigate = useNavigate();

    return (
        <Navbar sticky='top' id='navbar'>
            <Container>
                <Navbar.Brand style={{color:"white",fontSize:"30px"}} >Music Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link style={{color:"white"}} onClick={()=>{navigate("/about")}}><i class="bi bi-info-circle-fill"></i >About</Nav.Link>
                        <Nav.Link style={{color:"white"}} onClick={()=>{navigate("/")}}><i class="bi bi-house-fill"></i> Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;