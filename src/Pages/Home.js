import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BannerDesconto from '../Components/BannerDesconto'
import HeadNavBar from '../Components/HeadNavBar'


function Home() {
    return (
        <div>
            <BannerDesconto />
            <HeadNavBar />
        </div>
    )
}

export default Home