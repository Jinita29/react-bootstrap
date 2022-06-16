import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Icon} from '@iconify/react';

const Header = () => {
    return (
        <>
            <Navbar bg="light" fixed="top" expand="lg" className={'bg-white shadow-sm'}>
                <Container>
                    <Link className={'navbar-brand'} to="/">R<sub>eact</sub>-B<sub>ootstrap</sub></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-0 align-items-center">
                            <Link to={'/'}
                                  className={'text-decoration-none text-primary d-flex align-items-center me-2'}>Home</Link>
                            <Link to={'/about'}
                                  className={'text-decoration-none text-primary d-flex align-items-center'}>About</Link>
                            <NavDropdown align="end"
                                         title={<Icon icon="carbon:user-avatar-filled-alt" width="30" height="30"/>}
                                         id="basic-nav-dropdown">
                                <Link className={'dropdown-item'} to="/">Profile</Link>
                                <Link className={'dropdown-item'} to="/">Change password</Link>
                                <Link className={'dropdown-item'} to="/">Notifications</Link>
                                <NavDropdown.Divider/>
                                <Link className={'dropdown-item'} to="/">Logout</Link>
                            </NavDropdown>
                            <Link to={'/login'} className={'btn btn-dark btn-sm'}>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;