import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Redirect, Route,Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux"; //5.0 移除了 history 需要手动引入 history依赖
import { Home, TestPage } from "libs/routes";
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

class App extends PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Switch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/home"
              render={() => <Redirect to="/" />}
              component={Home}
            />
            <Route path="/testPage" component={TestPage} />
            <Route path="/test1" component={Carousel} />
            <Route path="/test2" component={Carousel2} />
            <Route path="/test3" component={Carousel3} />
            <Route path="/test4" component={ImageProcess} />
            <Route path="/test5" component={Message} />
            <Route path="/test6" component={MusicPlayer} />
            <Route path="/test7" component={Turntable} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ConnectedRouter>
    );
  }
}

export default hot(module)(App);
