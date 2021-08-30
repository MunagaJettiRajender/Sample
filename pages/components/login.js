import React, { Component } from 'react';
import Link from 'next/link'

function login(props) {
    return (
        <h1 className="title">
        
        <Link href="/posts/registration">
          <a>this page!</a>
        </Link>
      </h1>
    );
}

export default login;