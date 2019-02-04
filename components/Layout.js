// Layout.js
import Header from './Header';
import Footer from './Footer';

import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header title="Next.js app" />
                    
                    {this.props.children}

                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;