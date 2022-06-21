import React from 'react'
import { Container } from 'react-bootstrap'

function BannerDesconto() {
  return (
    <div>
        <Container fluid className="BannerDesconto">
        <b>7% DESCONTO EXTRA na primeira encomenda!</b> - Insira o código: BOOM7 
        </Container>
    </div>
  )
}

export default BannerDesconto