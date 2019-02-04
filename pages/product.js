// product.js

import React, { Component } from 'react';

class Product extends Component {
     // get the product list from api service
     static async getInitialProps(context) {
        console.log('Product getInitialProps')
        console.log(' product id is ', context.req.params.id);
        const id = context.req.params.id;
        //'http://api.nodesense.ai/api/products'
        const product = await fetch(`http://api.nodesense.ai/api/products/${id}`)
                               .then ( response => response.json())
        
        console.log('product received', product)
        console.log('Product get props done')

        return {product}
    }

    render() {
        return (
            <div>
                <h2>Product Detail - {this.props.product.name}</h2>

                
            </div>
        );
    }
}

export default Product;