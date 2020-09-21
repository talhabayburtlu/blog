import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { Grid,  Breadcrumbs, Link, Typography} from "@material-ui/core";
import MUIRichTextEditor from 'mui-rte'
import axios from "axios";

import {BlogItems,IndividualItems} from "../../../containers/Blog/BlogItems";
import PostShareStyles from "./PostShareStyles"
import BlogNavbar from "../../../components/Blog/BlogNavbar/BlogNavbar";
import * as actions from "../../../store/actions/index";

class PostShare extends Component {
    state = {
        defaultValue: null
    }

    onSaveHandler = (data) => {
        const parsedData = JSON.parse(data);
        parsedData.breadcrumbs = [
            BlogItems[this.props.match.params.tabID] , 
            IndividualItems[this.props.match.params.tabID][this.props.match.params.itemID]  
        ]

        if (!this.state.defaultValue) {
            axios({method: "POST" , url: "/posts" , data: parsedData, headers: {Authorization: "Bearer " + this.props.token}})
            .then((response) => {
            this.props.onSnackbarOpen("Yeni paylaşım yaptınız!" , "success")
            this.props.history.push("/blog")
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            axios({method: "PUT" , url: "/post/" + this.props.location.defaultValue._id , data: parsedData, headers: {Authorization: "Bearer " + this.props.token}})
            .then((response) => {
            this.props.onSnackbarOpen("Paylaşımı düzenlediniz!" , "success")
            this.props.history.push("/blog")
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    componentDidMount() {
        if (this.props.token === null) {
            this.props.history.push("/blog")
        }

        const value = !this.props.location.defaultValue ? null : {blocks: this.props.location.defaultValue.blocks , entityMap : this.props.location.defaultValue.entityMap}
        if (value && value.entityMap === undefined)
            value.entityMap = {}

        this.setState({defaultValue: !this.props.location.defaultValue ? null : JSON.stringify(value)})

    }

    componentDidUpdate() {
        console.log(this.props)

        if (this.props.token === null && !(this.props.match.params.tabID && this.props.match.params.ItemID)) {
            this.props.history.push("/blog")
        }
    }

    render() {
        const {classes} = this.props;
        const value = !this.props.location.defaultValue ? null : {blocks: this.props.location.defaultValue.blocks , entityMap : this.props.location.defaultValue.entityMap}
        if (value && value.entityMap === undefined)
            value.entityMap = {}
        const defaultValue = !this.props.location.defaultValue ? null : JSON.stringify(value)
    
        return (
            <React.Fragment>
                {console.log(this.props)}
                <Grid container className={classes.grid}>
                    <Grid container item style={{marginBottom: "25px"}}>
                        <BlogNavbar
                            currentTabID={this.props.match.params.tabID} 
                            token={this.props.token}
                            onItemChangeHandler={(selectedItemId) => this.props.history.push({pathname: "/blog" , state: {selectedItemId}})} 
                        />
                    </Grid>
                    <Grid container item className={classes.gridContainerItem}>
                        <Grid item xs={8} style={{marginTop: "25px"}}>
                            <Breadcrumbs separator="→">
                                <Link className={classes.breadCrumb} color="primary" href="/blog">Blog</Link>
                                <Typography className={classes.breadCrumb} color="primary">{
                                    BlogItems[this.props.match.params.tabID]
                                }</Typography>
                                <Typography className={classes.breadCrumb} color="primary">{
                                    IndividualItems[this.props.match.params.tabID][this.props.match.params.itemID]
                                } </Typography>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={4} align="right" style={{marginTop: "25px"}}>
                            <Typography className={classes.breadCrumb} color="primary">{defaultValue ? "Paylaşım Düzenleme" : "Yeni Paylaşım" }</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ borderRadius: "5px" , minHeight: "475px"}}>
                            <MUIRichTextEditor className={classes.textEditor}
                            defaultValue={defaultValue}
                            label="Buraya paylaşımı yazınız." 
                            toolbar inlineToolbar 
                            onSave={(data) => this.onSaveHandler(data)}/>
                        </Grid>
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
        onSnackbarOpen : (message,severity) => dispatch((actions.openSnackbar(message,severity))),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PostShareStyles(PostShare)));