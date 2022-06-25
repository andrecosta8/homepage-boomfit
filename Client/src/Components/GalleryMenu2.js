import React from 'react'
import abdominaisImage from '../Images/abdominais.jpg'
import bandasImage from '../Images/bandas.jpg'
import tornozelosImage from '../Images/tornozelos.jpg'
import pilatesImage from '../Images/pilates.jpg'
import { Col, Container, Row, Image } from 'react-bootstrap'

function GalleryMenu2() {
    return (
        <Container >
            <Row className="galleryMenu1">
                <Col><Image fluid id="kitSetPumps" src={abdominaisImage} alt="abdominais"></Image></Col>
                <Col className="lastcol1"><Image fluid src={bandasImage} alt="bandas"></Image><br></br><Image fluid src={tornozelosImage} alt="tornozelos"></Image></Col>
                <Col><Image fluid src={pilatesImage} alt="pilates"></Image></Col>
            </Row>
        </Container>
    )
}

export default GalleryMenu2