import React, {useEffect} from "react";
import {withRouter} from "react-router-dom"
import { Grid,  Breadcrumbs, Link, Typography} from "@material-ui/core";
import MUIRichTextEditor from 'mui-rte'
import axios from "axios";
import {convertFromRaw,ContentState} from "draft-js"

import BlogItems  from "../../containers/Blog/BlogItems"
import PostShareStyles from "./PostShareStyles"

const PostShare = (props) => {
    const PostShareClasses = PostShareStyles();
    const value = !props.location.defaultValue ? null : {blocks: props.location.defaultValue.blocks , entityMap : props.location.defaultValue.entityMap}
    if (value && value.entityMap === undefined)
        value.entityMap = {}
    
    console.log(value)
    const defaultValue = !props.location.defaultValue ? null : JSON.stringify(value)

    const onSaveHandler = (data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData)
        parsedData.breadcrumbs = [BlogItems[props.match.params.tabID]]

        if (!defaultValue) {
            axios({method: "POST" , url: "/posts" , data: parsedData, headers: {Authorization: "Bearer " + props.location.token}})
            .then((response) => {
            console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            axios({method: "PUT" , url: "/post/" + props.location.defaultValue._id , data: parsedData, headers: {Authorization: "Bearer " + props.location.token}})
            .then((response) => {
            console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        const auth = async() => {
            await axios({method: "GET" , url:"/blog/admin/auth" , headers: {Authorization: "Bearer " + props.location.token}})
            .then((response) => {
                
            })
            .catch((e) =>  props.history.push("/blog"))
        }

        auth();
    }, []) 

    return (
        <React.Fragment>
            <Grid container className={PostShareClasses.grid}>
                <Grid container item className={PostShareClasses.gridContainerItem}>
                    <Grid item xs={8} style={{marginTop: "25px"}}>
                        <Breadcrumbs separator=">">
                            <Link className={PostShareClasses.breadCrumb} color="primary" href="/blog">Blog</Link>
                            <Typography className={PostShareClasses.breadCrumb} color="primary">{BlogItems[props.match.params.tabID]}</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={4} align="right" style={{marginTop: "25px"}}>
                        <Typography className={PostShareClasses.breadCrumb} color="primary">{defaultValue ? "Paylaşım Düzenleme" : "Yeni Paylaşım" }</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ borderRadius: "5px" , minHeight: "475px"}}>
                        <MUIRichTextEditor className={PostShareClasses.textEditor}
                        defaultValue={defaultValue}
                        label="Buraya paylaşımı yazınız." 
                        toolbar inlineToolbar 
                        onSave={(data) => onSaveHandler(data)}/>
                    </Grid>
                </Grid>
            </Grid>               
        </React.Fragment>
    )
}

export default withRouter(PostShare);