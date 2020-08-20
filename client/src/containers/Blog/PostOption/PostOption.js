import React , {Component} from "react";
import {Grid, Button, Typography, IconButton, Menu, MenuItem,  Dialog, DialogContent, DialogActions} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from "axios";

import PostOptionStyles from "./PostOptionStyles"

class PostOption extends Component {
    state = {
        menuAnchorEl: null,
        dialogAnchorEl: false,
    }

    handleClick = event => {
        this.setState({ menuAnchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ menuAnchorEl: null });
    };

    onDialogOpenHandler = (event) => {
        this.setState({dialogAnchorEl: true})
    }

    onDialogCloseHandler = () => {
        this.setState({dialogAnchorEl: false});
    }

    onDeletePostHandler = async () => {
        await axios({method: "DELETE" , url: "/post/" + this.props._id , headers: {Authorization: "Bearer " + this.props.token}})
        .then(() => {
            this.props.onItemChangeHandler(this.props.currentItemID)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} style={{margin: "15px"}} > 
                    <MoreVertIcon />
                </IconButton>
                <Menu id="simple-menu" anchorEl={this.state.menuAnchorEl} 
                    keepMounted open={Boolean(this.state.menuAnchorEl)} onClose={this.handleClose}
                    style={{border: "1px solid #335C67"}} 
                    transformOrigin={{vertical: 'top',horizontal: 'right'}} variant="selectedMenu"
                    style={{marginTop: "-10px"}}>
                    <MenuItem className={[classes.button, classes.cardButton].join(" ")} >PAYLAŞIMI DÜZENLE</MenuItem>
                    <MenuItem className={[classes.button, classes.cardButton].join(" ")} 
                            onClick={() => {this.onDialogOpenHandler(); this.handleClose()}}>PAYLAŞIMI SİL</MenuItem>
                    <Dialog
                            open={this.state.dialogAnchorEl}
                            onClose={this.onDialogCloseHandler}>
                            <DialogContent>
                                <Typography className={classes.cardTitle} variant="h6">Bu paylaşımı silmek istiyor musunuz?</Typography>
                            </DialogContent>
                            <DialogActions>
                                <Grid item xs={6} align="center">
                                    <Button className={[classes.button, classes.successButton].join(" ")} variant="contained" onClick={this.onDeletePostDialogCloseHandler}>SILME</Button>
                                </Grid>
                                <Grid item xs={6} align="center">
                                    <Button className={[classes.button, classes.failButton].join(" ")} 
                                            variant="contained" 
                                            onClick={() => {
                                                this.onDialogCloseHandler(); this.onDeletePostHandler()}}>SIL</Button>
                                </Grid>
                            </DialogActions>
                        </Dialog>
                </Menu>
            </React.Fragment>
        )
    }
}

export default PostOptionStyles(PostOption);