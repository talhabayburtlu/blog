import React , {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {Grid , Button , Typography, Card, CardHeader, CardContent , CircularProgress,  Hidden, Fade, Grow} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios";
import MUIRichTextEditor from 'mui-rte'

import BlogStyles from "./BlogStyles"
import {BlogItems, IndividualItems}  from "./BlogItems"
import PostOption from "./PostOption/PostOption"
import BlogNavbar from "../../components/Blog/BlogNavbar/BlogNavbar";
import BlogDrawer from "../../components/Blog/Drawer/BlogDrawer";
import BlogSnackbar from "../../components/Snackbar/BlogSnackbar";
import SearchTextField from "../../components/SearchTextField/SearchTextField";
import * as actions from "../../store/actions/index";

class Blog extends Component {
    // STATE

    state = {
        currentTabID : 0,
        currentItemID: 0,
        posts: [],
        total: 0,
        currentPage: 1,
        shouldRenderPosts: false,
        deletePostDialog: false,
        search: "",
        searchFieldRef: null
    }

    // FUNCTIONS

    onItemChangeHandler = async (tabID = this.state.currentTabID,itemID = this.state.currentItemID) => {
        this.setState({posts: [] , shouldRenderPosts: false})

        const currentPage = tabID !== this.state.currentTabID ? 1 : this.state.currentPage;
        let specified = tabID !== 0 ? "/"+ BlogItems[tabID] : "";
        specified += itemID !== 0 ? "/" + IndividualItems[tabID][itemID] : ""

        await axios({method: "get" , url: "/posts" + specified + "/" + (currentPage - 1) , params: this.props.search})
        .then((response) => {
            this.setState({
                currentTabID: tabID,
                currentItemID: itemID ,
                posts: response.data.posts , 
                total: response.data.total, 
                currentPage, 
                shouldRenderPosts: true,
            })
        })
        .catch((e) => {
            console.log(e)
        })   
    }

    onCurrentPageChangeHandler = async (event,pageValue) => {
        await this.setState({currentPage: pageValue, shouldRenderPosts: false})
        await this.onItemChangeHandler()
    }

    async componentDidMount() {
        if ( this.props.location.state && 
            this.props.location.state.currentTabID && this.props.location.state.currentItemID){ // Handeling 
                await this.onItemChangeHandler(this.props.location.state.currentTabID, this.props.location.state.currentItemID);
        } else {
            await this.onItemChangeHandler();
        }
        
        this.setState({searchFieldRef: React.createRef()})
    } 

    shouldComponentUpdate(nextProps,nextState) {

        if (JSON.stringify(nextState.posts) === JSON.stringify(this.state.posts)) {
            return false;
        } else {
            // console.log(this.state)
        }

        return true;
    }

    // COMPONENTS

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Fade in={true} timeout={1000}>
                    <Grid container className={classes.grid}>
                        <Hidden xsDown >
                            <BlogNavbar currentTabID={this.state.currentTabID}
                                        currentItemID={this.state.currentItemID} 
                                        onItemChangeHandler={this.onItemChangeHandler}
                            />
                        </Hidden>

                        <Hidden smUp>
                            <BlogDrawer currentTabID={this.state.currentTabID}
                                        currentItemID={this.state.currentItemID} 
                                        onItemChangeHandler={this.onItemChangeHandler}
                            />
                        </Hidden>
                        

                        <Grid item container xs={12}>
                            <Grid item xs={12} style={{margin: "30px 0px"}}>
                                <Typography className={classes.title} variant="h4">
                                    {BlogItems[this.state.currentTabID]}
                                    {this.state.currentTabID !== 0 ? " - " + IndividualItems[this.state.currentTabID][this.state.currentItemID] : null}
                                </Typography>
                            </Grid>

                            <Grid item xs={0} align="right" style={{margin: "35px 0px"}}>
                                {/*<SearchTextField  onChange={async (event) => {
                                        await this.props.onUpdateSearch(event.target.value)
                                        await this.onItemChangeHandler()
                                    }}
                                />*/}
                                {/*<TextField
                                    placeholder="Başlıklarda Ara"
                                    onChange={async (event) => {
                                        await this.props.onUpdateSearch(event.target.value)
                                        await this.onItemChangeHandler()
                                    }}
                                    InputProps={{endAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )}}
                                    autoFocus
                                    > </TextField>*/}
                            </Grid>

                            {this.state.shouldRenderPosts ? this.state.posts.map((post,index) =>
                            <Grow in={true} timeout={1000}>
                                <Grid item xs={12} key={index}>
                                    <Card className={classes.card}>
                                        <Grid container >
                                            <Grid item xs={9}>
                                                <CardHeader title={<Typography className={classes.cardTitle} variant="h5">{post.blocks[0].text}</Typography>}
                                                            subheader={<Typography className={classes.cardSubtitle} variant="body2">{((new Date(post.createdAt)).toLocaleString())}</Typography>}></CardHeader>
                                            </Grid>
                                            {this.props.token !== null ? <Grid item xs={3} align="right">
                                            <PostOption 
                                                post={post} 
                                                currentTabID={BlogItems.indexOf(post.breadcrumbs[0])}
                                                currentItemID={IndividualItems[BlogItems.indexOf(post.breadcrumbs[0])].indexOf(post.breadcrumbs[1])} 
                                                onDeleteHandler={this.onItemChangeHandler}/>
                                            </Grid> : null}
                                        </Grid>

                                        <CardContent>

                                            <MUIRichTextEditor toolbar={false} defaultValue={JSON.stringify({
                                                blocks: [post.blocks[1]], 
                                                entityMap: post.entityMap ? post.entityMap : {}
                                            })} readOnly/>

                                            
                                            <Grid container alignItems="center">
                                                <Grid item xs={3}>&hellip;</Grid> 
                                                <Grid item xs={9} align="right">
                                                    <Link className={classes.link} to={{pathname: "/blog/post/" + post._id, currentTabID: this.state.currentTabID, onItemChangeHandler: this.onItemChangeHandler}}>
                                                        <Button className={[classes.button , classes.cardButton].join(" ")} 
                                                                variant="contained" 
                                                                size="large" >DEVAMINI OKU</Button>
                                                    </Link>
                                                    
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                </Grow>
                            ) : <Grid container justify="center"><CircularProgress size="160px" style={{margin: "50px"}}/></Grid> }
                        </Grid> 
                        
                        <Grid container justify="center">
                            <Pagination count={Math.ceil(this.state.total / 10)} page={this.state.currentPage} size="large" color="primary" onChange={this.onCurrentPageChangeHandler} />
                        </Grid>

                        <BlogSnackbar />
                    </Grid>
                </Fade>           
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.admin.token,
        search: state.post.search
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateSearch : (value) => dispatch(actions.updateSearch(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BlogStyles(Blog)));