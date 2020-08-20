import React , {useState, useEffect} from "react";
import {Redirect, withRouter} from "react-router-dom"
import { Grid, Typography, Card, CardHeader , CardContent} from "@material-ui/core";
import axios from "axios";

import PostStyles from "./PostStyles"

const Post = (props) => {
    const PostClasses = PostStyles();
    const [post,setPost] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            await axios({method: "GET" , url:"/post/" + props.match.params._id})
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
                        <CardHeader title={<Typography className={PostClasses.cardTitle} variant="h5">{post.blocks[0].text}</Typography>}
                                                        subheader={<Typography className={PostClasses.cardSubtitle} variant="body2">{((new Date(post.createdAt)).toLocaleString())}</Typography>}></CardHeader>
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