import React , {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {Grid, AppBar,  Button, ButtonGroup, Typography, Card, CardHeader, CardContent, Popover, TextField, } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios";

import BlogStyles from "./BlogStyles"
import BlogItems  from "./BlogItems"
import PostOption from "./PostOption/PostOption"
import * as actions from "../../store/actions/index";

class Blog extends Component {
    state = {
        currentItemID : 0,
        posts: [],
        total: 0,
        currentPage: 1,
        shouldRenderPosts: false,
        deletePostDialog: false,
        anchorElLogin: null,
        anchorElOptions: null,
        usernameInput: "",
        passwordInput: "",
        token: null
    }

    onPopoverButtonClickHandler = (event) => {
        this.setState({anchorElLogin : event.currentTarget});
    }

    onPopoverCloseHandler = () => {
        this.setState({anchorElLogin : null});
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

    adminLoginPopover(classes) {
        const open = Boolean(this.state.anchorElLogin);
        const id = open ? 'simple-popover' : undefined

        return (
            <React.Fragment>
                <Button className={classes.button}  aria-describedby={id} size="large" 
                        variant="text" onClick={this.onPopoverButtonClickHandler} style={{margin:"0px"}}> Admin Girisi </Button>
                <Popover id={id} open={open} anchorEl={this.state.anchorElLogin} onClose={this.onPopoverCloseHandler } 
                    anchorOrigin={{vertical: 'bottom',horizontal: 'right'}}
                    transformOrigin={{vertical: 'top',horizontal: 'right'}}>
                    <Grid container className={classes.popover} alignItems="center">
                        <Grid item xs={12} align="center">
                            <Typography className={classes.cardTitle} variant="h6"> Lütfen Giriş Yapınız</Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <form noValidate autoComplete="off">
                                <Grid item xs={12}>
                                    <TextField id="standard-required"
                                            label="Admin Kullanıcı Adı"
                                            value={this.state.usernameInput} 
                                            onInput={(e) => this.setState({usernameInput: e.target.value})} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="password" 
                                            label="Admin Kullanıcı Şifresi" 
                                            value={this.state.passwordInput}
                                            onInput={(e) => this.setState({passwordInput: e.target.value})} />
                                </Grid>
                            </form>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Button className={classes.button} 
                                    onClick={() => this.props.onLogin(this.state.usernameInput, this.state.passwordInput)} 
                                    style={{marginTop: "25px"}}> Giris Yap </Button>
                        </Grid>
                    </Grid>
                </Popover>
            </React.Fragment>
        )
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
                                {this.state.currentItemID !== 0 && this.props.token ?
                                    <Link className={classes.link} to={{pathname: "/blog/post-share/" + this.state.currentItemID, token: this.props.token}}>
                                        <Button className={classes.button} size="large" variant="text">{BlogItems[this.state.currentItemID]} Yeni Paylaşım</Button> 
                                    </Link>: null }
                                {this.adminLoginPopover(classes)}
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
                                                <Link className={classes.link} to={{pathname: "/blog/post/" + post._id, token: this.props.token, currentItemID: this.state.currentItemID}}>
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
        onLogin: (username,password) => dispatch(actions.login(username,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BlogStyles(Blog)));