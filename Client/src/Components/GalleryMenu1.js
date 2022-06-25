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
    <Col className="galleryCol"><Image fluid className="imageGallery"src= {kitSetPumpsImage} alt="woman lifting"></Image><h5 className="imageText">KIT SET PUMPS</h5></Col>
    <Col><div className="rightSideImages"><div className='secondImage'><Image fluid src= {barrasImage} alt="weight bar"></Image></div><div className="thirandfourthImage"><Image fluid src= {discosImage} alt="?"></Image><br></br><Image fluid src= {kettlebeltsImage} alt="kettlebelts image"></Image></div></div></Col>
  </Row>
</Container>
  )
}

export default GalleryMenu1