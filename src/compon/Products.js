import React, { Component } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import Product from "./Product";
import ProductsData from "../data/products.json";

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = { buyAlert: false }
    }

    buy = (product) => {
        // Decrement the product's quantity by 1
        product.quantity--;
        this.setState({ product });




        this.setState({ buyAlert: true });



    }
    render() {
        return (
            <Row>
                {ProductsData.map((product, index) => (
                    <Col md={4} key={index}>
                        <Product
                            prod={product}
                            onBuy={this.buy}


                        />

                    </Col>


                ))}
                {this.state.buyAlert && <Alert > you bougth an Item </Alert>}

            </Row>
        )
    }

}