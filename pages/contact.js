// contact.js

import React, { Component } from 'react';

import Head from 'next/head';
import Layout from '../components/Layout';


class Contact extends Component {
    constructor(props) {
        super(props);
        console.log('Contact constructor')
    }

    static async getInitialProps(context) {
        console.log('Contact getInitialProps called', Object.keys(context));
        return {
            // propName: propValue
            country: 'India'
        }
    }

 

    componentWillMount() {
        console.log('Contact componentWillMount')
    }

    componentDidMount() {
        console.log('Contact componentDidMount')
    }

    componentWillUnmount() {
        console.log('Contact componentWillUnmount')

    }

    render() {
        console.log('Contact render');

        return (
            <Layout>
            <div>
                <Head>
                    <title>Contact Page  </title>
                </Head>
                <h2>Contact {this.props.country} </h2>
            </div>
            </Layout>
        );
    }
}

export default Contact;