import React from "react"
import { Typography, AppBar, Grid, Button } from "@material-ui/core"

import HeaderStyles from "./HeaderStyles"

const Header = () => {
    const HeaderClasses = HeaderStyles();

    return (
      <React.Fragment>
        <AppBar className={HeaderClasses.appbar} position="static" color="primary" />
        <Grid container style={{marginTop: "25px"}}>
          <Grid item xs={4} align="center">
            <Button className={HeaderClasses.navButton} size="large" > Hakkımda </Button>
            <Button className={HeaderClasses.navButton} size="large" > CV </Button>
          </Grid>
          <Grid item xs={4} align="center" >
            <Typography className={HeaderClasses.name} variant="h3">TALHA BAYBURTLU</Typography>
          </Grid>
          <Grid item xs={4} align="center" >
            <Button className={HeaderClasses.navButton} size="large" > Blog </Button>
            <Button className={HeaderClasses.navButton} size="large" > Hesaplarım </Button>
          </Grid>
        </Grid>
        
      </React.Fragment>
      
    )
}

export default Header;