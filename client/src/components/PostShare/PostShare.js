import React from "react";
import {Redirect} from "react-router-dom"
import { Grid,  Breadcrumbs, Link, Typography} from "@material-ui/core";
import MUIRichTextEditor from 'mui-rte'
import axios from "axios";

import BlogItems  from "../../containers/Blog/BlogItems"
import PostShareStyles from "./PostShareStyles"

const Post = (props) => {
    const PostShareClasses = PostShareStyles();

    const onSaveHandler = (data) => {
        const parsedData = JSON.parse(data);
        parsedData.breadcrumbs = [BlogItems[props.match.params.tabID]]

        axios({method: "post" , url: "/posts" , data: parsedData})
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <React.Fragment>
            {props.location.token === undefined ?  <Redirect to="/blog"></Redirect> : null}
            <Grid container className={PostShareClasses.grid}>
                <Grid container item className={PostShareClasses.gridContainerItem}>
                    <Grid item xs={12} style={{marginTop: "25px"}}>
                        <Breadcrumbs separator=">">
                            <Link className={PostShareClasses.breadCrumb} color="primary" href="/blog">Blog</Link>
                            <Typography className={PostShareClasses.breadCrumb} color="primary">{BlogItems[props.match.params.tabID]}</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12} style={{ borderRadius: "5px" , minHeight: "475px"}}>
                        <MUIRichTextEditor label="Buraya paylaşımı yazınız." toolbar inlineToolbar className={PostShareClasses.textEditor} onSave={(data) => onSaveHandler(data)}/>
                    </Grid>
                </Grid>
            </Grid>               
        </React.Fragment>
    )
}

export default Post;