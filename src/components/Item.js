import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Item extends Component {
    constructor() {
        super();
    }
    changingPrice = (e) => {
        if (e.detail === 2) {
            const newPrice = prompt("enter your new price");
            this.props.store.changingPrice(this.props.name, newPrice);
        }
    };
    buyItem = () => {
        this.props.store.buyItem(this.props.name);
    };

    render() {
        return (
            <div>
                <p>
                    {this.props.quantity} {this.props.name} available at $
                    <span onClick={this.changingPrice}>{this.props.price}</span> per item
                    <button onClick={this.buyItem}>Buy now</button>
                </p>
            </div>
        );
    }
}

export default inject("store")(observer(Item));