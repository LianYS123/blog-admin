import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "layout";
import routers from "./index";

import Login from "pages/login";
import Home from "pages/home";
import { useInitApp } from "hooks/app";

import DictManager from "pages/dict";
import ResourceManager from "pages/resource";
import TagManager from "pages/tags";
import NotFound from "pages/404";

// 页面路由
const AppRoutes = () => {
  useInitApp(); // 初始化应用数据
  return (
    <Router>
      <Switch>
        <Route path={routers.LOGIN} component={Login} />
        <Route path="/pages">
          <AppLayout>
            <Switch>
              <Route path={routers.HOME} component={Home} />
              <Route path={routers.DICT} component={DictManager} />
              <Route path={routers.RESOURCE} component={ResourceManager} />
              <Route path={routers.TAG} component={TagManager} />
              <Route path={routers.NOT_FOUND} component={NotFound} />
              <Redirect to={routers.NOT_FOUND} />
            </Switch>
          </AppLayout>
        </Route>
        <Redirect to={routers.HOME} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
