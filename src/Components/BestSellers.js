import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import barraOlimpicaImage from '../Images/barraOlimpica20kg.jpg'
import discoHiTempImage from '../Images/hiTemp5kg.jpg'
import kettlebell12kgImage from '../Images/kettlebell12kg.jpg'
import zwarteKettlebellImage from '../Images/zwarteKettlebell16kg.jpg'
import barraProStyleImage from '../Images/barraProSstyle.jpg'
import pegaTrianguloImage from '../Images/pegaEmTriangulo.jpg'
import wallBallImage from '../Images/wallBall10kg.jpg'
import battleRopeImage from '../Images/battleRope9m.jpg'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';



function BestSellers() {

  const productsList = [
    { name: "Barra Olimpica 20kg", price: "129.90€", image: barraOlimpicaImage },
    { name: "Disco Hi-Temp 5kg", price: "29.90€", image: discoHiTempImage },
    { name: "Kettlebell 12kg", price: "38.90€", image: kettlebell12kgImage },
    { name: "Kettlebell Preto de Croos Training 16kg", price: "44.90€", image: zwarteKettlebellImage },
    { name: "Barra Pro Style Lat", price: "38.90€", image: barraProStyleImage },
    { name: "Pega em Triângulo", price: "21.90€", image: pegaTrianguloImage },
    { name: "Wall Ball 10kg", price: "54.90€", image: wallBallImage },
    { name: "Battle Rope 9m", price: "65.90€", image: battleRopeImage },
  ]

  return (
    <Container>
      <Row>
        <Col><h3>BEST SELLERS</h3></Col>
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

export default BestSellers

