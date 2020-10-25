import React from "react";
import { Grid, Typography, Card, IconButton, CardContent, SvgIcon, Fade } from "@material-ui/core"
import Icons from "./icons";

import HesaplarımStyles from "./HesaplarımStyles"

const Hesaplarım = () => {
    const HesaplarımClasses = HesaplarımStyles();

    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <Grid container className={HesaplarımClasses.container} justify="space-between" spacing={6}>
                    <Grid item container className={HesaplarımClasses.item} xs={12} sm={4} justify="space-around" >
                        <Grid item className={HesaplarımClasses.line} xs={3} />
                        <Grid item xs={6} align="center">
                            <Typography  className={HesaplarımClasses.header} >Sosyal Medya</Typography>
                        </Grid>
                        <Grid item className={HesaplarımClasses.line} xs={3}/>

                        <Grid container className={HesaplarımClasses.innerContainer} direction="column" >
                            <Grid item xs={4} >
                                <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://twitter.com/talha_bayburtlu" >
                                    <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 48 48" >{Icons.Twitter.path}</SvgIcon>
                                    <Typography className={HesaplarımClasses.mediaName} style={{color: Icons.Twitter.color}}>Twitter</Typography>
                                </IconButton>
                            </Grid>
                            
                            <Grid item xs={4} >
                                <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://www.instagram.com/talhabayburtlu/?hl=tr">
                                    <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 48 48" >{Icons.Instagram.path}</SvgIcon>
                                    <Typography className={HesaplarımClasses.mediaName}  style={{color: Icons.Instagram.color}}>Instagram</Typography>
                                </IconButton>
                            </Grid>

                            <Grid item xs={4} >
                                <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://www.linkedin.com/in/talha-bayburtlu-102703190/">
                                    <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 48 48" >{Icons.Linkedin.path}</SvgIcon>
                                    <Typography className={HesaplarımClasses.mediaName}  style={{color: Icons.Linkedin.color}}>LinkedIn</Typography>
                                </IconButton>
                            </Grid>

                        </Grid>

                        <Grid item xs={12}  className={HesaplarımClasses.line} />


                    </Grid>

                    <Grid item container  className={HesaplarımClasses.item} xs={12} sm={4}  >
                        <Grid item className={HesaplarımClasses.line} xs={3} />
                            <Grid item xs={6} align="center">
                                <Typography  className={HesaplarımClasses.header} >İş / Öğrenim</Typography>
                            </Grid>
                            <Grid item className={HesaplarımClasses.line} xs={3}/>

                            <Grid container className={HesaplarımClasses.innerContainer} direction="column">
                                <Grid item xs={4} >
                                        <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://github.com/talhabayburtlu" >
                                            <SvgIcon className={HesaplarımClasses.icon}  viewBox="0 0 30 30" fontSize="large">{Icons.Github.path}</SvgIcon>
                                            <Typography className={HesaplarımClasses.mediaName} style={{color: Icons.Github.color}}>GitHub</Typography>
                                        </IconButton>
                                </Grid>

                                <Grid item xs={4} >
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://www.udemy.com/user/talha-bayburtlu/" >
                                        <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 180 80" fontSize="large">{Icons.Udemy.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} style={{color: Icons.Udemy.color}}>Udemy</Typography>
                                    </IconButton>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}  className={HesaplarımClasses.line} />
                    </Grid>

                    <Grid item container  className={HesaplarımClasses.item} xs={12} sm={4}  >
                        <Grid item className={HesaplarımClasses.line} xs={2} sm={4} />
                            <Grid item xs={8} sm={4} align="center">
                                <Typography  className={HesaplarımClasses.header} >İletişim</Typography>
                            </Grid>
                            <Grid item className={HesaplarımClasses.line} xs={2} sm={4}/>

                            <Grid container className={HesaplarımClasses.innerContainer} direction="column">

                                <Grid item xs={4} >
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="mailto:talha_bayburtlu2@hotmail.com" >
                                        <SvgIcon className={HesaplarımClasses.icon}  viewBox="0 0 48 48" fontSize="large">{Icons.Outlook.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} style={{color: Icons.Outlook.color}}>Outlook</Typography>
                                    </IconButton>
                                </Grid>

                                <Grid item xs={4} >
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="mailto:talha.bayburtlu1@gmail.com" >
                                            <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 48 48" fontSize="large">{Icons.Gmail.path}</SvgIcon>
                                            <Typography className={HesaplarımClasses.mediaName} style={{color: Icons.Gmail.color}}>Gmail</Typography>
                                        </IconButton>
                                </Grid>

                            </Grid>

                            <Grid item xs={12}  className={HesaplarımClasses.line} />
                    </Grid>

                </Grid>
            </Fade>
        </React.Fragment>
    )
}

export default Hesaplarım;