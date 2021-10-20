/* eslint-disable indent */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;