import React, {useState} from "react";
import { connect } from "react-redux";
import {Grid, AppBar,  Button, ButtonGroup, Popover, Typography, TextField, Snackbar, SnackbarContent } from "@material-ui/core";
import { Link } from "react-router-dom";

import BlogNavbarStyles from "./BlogNavbarStyles";
import BlogItems  from "../../../containers/Blog/BlogItems";
import * as actions from "../../../store/actions/index";

const BlogNavbar = (props) => {
    const BlogNavbarClasses = BlogNavbarStyles();
    const [anchorElLogin, setAnchorElLogin] = useState(null);
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    
    const onPopoverButtonClickHandler = (event) => {
        setAnchorElLogin(event.currentTarget);
    };

    const onPopoverCloseHandler = () => {
        setAnchorElLogin(null);
    };

    const adminLoginPopover = () => {
        const open = Boolean(anchorElLogin);
        const id = open ? 'simple-popover' : undefined

        return (
            <React.Fragment>
                <Button className={BlogNavbarClasses.button}  aria-describedby={id} size="large" 
                        variant="text" onClick={onPopoverButtonClickHandler} style={{margin:"0px"}}> Admin Girisi </Button>
                <Popover id={id} open={open} anchorEl={anchorElLogin} onClose={onPopoverCloseHandler} 
                    anchorOrigin={{vertical: 'bottom',horizontal: 'right'}}
                    transformOrigin={{vertical: 'top',horizontal: 'right'}}>
                    <Grid container className={BlogNavbarClasses.popover} alignItems="center">
                        <Grid item xs={12} align="center">
                            <Typography className={BlogNavbarClasses.cardTitle} variant="h6"> Lütfen Giriş Yapınız</Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <form noValidate autoComplete="off">
                                <Grid item xs={12}>
                                    <TextField id="standard-required"
                                            label="Admin Kullanıcı Adı"
                                            value={usernameInput} 
                                            onInput={(e) => setUsernameInput(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="password" 
                                            label="Admin Kullanıcı Şifresi" 
                                            value={passwordInput}
                                            onInput={(e) => setPasswordInput(e.target.value)} />
                                </Grid>
                            </form>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Button className={BlogNavbarClasses.button} 
                                    onClick={() => props.onLogin(usernameInput, passwordInput, onPopoverCloseHandler, props.onSnackbarOpen)}
                                    style={{marginTop: "25px"}}> Giris Yap </Button>
                        </Grid>
                    </Grid>
                </Popover>
            </React.Fragment>
        );
    }

    const adminLogoutButton = () => {
        return (
            <Button className={BlogNavbarClasses.button} size="large" 
                        variant="text" onClick={() =>  {props.onLogout(); props.onSnackbarOpen("Çıkış Yaptınız!", "success");}} style={{margin:"0px"}}> Çıkıs Yap </Button>
        )
    }

    return(
        <AppBar position="static" className={BlogNavbarClasses.appbar}>
            <Grid container >
                <Grid item align="left" xs={4}>
                    <ButtonGroup >
                        {BlogItems.map((item,index) => <Button className={BlogNavbarClasses.button} size="large" variant="text" key={item} onClick={() => props.onItemChangeHandler(index)} >{item}</Button>)}
                    </ButtonGroup>
                </Grid>
                <Grid item align="right" xs={8}>
                    {props.currentItemID !== 0 && props.token ?
                        <Link className={BlogNavbarClasses.link} to={{pathname: "/blog/post-share/" + props.currentItemID, 
                            token: props.token, 
                            currentItemID: props.currentItemID,
                            onLogin: props.onLogin,
                            onLogout: props.onLogout
                            }}>
                            <Button className={BlogNavbarClasses.button} size="large" variant="text">{BlogItems[props.currentItemID]} Yeni Paylaşım</Button> 
                        </Link>: null }
                    { props.token === null ? adminLoginPopover() : adminLogoutButton() }
                    <Snackbar 
                        open={props.snackbarOpen}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        autoHideDuration={3000} 
                        onClose={props.onSnackbarClose}
                    >
                        <SnackbarContent 
                            className={props.snackbarSeverity === "success" ? BlogNavbarClasses.snackBarSuccess :
                            props.snackbarSeverity === "error" ? BlogNavbarClasses.snackBarFail : null} 
                            message={props.snackbarMessage} 
                            style={{borderRadius: "10px" }}/>
                    </Snackbar>

                </Grid>
            </Grid>
        </AppBar>
    );
}


const mapStateToProps = state => {
    return {
        token: state.admin.token,
        snackbarOpen : state.snackbar.open,
        snackbarMessage : state.snackbar.message,
        snackbarSeverity : state.snackbar.severity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username,password,closeLoginPopover,onSnackbarOpenHandler) => dispatch(actions.login(username,password,closeLoginPopover,onSnackbarOpenHandler)),
        onLogout: () => dispatch(actions.logout()),
        onSnackbarOpen : (message,severity) => dispatch((actions.openSnackbar(message,severity))),
        onSnackbarClose : () => dispatch(actions.closeSnackbar())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(BlogNavbar);
