import React, {useState} from "react";
import { connect } from "react-redux";
import {IconButton, List, ListItem, ListItemText, SwipeableDrawer, Typography,AppBar,Button, Dialog,TextField,Grid,Snackbar,SnackbarContent} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link, withRouter } from "react-router-dom";

import {BlogItems, IndividualItems} from "../../../containers/Blog/BlogItems";
import Tab from "./Tab";
import BlogSnackbar from "../../Snackbar/BlogSnackbar";
import BlogDrawerStyles from "./BlogDrawerStyles";
import * as actions from "../../../store/actions/index";

const BlogDrawer = (props) => {
    const BlogDrawerClasses = BlogDrawerStyles();

    const [open, setOpen] = React.useState(false);
    const [dialogAnchorEl, setDialogAnchorEl] = React.useState(false)
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const adminLogoutButton = () => {
        return (
            <Button className={[BlogDrawerClasses.button,BlogDrawerClasses.buttonHover].join(" ")} 
                        variant="text" onClick={() =>  {props.onLogout(); setOpen(false); props.onSnackbarOpen("Çıkış Yaptınız!", "success");}}> Çıkıs Yap </Button>
        )
    }

    const adminLoginButton = () => {
        return (
            <Button className={[BlogDrawerClasses.button,BlogDrawerClasses.buttonHover].join(" ")}  
                        variant="text" onClick={() =>  {setDialogAnchorEl(true); setOpen(false);}}> Giris Yap </Button>
        )
    }

    const adminLoginDialog = () => {
        return(
            <Dialog
                PaperProps={{style: {border: "1px solid #7E1014", backgroundColor: "#FFF3B0"}}}
                open={dialogAnchorEl}
                onClose={() => {setDialogAnchorEl(false)}}>
                    
                    <Grid container className={BlogDrawerClasses.popover} alignItems="center">
                        <Grid item xs={12} align="center">
                            <Typography className={BlogDrawerClasses.cardTitle} variant="h6"> Lütfen Giriş Yapınız</Typography>
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
                            <Button className={[BlogDrawerClasses.button,BlogDrawerClasses.buttonHover].join(" ")}
                                    onClick={() => props.onLogin(usernameInput, passwordInput, () => {setDialogAnchorEl(false); setOpen(false)} , props.onSnackbarOpen)}
                                    style={{marginTop: "25px", width: "auto"}}> Giris Yap </Button>
                        </Grid>
                    </Grid>

            </Dialog>
        )   
    }

    return (
        <React.Fragment>
            <IconButton onClick={() => setOpen(true)}>
                <MoreVertIcon />
            </IconButton>
            <SwipeableDrawer classes={{paper: BlogDrawerClasses.root}} 
                open={open} variant="temporary" 
                anchor="left" 
                onOpen={() => setOpen(true)}  
                onClose={() => setOpen(false)}>
                <React.Fragment>
                    <AppBar className={BlogDrawerClasses.appbar} position="static" color="primary" />
                    <Typography className={BlogDrawerClasses.header} variant="h5" align="center">SEKMELER</Typography>
                    {BlogItems.map((item,index) => (
                        <List dense style={{padding: "4px 0px"}}>
                            <Tab BlogItemsIndex={index} onItemChangeHandler={props.onItemChangeHandler} onClose={() => setOpen(false)}/>
                        </List>
                    ))}

                    {props.currentTabID !== 0 && props.currentItemID !== 0 && props.token  ? 
                    <React.Fragment>
                        <Typography className={BlogDrawerClasses.header} variant="h5" align="center">YENI PAYLASIM</Typography>
                        <Link to={{pathname: "/blog/post-share/" + props.currentTabID + "/" + props.currentItemID, 
                                token: props.token, 
                                currentTabID: props.currentTabID,
                                currentItemID: props.currentItemID,
                            }} style={{textDecoration: "none"}}>
                            <Button className={[BlogDrawerClasses.button,BlogDrawerClasses.buttonHover].join(" ")} size="large" variant="text">
                                {IndividualItems[props.currentTabID][props.currentItemID]} Yeni Paylaşım
                            </Button> 
                        </Link>
                    </React.Fragment> 
                    : null }

                    {props.token ? <Typography className={BlogDrawerClasses.header} variant="h5" align="center">CIKIS</Typography>
                    : <Typography className={BlogDrawerClasses.header} variant="h5" align="center">GIRIS</Typography> }
                    
                    {props.token ? adminLogoutButton() : adminLoginButton()}
                </React.Fragment>
            </SwipeableDrawer>

            {adminLoginDialog()}
        
            <BlogSnackbar />
        </React.Fragment>
        
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


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BlogDrawer));