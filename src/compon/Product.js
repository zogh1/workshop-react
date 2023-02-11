import React, { Component } from "react";
import { Card, Button, Alert } from "react-bootstrap";
export default class Product extends Component {

    handleBuy = () => {
        this.props.onBuy(this.props.prod);

    }


    constructor(props) {
        super(props);
        this.state = { product: props.prod }




    }





    like = () => {
        this.setState((oldState) => ({ product: { ...oldState.product, like: oldState.product.like + 1 } }))
        console.log('here')

    }
    render() {

        return (

            <Card>
                <Card.Img variant="top" src={require('../assets/images/' + this.props.prod.img)} />
                <Card.Body>
                    <Card.Title> {this.state.product.name}</Card.Title>
                    <Card.Text>Price:{this.state.product.price} Dt</Card.Text>
                    <Card.Text>Quantity:{this.state.product.quantity}</Card.Text>
                    <Card.Text>likes:{this.state.product.like}</Card.Text>
                </Card.Body>
                <Button onClick={this.like}>like</Button>
                <Button onClick={this.handleBuy} disabled={this.props.prod.quantity === 0}>Buy</Button>

            </Card>


        );
    }



}