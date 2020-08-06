import React from 'react';
import {Route,Switch , Redirect , } from "react-router-dom";
import { Grid, BottomNavigation } from '@material-ui/core';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./containers/Blog/Blog";
import Cv from "./containers/Cv/Cv";
import Hakkımda from "./containers/Hakkımda/Hakkımda";
import Hesaplarım from "./containers/Hesaplarım/Hesaplarım";


function App() {
  return (
    <React.Fragment>
      <Grid container style={{display:"flex" , flexDirection: "column" , minHeight: "100vh"}}>
        <Grid item style={{flex:"1"}}>
          <Header />

          <Switch>
            <Route exact path="/hakkimda" component={Hakkımda} />
            <Route exact path="/cv" component={Cv} />
            <Route path="/blog" component={Blog} />
            <Route exact path="/hesaplarim" component={Hesaplarım} />
            <Redirect from="*" to="/hakkimda" />
          </Switch>
        </Grid>

        <Footer />
      </Grid>
      
    </React.Fragment>
  );
}

export default App;
