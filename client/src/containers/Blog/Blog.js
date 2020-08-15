import React , {Component} from "react";
import {Grid, AppBar,  Button, ButtonGroup, Typography, Card, CardHeader, CardContent} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios";

import BlogStyles from "./BlogStyles"
import BlogItems  from "./BlogItems"

class Blog extends Component {
    state = {
        currentItemID : 0,
        posts: [],
        total: 0,
        currentPage: 1,
        shouldRenderPosts: false
    }

    onItemChangeHandler =  async (itemID) => {
        const currentPage = itemID !== this.state.currentItemID ? 1 : this.state.currentPage;
        const specified = itemID !== 0 ? "/"+ BlogItems[itemID]: "";

        await axios({method: "get" , url: "/posts" + specified + "/" + (currentPage - 1) })
        .then((response) => {
            console.log(response)
            this.setState({currentItemID: itemID, posts: response.data.posts , total: response.data.total, currentPage, shouldRenderPosts: true})
        })
        .catch((e) => {
            console.log(e)
        })   
    }

    onCurrentPageChangeHandler = async (event,pageValue) => {
        await this.setState({currentPage: pageValue, shouldRenderPosts: false})
        await this.onItemChangeHandler(this.state.currentItemID)
    }

    componentDidMount() {
        this.onItemChangeHandler(0);
    }

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Grid container className={classes.grid}>
                    <AppBar position="static" className={classes.appbar}>
                        <Grid container >
                            <Grid item align="left" xs={4}>
                                <ButtonGroup >
                                    {BlogItems.map((item,index) => <Button className={classes.button} size="large" variant="text" key={item} onClick={() => this.onItemChangeHandler(index)} >{item}</Button>)}
                                </ButtonGroup>
                            </Grid>
                            <Grid item align="right" xs={8}>
                                {this.state.currentItemID !== 0 ? 
                                    <Button className={classes.button} size="large" variant="text" href={"/blog/post/" + this.state.currentItemID}>
                                        {BlogItems[this.state.currentItemID]} Yeni Paylaşım</Button> : null }
                                <Button className={classes.button} size="large" variant="text">Admin Girisi</Button>
                            </Grid>
                        </Grid>
                    </AppBar>

                    <Grid item container xs={12}>
                        <Grid item xs={12} style={{margin: "30px 0px"}}>
                            <Typography className={classes.title} variant="h4">{BlogItems[this.state.currentItemID]}</Typography>
                        </Grid>

                        {this.state.shouldRenderPosts ? this.state.posts.map((post,index) => 
                            <Grid item xs={12} key={index}>
                                <Card className={classes.card}>
                                    <CardHeader title={<Typography className={classes.cardTitle} variant="h5">{post.blocks[0].text}</Typography>}
                                                                    subheader={<Typography className={classes.cardSubtitle} variant="body2">{((new Date(post.createdAt)).toLocaleString())}</Typography>}></CardHeader>
                                    <CardContent>
                                        <Typography className={classes.cardBody} variant="body1" paragraph >{post.blocks[1].text}</Typography>
                                        <Grid container alignItems="center">
                                            <Grid item xs={3}>&hellip;</Grid> 
                                            <Grid item xs={9} align="right">
                                                <Button className={[classes.button , classes.cardButton].join(" ")} variant="contained" size="large" >DEVAMINI OKU</Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ) : null }
                    </Grid>  
                    
                    <Grid container justify="center">
                        <Pagination count={Math.ceil(this.state.total / 10)} page={this.state.currentPage} size="large" color="primary" onChange={this.onCurrentPageChangeHandler} />
                    </Grid>   
                </Grid>               
            </React.Fragment>
        )
    }
}

export default BlogStyles(Blog);