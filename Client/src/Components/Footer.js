import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import footerLeftImage from '../Images/metodospagamento.png'
import footerMiddleImage from '../Images/drible.svg'
import footerRightImage from '../Images/footerright.png'

function Footer() {
  return (
    <div>
        <Container>
            <Row>
                <Col><h5>Informações</h5><br></br><p className="hoverFooter">TERMOS E CONDIÇÕES</p><p className="hoverFooter">POLITICA DE PRIVACIDADE</p><p className="hoverFooter">LIVRO DE RECLAMAÇÔES</p></Col>
                <Col><h5>Links Úteis</h5><br></br><p className="hoverFooter">TROCAS E DEVOLUÇÕES</p><p className="hoverFooter">ENVIOS</p><p className="hoverFooter">MÉTODOS DE PAGAMENTO</p><p className="hoverFooter">KLARNA FAQ</p></Col>
                <Col><h5>BOOMFIT</h5><br></br><p className="hoverFooter">BOOMPOINTS</p><p className="hoverFooter">CONTACTE-NOS</p><p className="hoverFooter">BLOG</p></Col>
                <Col><br></br><br></br><p className="hoverFooter">A MINHA CONTA</p><p className="hoverFooter">ENCOMENDAS</p><p className="hoverFooter">OS MEUS BOOMPOINTS</p></Col>
            </Row>
            <Row>
                <Col><Image id="footerLeftImage" src={footerLeftImage}></Image></Col>
                <Col><Image src={footerMiddleImage}></Image></Col>
                <Col><Image src={footerRightImage}></Image></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
