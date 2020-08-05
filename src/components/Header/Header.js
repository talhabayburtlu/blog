import React from "react"
import {Link} from "react-router-dom"
import { Typography, AppBar, Grid, Button } from "@material-ui/core"

import HeaderStyles from "./HeaderStyles"

const Header = () => {
    const HeaderClasses = HeaderStyles();

    return (
      <React.Fragment>
        <AppBar className={HeaderClasses.appbar} position="static" color="primary" />
        <Grid container style={{margin:"50px 0px"}}>
          <Grid item xs={4} align="left" style={{padding: "0px 85px"}}>
            <Button className={HeaderClasses.navButton} size="large" component={Link} to="/hakkimda" > Hakkımda </Button>
            <Button className={HeaderClasses.navButton} size="large" component={Link} to="/cv" > CV </Button>
          </Grid>
          <Grid item xs={4} align="center" >
            <Typography className={HeaderClasses.name} variant="h3">TALHA BAYBURTLU</Typography>
          </Grid>
          <Grid item xs={4} align="right" style={{padding: "0px 85px"}} >
            <Button className={HeaderClasses.navButton} size="large" component={Link} to="/blog" > Blog </Button>
            <Button className={HeaderClasses.navButton} size="large" component={Link} to="/hesaplarim" > Hesaplarım </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
}

export default Header;