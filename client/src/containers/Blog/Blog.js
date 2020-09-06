import React , {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {Grid , Button , Typography, Card, CardHeader, CardContent} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios";

import BlogStyles from "./BlogStyles"
import BlogItems  from "./BlogItems"
import PostOption from "./PostOption/PostOption"
import BlogNavbar from "../../components/Blog/BlogNavbar/BlogNavbar";
import * as actions from "../../store/actions/index";

class Blog extends Component {
    state = {
        currentItemID : 0,
        posts: [],
        total: 0,
        currentPage: 1,
        shouldRenderPosts: false,
        deletePostDialog: false,
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
        const itemId = this.props.location.state !== undefined && this.props.location.state.selectedItemId !== null ? 
            this.props.location.state.selectedItemId : 0;

        this.onItemChangeHandler(itemId);
    }

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Grid container className={classes.grid}>
                    <BlogNavbar currentItemID={this.state.currentItemID} 
                                token={this.props.token} 
                                onItemChangeHandler={this.onItemChangeHandler} 
                                onLogin={this.props.onLogin} onLogout={this.props.onLogout} />

                    <Grid item container xs={12}>
                        <Grid item xs={12} style={{margin: "30px 0px"}}>
                            <Typography className={classes.title} variant="h4">{BlogItems[this.state.currentItemID]}</Typography>
                        </Grid>

                        {this.state.shouldRenderPosts ? this.state.posts.map((post,index) => 
                            <Grid item xs={12} key={index}>
                                <Card className={classes.card}>
                                    <Grid container >
                                        <Grid item xs={9}>
                                            <CardHeader title={<Typography className={classes.cardTitle} variant="h5">{post.blocks[0].text}</Typography>}
                                                        subheader={<Typography className={classes.cardSubtitle} variant="body2">{((new Date(post.createdAt)).toLocaleString())}</Typography>}></CardHeader>
                                        </Grid>
                                        {this.props.token !== null ? <Grid item xs={3} align="right">
                                           <PostOption post={post} token={this.props.token} currentItemID={this.state.currentItemID} onDeleteHandler={this.onItemChangeHandler}/>
                                        </Grid> : null}
                                    </Grid>

                                    <CardContent>
                                        <Typography className={classes.cardBody} variant="body1" paragraph >{post.blocks[1].text}</Typography>
                                        <Grid container alignItems="center">
                                            <Grid item xs={3}>&hellip;</Grid> 
                                            <Grid item xs={9} align="right">
                                                <Link className={classes.link} to={{pathname: "/blog/post/" + post._id, currentItemID: this.state.currentItemID, onItemChangeHandler: this.onItemChangeHandler}}>
                                                    <Button className={[classes.button , classes.cardButton].join(" ")} 
                                                            variant="contained" 
                                                            size="large" >DEVAMINI OKU</Button>
                                                </Link>
                                                
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

const mapStateToProps = state => {
    return {
        token: state.admin.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username,password,closeLoginPopover) => dispatch(actions.login(username,password,closeLoginPopover)),
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BlogStyles(Blog)));