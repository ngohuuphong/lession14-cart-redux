/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';

class ProductsContainer extends Component{
	showProducts = (products) => {
		var result = null;
		if(products.length > 0){
			result = products.map((product, index) =>{
				return <Product key={index} product={product}/>;
			});
		}
		return result;
	}

	render(){
		var { products } = this.props;
		return (
			<Products>
				{ this.showProducts(products) }
			</Products>
		);
	}
}

ProductsContainer.propTypes = {
	products : PropTypes.arrayOf(
		PropTypes.shape({
			id 			: PropTypes.number.isRequired,
			name		: PropTypes.string.isRequired,
			image		: PropTypes.string.isRequired,
			description	: PropTypes.string.isRequired,
			price		: PropTypes.number.isRequired,
			inventory	: PropTypes.number.isRequired,
			rating		: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = state => {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps, null)(ProductsContainer);
