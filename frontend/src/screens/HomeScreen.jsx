import React from 'react'
import {Row, Col} from 'react-bootstrap';
import products from '../components/products';
import Product from '../components/card/Product';
const HomeScreen = () => {
  return (
    <>
        <h1>Latest  Product</h1>
        <Row>
            {products.map((product)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen;
