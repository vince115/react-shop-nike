import React from 'react'

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike ZoomX Invincible Run Flyknit",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aaa19857-d943-4d27-9b6d-c101a14184b9/zoomx-invincible-run-flyknit-%E7%94%B7%E6%AC%BE%E8%B7%91-b1XP3r.png",
                "description": "男款跑鞋",
                "content": "穿上 Nike ZoomX Invincible Run Flyknit，征服長跑。輕量靈敏泡棉，著感超級舒適，步步都能感受到能量回傳。透氣又穩健，是 Nike 歷經千錘百鍊的鞋款之一。拉緊鞋帶，讓雙腳落地時感受驚人潛力。",
                "price": 6700,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Winflo 8",
                "src": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/d12709e6-59b0-4a21-967f-8805d3e5bf26/winflo-8-%E7%94%B7%E6%AC%BE%E8%B7%91-S6jPM3.png",
                "description": "男款跑鞋",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 3000,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Revolution 5",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qwqfyddzikcgc4ozwigp/revolution-5-%E7%94%B7%E6%AC%BE%E8%B7%91-szF7CS.png",
                "description": "男款跑鞋",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 2100,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Jordan Jumpman 2021 PF",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd550016-2b59-4904-91d0-13d7a75106e9/jordan-jumpman-2021-pf-%E7%B1%83%E7%90%83-X3gQBM.png",
                "description": "籃球鞋",
                "content": "Jordan Jumpman 2021 以最新版 Air Jordan 比賽戰靴的設計為靈感，讓明日球星在場上發揮超水準表現。前足採用靈敏 Zoom Air 緩震系統。材質中縫入弧形 Flightwire 織線，著感穩固服貼，提升競爭力度。此款 PF 版本設計，適合室外球場。",
                "price": 3800,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Air Max Tailwind V SP",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-8987e2dc-bd09-4599-a70e-ec3bbf54f7bc/air-max-tailwind-5-sp-%E7%94%B7-KLqjDl.png",
                "description": "男鞋",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 3779,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Air Max Excee",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1819f4c-736c-4b89-b3cc-e97b9ba147e8/air-max-excee-%E7%94%B7-lPbXqt.png",
                "description": "男鞋",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 2169,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0

    };

    //addCart
    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("The product has been added to cart.")
        }
    };


    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart });
            this.getTotal();
        }
    };

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: res })
    };

    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if (dataTotal !== null) {
            this.setState({ total: dataTotal });
        }
    }

    render() {
        const { products, cart, total } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal } = this;
        return (
            <DataContext.Provider
                value={{ products, addCart, cart, reduction, increase, removeProduct, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
