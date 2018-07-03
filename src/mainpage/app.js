import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Test from "./components/RestrauntList/index"
import Profile from "./components/profile"

const jsx = (
	<BrowserRouter>
		<div>
	        <Header />
            <Switch>
                <Route path="/" component={Test} exact />
                <Route path="/profile" component={Profile} exact />
            </Switch> 
	       
        </div>
	</BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));