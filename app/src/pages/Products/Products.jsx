import React, {Component} from 'react';
import {fetchProducts} from "../../redux/Shop/shop.actions";
import ProductGrid from "../../components/productGrid/productGrid.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import './Products.scss'
import {connect} from "react-redux";
import TopButton from "../../components/topButton/topButton.component";
import {Spring} from "react-spring/renderprops-universal";

class Products extends Component {
    componentDidMount() {

        const {category, type} = this.props.match.params;
        this.props.fetchProducts(category, type);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {category, type} = this.props.match.params;
        const {category: prevCategory, type: prevType} = prevProps.match.params;
        if (category !== prevCategory || type !== prevType) {
            this.props.fetchProducts(category, type);
            window.scrollTo(0,0);
        }
    }


    render() {

        const {category} = this.props.match.params;
        return (
            <Spring from={{background:'red'}} to={{background:'white'}}>
                {props=> <div style={props} className={`products`}>
                <Sidebar category={category}/>
                <ProductGrid products={this.props.products}/>
                <TopButton/>
            </div>}
            </Spring>
        );
    }
}

const mapStateToProps = ({shop: {products}}) => {

    return {
        products: products
    }

};

export default connect(mapStateToProps, {fetchProducts})(Products);