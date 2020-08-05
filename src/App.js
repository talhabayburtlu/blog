import React from 'react';
import {Route,Switch , Redirect} from "react-router-dom";

import Header from "./components/Header/Header";
import Blog from "./containers/Blog/Blog";
import Cv from "./containers/Cv/Cv";
import Hakkımda from "./containers/Hakkımda/Hakkımda";
import Hesaplarım from "./containers/Hesaplarım/Hesaplarım";


function App() {
  return (
    <React.Fragment>
      <Header />

      <Switch>
        <Route exact path="/hakkimda" component={Hakkımda} />
        <Route exact path="/cv" component={Cv} />
        <Route path="/blog" component={Blog} />
        <Route exact path="/hesaplarim" component={Hesaplarım} />
        <Redirect from="*" to="/hakkimda" />
      </Switch>

    </React.Fragment>
  );
}

export default App;
