import React , {Component} from "react";
import { Typography, Grid, AppBar,  Button, ButtonGroup} from "@material-ui/core";

import BlogStyles from "./BlogStyles"
import BlogItems  from "./BlogItems"

class Blog extends Component {
    state = {
        currentItemID : 0
    }

    onItemChangeHandler(itemID) {
        this.setState({currentItemID: itemID})
    }

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Grid container className={classes.grid}>
                    <AppBar position="static" className={classes.appbar}>
                        <Grid container >
                            <Grid item align="left" xs={4} style={{marginLeft: "8%"}}>
                                <ButtonGroup >
                                    {BlogItems.map((item,index) => <Button className={classes.button} size="large" variant="text" onClick={() => this.onItemChangeHandler(index)} >{item}</Button>)}
                                </ButtonGroup>
                            </Grid>
                            <Grid item align="right" xs={6} style={{marginRight: "8%"}}>
                                {this.state.currentItemID !== 0 ? 
                                    <Button className={classes.button} size="large" variant="text" href={"/blog/post/" + this.state.currentItemID}>
                                        {BlogItems[this.state.currentItemID]} Yeni Paylaşım</Button> : null }
                                <Button className={classes.button} size="large" variant="text">Admin Girisi</Button>
                            </Grid>
                        </Grid>
                    </AppBar>      
                </Grid>               
            </React.Fragment>
        )
    }
}

export default BlogStyles(Blog);