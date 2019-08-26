import React, {Component} from 'react';
import {fetchProducts} from "../../redux/Shop/shop-actions";
import ProductGrid from "../../components/product-grid/product-grid";
import Sidebar from "../../components/sidebar/sidebar";
import './Products.scss'
import {connect} from "react-redux";

class Products extends Component {


    componentDidMount() {

        const {type, item} = this.props.match.params;
        this.props.fetchProducts(type, item);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {type, item} = this.props.match.params;
        const {type: prevType, item: prevItem} = prevProps.match.params;

        if (type !== prevType || item !== prevItem) {
            this.props.fetchProducts(type, item);
        }
    }


    render() {
        console.log(this.props.products);
        return (
            <div className={`products`}>
                <ProductGrid products={this.props.products}/>
                <Sidebar/>

            </div>
        );
    }
}

const mapStateToProps = ({shop: {products}}) => {

    return {
        products: products
    }

};

export default connect(mapStateToProps, {fetchProducts})(Products);