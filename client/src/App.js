import React from 'react';
import {Route,Switch , Redirect , } from "react-router-dom";
import { Fade , Grid } from '@material-ui/core';

import Blog from "./containers/Blog/Blog";
import Post from "./containers/Post/Post";
import CV from "./containers/Cv/Cv"
import Hesaplarım from "./containers/Hesaplarım/Hesaplarım";
import Hakkımda from "./containers/Hakkımda/Hakkımda";
import PostShare from "./containers/Blog/PostShare/PostShare";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <React.Fragment>
      <Fade in={true} timeout={1000}>
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
      </Fade>
    </React.Fragment>
  );
}

export default App;
