import React from 'react'
import xfitImage from '../Images/XFIT.jpg'
import oliveImage from '../Images/OLIVE.jpg'
import elite360Image from '../Images/ELITE360.jpg'
import fitnesstechImage from '../Images/FITNESSTECH.jpg'
import bodytoneImage from '../Images/BODYTONE.jpg'
import concept2Image from '../Images/CONCEPT2.jpg'
import reebokImage from '../Images/REEBOK.jpg'
import sklzImage from '../Images/SKLZ.jpg'
import triggerpointImage from '../Images/TRIGGERPOINT.jpg'
import  unlimitedh5Image from '../Images/UNLIMITEDH5.jpg'
import allfreeweightImage from '../Images/ALLFREEWEIGHT.jpg'
import etenonImage from '../Images/ETENON.jpg'
import rdxImage from '../Images/RDX.jpg'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import 'swiper/css/navigation';
import { Container, Row, Col, Card } from 'react-bootstrap'

function Marcas() {
    const brandsList = [
        { name: "XFIT", image: xfitImage  },
        { name: "O'Live Fitness",  image: oliveImage },
        { name: "Elite 360",  image: elite360Image },
        { name: "Fitness Tech",  image: fitnesstechImage},
        { name: "BodyTone",  image: bodytoneImage },
        { name: "Concept2",  image: concept2Image },
        { name: "Reebok",  image: reebokImage },
        { name: "SKLZ",  image: sklzImage },
        { name: "TriggerPoint",  image: triggerpointImage},
        { name: "Unlimited H5",  image: unlimitedh5Image },
        { name: "AFW",  image: allfreeweightImage },
        { name: "Etenon",  image: etenonImage },
        { name: "RDX Sports",  image: rdxImage },
      ]

  return (
    <Container>
      <Row>
        <Col><h3>MARCAS</h3></Col>
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
          
            {brandsList.map((elem) => {
              return (
                <SwiperSlide><Card key={elem.name} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={elem.image} alt={elem.name} />
                  <Card.Body>
                    <Card.Title className="hoverTitle">{elem.name}</Card.Title>
                  </Card.Body>
                </Card></SwiperSlide>
              )
            })} </Swiper></Col>
      </Row>
    </Container>
  )
}

export default Marcas