import React from 'react'
import { Container, Image } from 'react-bootstrap'
import copyIcon from '../Images/copy.png'

function BannerDesconto() {
  return (
    <div>
        <Container fluid className="BannerDesconto">
        <b>7% DESCONTO EXTRA na primeira encomenda!</b> - Insira o código: <u>BOOM7</u> <Image className="copyIcon" src={copyIcon} alt="iconCopy"></Image> 
        </Container>
    </div>
  )
}

export default BannerDesconto