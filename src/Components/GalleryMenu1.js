import React from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Container, Row } from 'react-bootstrap'
import kitSetPumpsImage from '../Images/kitSetPumpsImage.jpg'
import discosImage from '../Images/discosImage.jpg'
import barrasImage from '../Images/barrasImage.jpg'
import kettlebeltsImage from '../Images/kettlebeltsImage.jpg'

function GalleryMenu1() {
  return (
    <Container >
  <Row className="galleryMenu1">
    <Col><Image fluid id="kitSetPumps" src= {kitSetPumpsImage} alt="woman lifting"></Image></Col>
    <Col><Image fluid src= {barrasImage} alt="weight bar"></Image></Col>
    <Col className= "lastcol1"><Image fluid src= {discosImage} alt="?"></Image><br></br><Image fluid src= {kettlebeltsImage} alt="kettlebelts image"></Image></Col>
  </Row>
</Container>
  )
}

export default GalleryMenu1