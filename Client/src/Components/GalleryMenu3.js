import React from 'react'
import fitasSuspensaoImage from '../Images/fitassupensão.jpg'
import balanceStationImage from '../Images/balancestation.jpg'
import { Container, Row, Image, Col } from 'react-bootstrap'

function GalleryMenu3() {
  return (
    <Container >
    <Row className="galleryMenu1">
        <Col><Image fluid id="kitSetPumps" src={fitasSuspensaoImage} alt="abdominais"></Image></Col>
        <Col><Image fluid src={balanceStationImage} alt="pilates"></Image></Col>
    </Row>
</Container>
  )
}

export default GalleryMenu3