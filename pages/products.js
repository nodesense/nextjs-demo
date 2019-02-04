// products.js
import React, { Component } from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

class ProductList extends Component {
    // get the product list from api service
    static async getInitialProps() {
        console.log('ProductList getInitialProps')
        //'http://api.nodesense.ai/api/products'
        const products = await fetch('http://api.nodesense.ai/api/products')
                               .then ( response => response.json())
        
        console.log('products received', products.length)
        console.log('getInitialProps get props done')

        return {products}
    }


    render() {
        console.log('ProudctList render');
        return (
            <Layout>
                <div>
                    <h2>Product List</h2>
                    <ul>
                        {
                            this.props.products.map( product => (
                                <li key={product.id}>
                                  <Link href={`/product/detail/${product.id}`}>
                                    {product.name}
                                  </Link>  
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Layout>
        );
    }
}

export default ProductList;