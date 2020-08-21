import React , {useState, useEffect} from "react";
import {Redirect, withRouter} from "react-router-dom"
import { Grid, Typography, Card, CardHeader , CardContent} from "@material-ui/core";
import axios from "axios";

import PostStyles from "./PostStyles"
import PostOption from "../Blog/PostOption/PostOption"

const Post = (props) => {
    const PostClasses = PostStyles();
    const [post,setPost] = useState(null)

    useEffect(() => {
        const _id = props.match.params._id;

        const fetchData = async() => {
            await axios({method: "GET" , url:"/post/" + _id})
            .then((response) => {
                console.log(response)
                setPost(response.data)
            })
            .catch((e) => {
                setPost({error: true})
                setPost(e)
            })
        }

        fetchData();
    }, []) 

    return (
       <React.Fragment>
           {post === null ? null :
           post.error ? <Redirect to="/blog" /> :
           <Grid container className={PostClasses.grid}>
               <Grid item xs={12}>
                <Card className={PostClasses.card}>
                    <Grid container>
                        <Grid item xs={9}>
                            <CardHeader title={<Typography className={PostClasses.cardTitle} variant="h5">{post.blocks[0].text}</Typography>}
                                    subheader={<Typography className={PostClasses.cardSubtitle} variant="body2">{((new Date(post.createdAt)).toLocaleString())}</Typography>}></CardHeader>
                        </Grid>
                        {props.location.token !== undefined ? <Grid item xs={3} align="right">
                            <PostOption post={post} token={props.location.token} currentItemID={props.location.currentItemID} onDeleteHandler={() => props.history.push("/blog")}/>
                        </Grid> : null}
                    </Grid>
                        
                        
                        <CardContent className={PostClasses.cardContent}>
                            {post.blocks.slice(1).map((block) => {
                                if (block.type === "unstyled") {
                                    return <Typography className={PostClasses.cardBody} variant="body1" paragraph key={block.key}>
                                        {block.text}
                                    </Typography>
                                } else if (block.type === "atomic") {
                                    const data = post.entityMap[0][block.entityRanges[0].key].data;
                                    return <Grid item xs={12} align="center" key={block.key}>
                                        <img height={data.height} width={data.width} alt={data.url} src={data.url}/>
                                    </Grid>       
                                }
                                return null   
                            })}
                            
                        </CardContent>
                    </Card>
               </Grid>
           </Grid> }
       </React.Fragment> 
    )
}

export default withRouter(Post);