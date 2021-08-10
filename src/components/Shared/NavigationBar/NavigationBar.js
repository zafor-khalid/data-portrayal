import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from '../../../../styles/NavigationBar.module.css'
import React, { useContext, useEffect, useState } from 'react';
import { languageContext } from '../../Contexts/Contexts'
const NavigationBar = () => {
    const [language, setLanguage] = useContext(languageContext);
    const handleLanguage = (status) => {
        setLanguage(status);
      
    }
    console.log(language);
    return (
        <>
            <Navbar bg='white' expand="lg" sticky='top' className={styles.navigationBar}>
                <Container>
                    <Navbar.Brand href="/" style={{ fontWeight: 1000, fontSize: '1.9rem' }}>Data <span style={{ color: '#0F52BA' }}>Portrayal</span></Navbar.Brand>
                    <Nav className="ms-auto" >
                        <NavDropdown title="Language" id="basic-nav-dropdown">
                            <NavDropdown.Item href="" onClick={() => handleLanguage('en')}>en</NavDropdown.Item>
                            <NavDropdown.Item href="" onClick={() => handleLanguage('bn')}>bn</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default NavigationBar;
