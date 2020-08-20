import React from "react";
import { Typography, Grid, Avatar } from "@material-ui/core";

import HakkımdaStyles from "./HakkımdaStyles"
import avatarImg from "../../public/images/avatar.jpg"

const Hakkımda = () => {
    const HakkımdaClasses = HakkımdaStyles();

    return (
        <React.Fragment>
            <Grid container style={{margin:"50px 0px"}}>
                <Grid item container style={{margin: "50px 0px"}}>
                    <Grid item container xs={6} align="center" alignItems="center" style={{paddingLeft: "85px"}}>
                        <Grid item xs={1} >
                            <div className={HakkımdaClasses.avatarLine} />
                        </Grid>
                        <Grid item xs={5}>
                            <Avatar className={HakkımdaClasses.avatar} alt="Talha Bayburtlu" src={avatarImg} />
                        </Grid>
                        <Grid item xs={6}>
                            <div className={HakkımdaClasses.avatarLine} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} justify="center" alignItems="center" style={{paddingRight: "85px"}}>
                        <Grid item xs={2} >
                            <div className={HakkımdaClasses.avatarLine} />
                        </Grid>
                        <Grid item xs={8} align="center">
                            <Typography className={HakkımdaClasses.title} variant="h2" >Hakkımda</Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <div className={HakkımdaClasses.avatarLine} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{margin: "0px 85px"}}>
                    <Grid className={HakkımdaClasses.paragraphGrid} item xs={6} >
                        <Typography className={HakkımdaClasses.paragraph} variant="body1" display="inline" paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl orci, suscipit pulvinar condimentum in, pharetra quis ligula. 
                        Nunc a lacus facilisis, tempor tellus ut, feugiat purus. Aenean sit amet aliquam urna. Fusce laoreet metus massa, sed malesuada enim commodo id. 
                        Nulla posuere efficitur magna, eu consectetur nibh. Quisque venenatis arcu nec cursus pharetra. Aenean sodales auctor justo vel eleifend. 
                        Vivamus rutrum erat laoreet consequat elementum. Fusce gravida risus et eros dapibus, vitae scelerisque nisi pellentesque. 
                        Ut tempus cursus orci congue tristique. Vivamus et interdum arcu. Fusce nec tempus lorem. Aliquam in rhoncus urna.</Typography>
                    </Grid>

                    <Grid className={HakkımdaClasses.paragraphGrid} item xs={6} >
                        <Typography className={HakkımdaClasses.paragraph} variant="body1" display="inline" paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl orci, suscipit pulvinar condimentum in, pharetra quis ligula. 
                        Nunc a lacus facilisis, tempor tellus ut, feugiat purus. Aenean sit amet aliquam urna. Fusce laoreet metus massa, sed malesuada enim commodo id. 
                        Nulla posuere efficitur magna, eu consectetur nibh. Quisque venenatis arcu nec cursus pharetra. Aenean sodales auctor justo vel eleifend. 
                        Vivamus rutrum erat laoreet consequat elementum. Fusce gravida risus et eros dapibus, vitae scelerisque nisi pellentesque. 
                        Ut tempus cursus orci congue tristique. Vivamus et interdum arcu. Fusce nec tempus lorem. Aliquam in rhoncus urna.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            
        </React.Fragment>
    )
}

export default Hakkımda;