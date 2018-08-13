import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Redirect, Route,Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux"; //5.0 移除了 history 需要手动引入 history依赖
import { Home } from "libs/routes";
import NotFound from "app/components/NotFound";
import history from "libs/history";
import Carousel from "shared/components/Carousel";
import Carousel2 from "shared/components/Carousel2";
import Carousel3 from "shared/components/Carousel3";
import ImageProcess from "app/routes/imageProcess"
import Message from "app/routes/message"
import MusicPlayer from "app/routes/musicPlayer"

import "./styles.less";
import Turntable from "app/routes/turntable";
import ErrorBoundary from "app/routes/error";
import WithHeader from "app/routes/withHeader"

class App extends PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/home"
              render={() => <Redirect to="/" />}
              component={Home}
            />
            <Route path="/test1" component={Carousel} />
            <Route path="/test2" component={Carousel2} />
            <Route path="/test3" component={Carousel3} />
            <Route path="/imageProcess" component={ImageProcess} />
            <Route path="/message" component={Message} />
            <Route path="/musicPlayer" component={MusicPlayer} />
            <Route path="/turntable" component={Turntable} />
            <Route path="/error" component={ErrorBoundary} />
            <Route path="/withHeader" component={WithHeader} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ConnectedRouter>
    );
  }
}

export default hot(module)(App);
