import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import lastGallery1Image from '../Images/lastGallery1.jpg'
import lastGallery2Image from '../Images/lastGallery2.jpg'
import lastGallery3Image from '../Images/lastGallery3.jpg'
import lastGallery4Image from '../Images/lastGallery4.jpg'
import lastGallery5Image from '../Images/lastGallery5.jpg'


function LastGallery() {
    return (
        <div>
            <Container fluid className="lastGallery">
                <Row><Col><h5>Partilhe o seu progresso connosco #BOOMFIT</h5></Col></Row>
                <Row>
                    <Col><Image fluid src={lastGallery1Image}></Image></Col>
                    <Col><Image fluid src={lastGallery2Image}></Image></Col>
                    <Col><Image fluid src={lastGallery3Image}></Image></Col>
                    <Col><Image fluid src={lastGallery4Image}></Image></Col>
                    <Col><Image fluid src={lastGallery5Image}></Image></Col>
                </Row>
            </Container>
        </div>
    )
}

export default LastGallery