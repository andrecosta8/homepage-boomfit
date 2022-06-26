import React from 'react'
import setDiscosImage from '../Images/setdediscos.jpg'
import barraPowerDiskImage from '../Images/barrapowerdisk.jpg'
import pavimentoImage from '../Images/gymrubberfloor.jpg'
import miniTrampolimImage from '../Images/minitrampolim.jpg'
import passadeiraImage from '../Images/passadeira.jpg'
import passadeiraCurvaImage from '../Images/passadeiracurva.jpg'
import bancoAbdominalImage from '../Images/bancoabdominal.jpg'
import foldingAbdominalImage from '../Images/foldingabdominal.jpg'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container, Row, Col, Card } from 'react-bootstrap'

function MaisVistos() {

    const productsList = [
        { name: "Set de Discos e Bloqueadores Power Disks - O'Live", price: "107.90€", image: setDiscosImage },
        { name: "Barra para Power Disk 140cm - O'Live", price: "39.90€", image: barraPowerDiskImage },
        { name: "Pavimento Borracha Ginásio 15mm Preto - XFIT", price: "19.56€", image: pavimentoImage },
        { name: "Mini Trampolim 114cm - XFIT", price: "72.98€", image: miniTrampolimImage },
        { name: "Passadeira DT14 - BodyTone", price: "399.99€", image: passadeiraImage },
        { name: "Passadeira Curva ZROTH - BodyTone", price: "599.00€", image: passadeiraCurvaImage },
        { name: "Banco Abdominal Dobrável Com Bandas - Fitness Tech", price: "64.99€", image: bancoAbdominalImage },
        { name: "Banco Abdominal Dobrável - Fitness Tech", price: "179.95€", image: foldingAbdominalImage },
      ]

  return (
    <Container>
      <Row>
        <Col><h3>MAIS VISTOS</h3></Col>
        <Col className='vertudo'><b>VER TUDO</b></Col>
      </Row>
      <Row className="bestSellersSlide">
        <Col>
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={4}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          
            {productsList.map((elem) => {
              return (
                <SwiperSlide className='swiperSlide'><Card key={elem.name} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={elem.image} alt={elem.name} />
                  <Card.Body>
                    <Card.Title className="hoverTitle">{elem.name}</Card.Title>
                    <Card.Text className="price">
                      <b>{elem.price}</b>
                    </Card.Text>
                  </Card.Body>
                </Card></SwiperSlide>
              )
            })} </Swiper></Col>
      </Row>
    </Container>
  )
}

export default MaisVistos