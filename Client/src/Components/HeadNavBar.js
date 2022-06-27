import React from 'react'
import { Container, Nav, NavDropdown, Navbar, Form, Image } from 'react-bootstrap'
import logoBoomfit from '../Images/boomfit.png'
import userImage from '../Images/user.png'
import bagImage from '../Images/bag.png'
import { Link } from 'react-router-dom'


function HeadNavBar() {
    return (
        <>
            <Navbar className='navbarBoom' collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand><Image id="logoboomfit" src={logoBoomfit} alt="logo"></Image></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Pesquisar no nosso catálogo"
                                        className="me-2"
                                        aria-label="Search" />
                                </Form>

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to={"/signup"}><Image id="userIcon" src={userImage}></Image></Link>
                    <Image id="userIcon" src={bagImage}></Image>
                </Container>
            </Navbar>
            <Navbar className='navbarBoom' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="MUSCULAÇÃO" id="collasible-nav-dropdown">
                                <NavDropdown.Item >HALTERES</NavDropdown.Item>
                                <NavDropdown.Item >BARRAS</NavDropdown.Item>
                                <NavDropdown.Item >DISCOS</NavDropdown.Item>
                                <NavDropdown.Item >MÁQUINAS</NavDropdown.Item>
                                <NavDropdown.Item >BANCOS</NavDropdown.Item>
                                <NavDropdown.Item >PEGAS E ACESSÓRIOS</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="FUNCIONAL & CROOS-TRAINING" id="collasible-nav-dropdown">
                                <NavDropdown.Item >KITS SET PUMP</NavDropdown.Item>
                                <NavDropdown.Item >KETTLEBELLS</NavDropdown.Item>
                                <NavDropdown.Item >SACOS FUNCIONAIS</NavDropdown.Item>
                                <NavDropdown.Item >BOLAS COM PESO</NavDropdown.Item>
                                <NavDropdown.Item >SUSPENSÃO</NavDropdown.Item>
                                <NavDropdown.Item >CAIXAS DE PLIOMETRIA</NavDropdown.Item>
                                <NavDropdown.Item >COLETES DE PESO</NavDropdown.Item>
                                <NavDropdown.Item >ELEVAÇÃO</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="FITNESS & PILATES" id="collasible-nav-dropdown">
                                <NavDropdown.Item >PILATES</NavDropdown.Item>
                                <NavDropdown.Item >ABDOMINAIS</NavDropdown.Item>
                                <NavDropdown.Item >ELÁSTICOS E BANDAS</NavDropdown.Item>
                                <NavDropdown.Item >STEPS</NavDropdown.Item>
                                <NavDropdown.Item >EQUILIBRIO</NavDropdown.Item>
                                <NavDropdown.Item >HALTERES DE VINIL</NavDropdown.Item>
                                <NavDropdown.Item >YOGA</NavDropdown.Item>
                                <NavDropdown.Item >PESOS TORNOZELO</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="CARDIO" id="collasible-nav-dropdown">
                                <NavDropdown.Item >BICICLETAS</NavDropdown.Item>
                                <NavDropdown.Item >PASSADEIRAS</NavDropdown.Item>
                                <NavDropdown.Item >REMO</NavDropdown.Item>
                                <NavDropdown.Item >TRAMPOLINS</NavDropdown.Item>
                                <NavDropdown.Item >CORDAS DE SALTAR</NavDropdown.Item>
                                <NavDropdown.Item >MOBILIDADE E AGILIDADE</NavDropdown.Item>
                                <NavDropdown.Item >ACESSÓRIOS FUTEBOL</NavDropdown.Item>
                                <NavDropdown.Item >ELÍPTICAS</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="COMBATE" id="collasible-nav-dropdown">
                                <NavDropdown.Item >SACOS DE BOXE</NavDropdown.Item>
                                <NavDropdown.Item >LUVAS E PROTEÇÕES</NavDropdown.Item>
                                <NavDropdown.Item >ESCUDOS</NavDropdown.Item>
                                <NavDropdown.Item >LIGADURAS E ACESSÓRIOS</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="RECUPERAÇÃO" id="collasible-nav-dropdown">
                                <NavDropdown.Item >MASSAGEM</NavDropdown.Item>
                                <NavDropdown.Item >COMPRESSÃO</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="ORGANIZAÇÃO" id="collasible-nav-dropdown">
                                <NavDropdown.Item >PAVIMENTOS</NavDropdown.Item>
                                <NavDropdown.Item >SUPORTES</NavDropdown.Item>
                                <NavDropdown.Item >CRONOMETRAGEM</NavDropdown.Item>
                                <NavDropdown.Item >OUTROS</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="MARCAS" id="collasible-nav-dropdown">
                                <NavDropdown.Item >BOOMFIT</NavDropdown.Item>
                                <NavDropdown.Item >BODYTONE</NavDropdown.Item>
                                <NavDropdown.Item >CONCEPT2</NavDropdown.Item>
                                <NavDropdown.Item >LEONE</NavDropdown.Item>
                                <NavDropdown.Item >O'LIVE FITNESS</NavDropdown.Item>
                                <NavDropdown.Item >REEBOK</NavDropdown.Item>
                                <NavDropdown.Item >SKLZ</NavDropdown.Item>
                                <NavDropdown.Item >TRIGGERPOINT</NavDropdown.Item>
                                <NavDropdown.Item >UNLIMITED H5</NavDropdown.Item>
                                <NavDropdown.Item >AFW</NavDropdown.Item>
                                <NavDropdown.Item >XFIT</NavDropdown.Item>
                                <NavDropdown.Item >RDX SPORTS</NavDropdown.Item>
                                <NavDropdown.Item >ELITE 360</NavDropdown.Item>
                                <NavDropdown.Item >POWERBLOCK</NavDropdown.Item>
                                <NavDropdown.Item >BODY-SOLID</NavDropdown.Item>
                                <NavDropdown.Item >XTERRA</NavDropdown.Item>
                                <NavDropdown.Item >SOLE FITNESS</NavDropdown.Item>
                                <NavDropdown.Item >SPIRIT FITNESS</NavDropdown.Item>
                                <NavDropdown.Item >RENEGADE</NavDropdown.Item>
                                <NavDropdown.Item >DEPORTIUM</NavDropdown.Item>
                                <NavDropdown.Item >FITNESS TECH</NavDropdown.Item>
                                <NavDropdown.Item >VIBORA PADEL</NavDropdown.Item>
                                <NavDropdown.Item >ENEBE</NavDropdown.Item>
                                <NavDropdown.Item >TUNTURI</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default HeadNavBar