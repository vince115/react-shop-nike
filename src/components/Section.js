import React from 'react';
import { Route } from "react-router-dom";
import Products from './section/Products';
import Details from './section/Details';
import Cart from './section/Cart';
import Payment from './section/Payment';

export class Section extends React.Component {
    render() {
        return (
            <section>
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} exact />
                <Route path="/cart" component={Cart} exact />
                <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}
export default Section