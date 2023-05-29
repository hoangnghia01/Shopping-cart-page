import "./Products.css"
import Cart from "../card/Cart"
import { useContext, useState } from "react"
import { AppContext } from "../../AppContext"
import { Col, Container, Row } from "react-bootstrap"
import Product from "./Product"
export default function Products() {
    const { show, count, products, addCart } = useContext(AppContext)

    return (
        <div className="products">
            <Container>
                <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
                    {products.map((item, index) =>
                    (
                        <Col> <Product key={index} product={item} /></Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}