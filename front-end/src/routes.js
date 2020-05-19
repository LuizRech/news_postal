import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './global.css'

import Header from './pages/Header';
import Footer from './pages/Footer';

import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import AddNews from './pages/AddNews';

export default function Routes(){
    return(
        <Router>
            <div className="headerPage">
                <Header />
            </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/news_detail" component={NewsDetail} />
                    <Route exact path="/add_news" component={AddNews} />
                </Switch>
            <Footer />
        </Router>
    )
};