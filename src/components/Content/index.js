import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "../Layout";
import Page from "../Page";
import Main from "../pages/Main";
import Settings from "../pages/Settings";

import configureStore from "../../store/configureStore";

const store = configureStore();

const Pages = () => {
  return (
    <div className="content">
      <Layout>
        <Page>
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/settings">
                  <Settings />
                </Route>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
        </Page>
      </Layout>
    </div>
  );
};

export default Pages;
