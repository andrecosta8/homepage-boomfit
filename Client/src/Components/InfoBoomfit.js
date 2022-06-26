import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import boomfitLogo from '../Images/boomfitRED.png'


function InfoBoomfit() {
    return (
       
            <Container fluid className="infoBoomfit">
                <Row>
                    <Col><Image className="boomfitREd" src={boomfitLogo} alt="logo"></Image></Col>
                    <Col><h5>APOIO AO CLIENTE <b>info@boomfit.com</b></h5></Col>
                    <Col><h5>REDES SOCIAIS</h5></Col>
                </Row>
            </Container>
        
    )
}

export default InfoBoomfit