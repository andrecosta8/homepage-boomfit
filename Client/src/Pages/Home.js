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
import LastGallery from '../Components/LastGallery'
import InfoBoomfit from '../Components/InfoBoomfit'
import Footer from '../Components/Footer'


function Home() {
    return (
        <Container fluid className='homepage'>
            <Row>
                <Col><BannerDesconto /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><HeadNavBar /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><GalleryMenu1 /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><BestSellers /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><GalleryMenu2 /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><ProdutosEmDestaque /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><GalleryMenu3 /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><Marcas /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><MaisVistos /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><FormSubscricao /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><LastGallery /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><InfoBoomfit /></Col>
            </Row>
            <Row>
                <Col className='homeEDIT'><Footer/></Col>
            </Row>
        </Container>

    )
}

export default Home