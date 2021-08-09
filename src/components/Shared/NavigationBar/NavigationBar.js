import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from '../../../../styles/NavigationBar.module.css'

const NavigationBar = () => {
    
    return (
        <>
            <Navbar  expand="lg" sticky='top' className={styles.navigationBar}>
                <Container>
                    <Navbar.Brand href="#home">Data Portrayal</Navbar.Brand>
                    <Nav className="ms-auto">
                            <NavDropdown title="Language" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                </Container>
            </Navbar>
          
        </>
    );
};

export default NavigationBar;