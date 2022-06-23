import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BannerDesconto from '../Components/BannerDesconto'
import GalleryMenu1 from '../Components/GalleryMenu1'
import HeadNavBar from '../Components/HeadNavBar'
import BestSellers from '../Components/BestSellers'


function Home() {
    return (
        <Container fluid>
            <Row>
                <Col><BannerDesconto /></Col>
            </Row>
            <Row>
                <Col><HeadNavBar /></Col>
            </Row>
            <Row>
                <Col><GalleryMenu1 /></Col>
            </Row>
            <Row>
                <Col><BestSellers /></Col>
            </Row>
        </Container>

    )
}

export default Home