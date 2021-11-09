/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClassDetail from './ClassDetail';
import Home from './Home';
import ArticleDetail from './ArticleDetail';
import ListClass from './ListClass';
import ListArticles from './ListArticles';
import About from './About';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/class" exact component={ListClass} />
        <Route path="/class/:id" component={ClassDetail} />
        <Route path="/article/:id" exact component={ArticleDetail} />
        <Route path="/article" exact component={ListArticles} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
