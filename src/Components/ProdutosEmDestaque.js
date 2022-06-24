import React from 'react'
import bolaDePilatesImage from '../Images/boladepilates65cm.jpg'
import cordaProImage from '../Images/cordadesaltarpro.jpg'
import colchaoPilatesImage from '../Images/colchaodepilatesnbr1cm.jpg'
import miniBandaImage from '../Images/minibandaelasticamedia.jpg'
import pesosTornozelosImage from '../Images/pesosparatornozelos3kg.jpg'
import rodaAbdominalImage from '../Images/beginnersabwiel.jpg'
import halteresVinilImage from '../Images/halteresdevinil4kg.jpg'
import stepProImage from '../Images/steppro.jpg'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container, Row, Col, Card } from 'react-bootstrap'

function ProdutosEmDestaque() {
    const productsList = [
        { name: "Bola de Pilates", price: "10.90€", image: bolaDePilatesImage },
        { name: "Corda de Saltar Pro", price: "6.90€", image: cordaProImage },
        { name: "Colchão de Pilates NBR 1cm", price: "13.90€", image: colchaoPilatesImage },
        { name: "Mini Banda Elástica Média", price: "4.90€", image: miniBandaImage },
        { name: "Pesos para Tornozelos 3kg", price: "16.90€", image: pesosTornozelosImage },
        { name: "Roda abdominal para principiantes", price: "14.90€", image: rodaAbdominalImage },
        { name: "Halteres de Vinil 4kg", price: "22.90€", image: halteresVinilImage },
        { name: "Step Pro", price: "58.90€", image: stepProImage },
      ]
  return (
    <Container>
      <Row>
        <Col><h3>PRODUTOS EM DESTAQUE</h3></Col>
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
                <SwiperSlide><Card key={elem.name} style={{ width: '18rem' }}>
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

export default ProdutosEmDestaque