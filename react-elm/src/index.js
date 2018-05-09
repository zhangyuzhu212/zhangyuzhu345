import React from 'react';
import {render} from 'react-dom';
import Footer from './components/Footer/Footer';
import Home from './page/Home/Home.js';
import Find from './page/Find/Find.js';
import Order from './page/Order/Order.js';
import  User   from './page/user/index.js';
import  Search from './page/Search/Search.js';
import Address from './page/address/address';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';




render(
    <Provider store={store}>
        <Router>
            <Route
                render={({ location }) => (
                    <React.Fragment>
                        <Switch location={location}>
                                    <Route path="/home" component={Home} />
                                    <Route path="/find" component={Find}/>
                                    <Route path="/order" component={Order}/>
                                    <Route path="/user" component={User}/>
                                    <Route path="/search" component={Search}/>
                                    <Route path="/address" component={Address}/>
                        </Switch>
                        <Footer></Footer>
                    </React.Fragment>
                )} />
        </Router >
    </Provider>
    ,window.root);