import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from '../../../../styles/NavigationBar.module.css'
import React, { useContext,  } from 'react';
import { languageContext } from '../../Contexts/Contexts'

const NavigationBar = () => {
    const [language, setLanguage] = useContext(languageContext);
    const handleLanguage = (status) => {
        setLanguage(status);
    }
    return (
        <>
            <Navbar bg='white' expand="lg" sticky='top' className={styles.navigationBar}>
                <Container>
                    <Navbar.Brand href="/" style={{ fontWeight: 1000, fontSize: '1.9rem' }}>Data <span style={{ color: '#0F52BA' }}>Portrayal</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none', outline: 'none'}} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" >
                            <NavDropdown title={language == 'en' ? "English" : "বাংলা"} id="basic-nav-dropdown" size="sm" >
                                <NavDropdown.Item href="" onClick={() => handleLanguage('en')}>English</NavDropdown.Item>
                                <NavDropdown.Item href="" onClick={() => handleLanguage('bn')}><span style={{fontSize:'20px'}}>বাংলা</span></NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                        
        </>
    );
};

export default NavigationBar;
