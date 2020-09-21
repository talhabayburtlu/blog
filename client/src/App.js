import React from 'react';
import {Route,Switch , Redirect , } from "react-router-dom";
import { Grid } from '@material-ui/core';

import Blog from "./containers/Blog/Blog";
import Post from "./containers/Post/Post";
import PostShare from "./containers/Blog/PostShare/PostShare";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CV from "./components/Cv/Cv"
import Hakkımda from "./components/Hakkımda/Hakkımda";
import Hesaplarım from "./components/Hesaplarım/Hesaplarım";




function App() {
  return (
    <React.Fragment>
      <Grid container style={{display:"flex" , flexDirection: "column" , minHeight: "100vh"}}>
        <Grid item style={{flex:"1"}}>
          <Header />

          <Switch>
            <Route exact path="/hakkimda" component={Hakkımda} />
            <Route exact path="/cv" component={CV} />
            <Route exact path="/blog/post/:_id" component={Post} />
            <Route path="/blog/post-share/:tabID/:itemID" component={PostShare} />
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
