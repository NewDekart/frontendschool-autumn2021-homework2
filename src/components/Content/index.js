import { useReducer } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "../Layout";
import Page from "../Page";
import Main from "../pages/Main";
import Settings from "../pages/Settings";
import Context from "../Context";
import { reducer, initialState } from "../../store/reducerConfiguration";

const Pages = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="content">
      <Layout>
        <Page>
          <Context.Provider value={{ state, dispatch }}>
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
          </Context.Provider>
        </Page>
      </Layout>
    </div>
  );
};

export default Pages;
