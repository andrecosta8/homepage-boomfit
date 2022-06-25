import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BannerDesconto from '../Components/BannerDesconto'
import GalleryMenu1 from '../Components/GalleryMenu1'
import HeadNavBar from '../Components/HeadNavBar'
import BestSellers from '../Components/BestSellers'
import GalleryMenu2 from '../Components/GalleryMenu2'
import ProdutosEmDestaque from '../Components/ProdutosEmDestaque'
import GalleryMenu3 from '../Components/GalleryMenu3'
import Marcas from '../Components/Marcas'
import MaisVistos from '../Components/MaisVistos'
import FormSubscricao from '../Components/FormSubscricao'


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
            <Row>
                <Col><GalleryMenu2 /></Col>
            </Row>
            <Row>
                <Col><ProdutosEmDestaque /></Col>
            </Row>
            <Row>
                <Col><GalleryMenu3 /></Col>
            </Row>
            <Row>
                <Col><Marcas /></Col>
            </Row>
            <Row>
                <Col><MaisVistos /></Col>
            </Row>
            <Row>
                <Col><FormSubscricao /></Col>
            </Row>
        </Container>

    )
}

export default Home