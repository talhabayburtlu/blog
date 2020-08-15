import React, {useState} from "react";
import {withRouter} from "react-router-dom"
import { Grid,  Breadcrumbs, Link, Typography} from "@material-ui/core";
import MUIRichTextEditor from 'mui-rte'
import axios from "axios";

import BlogItems  from "./BlogItems"
import PostStyles from "./PostStyles"

const Post = (props) => {
    const PostClasses = PostStyles();

    const onSaveHandler = (data) => {
        const parsedData = JSON.parse(data);
        parsedData.breadcrumbs = [BlogItems[props.match.params.tabID]]

        axios({method: "post" , url: "http://localhost:9000/posts" , data: parsedData})
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <React.Fragment>
            <Grid container className={PostClasses.grid}>
                <Grid container item className={PostClasses.gridContainerItem}>
                    <Grid item xs={12} style={{marginTop: "25px"}}>
                        <Breadcrumbs separator=">">
                            <Link className={PostClasses.breadCrumb} color="primary" href="/blog">Blog</Link>
                            <Typography className={PostClasses.breadCrumb} color="primary">{BlogItems[props.match.params.tabID]}</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12} style={{ borderRadius: "5px" , minHeight: "475px"}}>
                        <MUIRichTextEditor label="Buraya paylaşımı yazınız." toolbar inlineToolbar className={PostClasses.textEditor} onSave={(data) => onSaveHandler(data)}/>
                    </Grid>
                </Grid>
            </Grid>               
        </React.Fragment>
    )
}

export default withRouter(Post);