import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'

function FormSubscricao() {
    return (
        <Container>
            <Row>
                <Col><h5>Subscreva e receba notícias e promoções no seu email!</h5></Col>
            </Row>
            <Row>
                <Col><Form className='subInput'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="O seu email..." />
                    </Form.Group>
                    <Button variant='danger' type="submit">
                        SUBSCREVER
                    </Button>
                </Form></Col>
            </Row>
        </Container>
    )
}

export default FormSubscricao