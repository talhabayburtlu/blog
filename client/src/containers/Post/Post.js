import React , {Component} from "react";
import {Redirect, withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { Grid, Typography, Card, CardHeader , CardContent , CircularProgress, Hidden,Grow, Fade} from "@material-ui/core";
import axios from "axios";
import MUIRichTextEditor from 'mui-rte'

import PostStyles from "./PostStyles";
import PostOption from "../Blog/PostOption/PostOption";
import BlogNavbar from "../../components/Blog/BlogNavbar/BlogNavbar";
import BlogDrawer from "../../components/Blog/Drawer/BlogDrawer";
import Decorators from "../../components/Blog/Decorators/Decorators";

class Post extends Component {
    state = {
        post: null,
        error: false
    }

    componentDidMount() {
        const _id = this.props.match.params._id;

        const fetchData = async() => {
            await axios({method: "GET" , url:"/post/" + _id})
            .then((response) => {
                console.log(response)
                this.setState({post: response.data})
            })
            .catch((e) => {
                this.setState({error: true})
            })
        }

        fetchData();
    }

    render() {
        const {classes} = this.props;

        return this.state.post === null ? ( 
            <Grid container justify="center"><CircularProgress size="160px" style={{margin: "50px"}}/></Grid> 
        ):(
        <React.Fragment>
            {this.state.post === null ? null :
            this.state.error ? <Redirect to="/blog" /> :
            <Fade in={true} timeout={1000}>
                <Grid container className={classes.grid}>
                    <Hidden xsDown >
                        <BlogNavbar
                            currentTabID={0} 
                            currentItemID={0}
                            onItemChangeHandler={(selectedTabID,selectedItemID) => this.props.history.push(
                                {pathname: "/blog" , state: {currentTabID: selectedTabID, currentItemID: selectedItemID }})}
                        />
                    </Hidden>

                    <Hidden smUp>
                        <BlogDrawer currentTabID={0}
                                    currentItemID={0} 
                                    onItemChangeHandler={(selectedTabID,selectedItemID) => this.props.history.push(
                                        {pathname: "/blog" , state: {currentTabID: selectedTabID, currentItemID: selectedItemID }}
                                    )}   
                        />
                    </Hidden>
                    
                    <Grow in={true} timeout={1000}>
                        <Grid item xs={12}>
                            <Card className={classes.card}>
                                <Grid container>
                                    <Grid item xs={9}>
                                        <CardHeader title={<Typography className={classes.cardTitle} variant="h5">{this.state.post.blocks[0].text}</Typography>}
                                                subheader={<Typography className={classes.cardSubtitle} variant="body2">{((new Date(this.state.post.createdAt)).toLocaleString())}</Typography>}></CardHeader>
                                    </Grid>
                                    {this.props.token !== null ? <Grid item xs={3} align="right">
                                        <PostOption post={this.state.post} token={this.props.token} currentTabID={this.props.location.currentTabID} onDeleteHandler={() => this.props.history.push("/blog")}/>
                                    </Grid> : null}
                                </Grid>
                                    
                                    
                                    <CardContent className={classes.cardContent}>
                                        <MUIRichTextEditor toolbar={false} 
                                            defaultValue={JSON.stringify({
                                                blocks: this.state.post.blocks.slice(1) , 
                                                entityMap: this.state.post.entityMap ? this.state.post.entityMap : {}
                                            })} 
                                            decorators={Decorators}
                                            readOnly
                                        />
            
                                    </CardContent>
                                </Card>
                        </Grid>
                    </Grow>
                </Grid>
            </Fade> }
        </React.Fragment> 
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.admin.token
    };
};



export default connect(mapStateToProps,null)(withRouter(PostStyles(Post)));