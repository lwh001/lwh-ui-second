import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom';

let contain = 
    <BrowserRouter>
        <App></App>
    </BrowserRouter>

ReactDOM.render(contain, document.getElementById('root'))
