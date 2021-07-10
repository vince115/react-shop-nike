import React from 'react';
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Details.css';



export class Details extends React.Component {

    static contextType = DataContext;
    state = {
        product: []
    }

    //從id取得產品資料
    getProduct = () => {
        if (this.props.match.params.id) {
            const results = this.context.products;
            const data = results.filter(product => {
                return product._id === this.props.match.params.id
            })
            console.log('data', data)
            //將data設回上方的product[]  => state get value
            this.setState({ product: data })
        }
    };
    //加入組件建構完成後執行的事件
    componentDidMount() {
        this.getProduct();
    }

    render() {

        console.log('props.match.params.id', this.props.match.params.id);
        console.log('context', this.context);
        console.log('context.products', this.context.products);
        console.log('context.colors', this.context.colors);
        console.log('state', this.state);
        const { product } = this.state;
        const { addCart } = this.context;

        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h1>{item.title}</h1>
                                    <h3 style={{ color: 'darkred' }}>NT {item.price}</h3>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>

                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>ADD TO CART</Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}
export default Details