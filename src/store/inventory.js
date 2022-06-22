import { observable, action, makeObservable, computed } from "mobx";
import { Item } from "./Item";

export class Inventory {
    constructor() {
        this.items = [];

        makeObservable(this, {
            items: observable,
            numItems: computed,
            addItem: action,
            buyItem: action,
            changingPrice: action,
        });
    }
    get numItems() {
        return this.items.length;
    }
    addItem = (name, price = 0, quantity = 1) => {
        let item = this.items.find((i) => i.name === name);
        if (item) {
            item.quantity += 1;
        } else {
            let newItem = new Item(name, price, quantity);
            this.items.push(newItem);
        }
    };
    buyItem = (name) => {
        let item = this.items.find((i) => i.name === name);
        if (item) {
            item.quantity -= 1;
            if (item.quantity < 1) {
                this.items = this.items.filter((i) => i.name != item.name);
            }
        }
    };
    changingPrice = (name, price) => {
        let item = this.items.find((i) => i.name === name);
        if (item) {
            item.price = price;
        }
    };

    checkItem = (name) => {
        let item = this.items.find((i) => i.name === name);
        item.completed = !item.completed;
    };
}