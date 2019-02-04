// Header.js
import React from 'react';

import Link from 'next/link';

export default (props) => (
    <div>
        <h2>{props.title}</h2>

        <Link href="/">
            <a>Home</a>
        </Link>

        <Link href="/products">
            <a>Products</a>
        </Link>
        
        <Link href="/about">
            <a>About</a>
        </Link>

        <Link href="/contact" >
            <a>Contact</a>
        </Link>
        

    </div>
)