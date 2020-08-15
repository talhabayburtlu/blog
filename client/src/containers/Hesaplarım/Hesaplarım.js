import React from "react";
import { Grid, Typography, Card, IconButton, CardContent, SvgIcon } from "@material-ui/core"
import Icons from "./icons";

import HesaplarımStyles from "./HesaplarımStyles"

const Hesaplarım = () => {
    const HesaplarımClasses = HesaplarımStyles();

    return (
        <React.Fragment>
            <Grid container className={HesaplarımClasses.generalContainer} justify="center" alignItems="center" >
                <Grid item container >
                    <Card className={HesaplarımClasses.card}> 
                        <Grid item container className={HesaplarımClasses.header} xs={12}>
                            <Typography className={HesaplarımClasses.title} variant="h4"> Sosyal Medya Hesaplarım </Typography>
                        </Grid>
                        <CardContent>
                            <Grid item container className={HesaplarımClasses.content} justify="flex-start" xs={12}>
                                <Grid item xs={4} align="left">
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://twitter.com/talha_bayburtlu" >
                                        <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 48 48" fontSize="large">{Icons.Twitter.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} variant="h5" style={{color: Icons.Twitter.color}}>Twitter</Typography>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} align="center">
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://www.instagram.com/talhabayburtlu/?hl=tr" >
                                        <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 48 48" fontSize="large">{Icons.Instagram.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} variant="h5" style={{color: Icons.Instagram.color}}>Instagram</Typography>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} align="right">
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://www.linkedin.com/in/talha-bayburtlu-102703190/">
                                        <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 48 48" fontSize="large">{Icons.Linkedin.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} variant="h5" style={{color: Icons.Linkedin.color}}>LinkedIn</Typography>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card className={HesaplarımClasses.card}> 
                        <Grid item container className={HesaplarımClasses.header} xs={12}>
                            <Typography className={HesaplarımClasses.title} variant="h4"> İş/Öğrenim Hesaplarım </Typography>
                        </Grid>
                        <CardContent>
                            <Grid item container className={HesaplarımClasses.content} justify="flex-start" xs={12}>
                                <Grid item xs={4} align="left">
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://github.com/talhabayburtlu" >
                                        <SvgIcon className={HesaplarımClasses.icon}  viewBox="0 0 30 30" fontSize="large">{Icons.Github.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} variant="h5" style={{color: Icons.Github.color}}>GitHub</Typography>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} align="center">
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://www.udemy.com/user/talha-bayburtlu/" >
                                        <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 180 80" fontSize="large">{Icons.Udemy.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} variant="h5" style={{color: Icons.Udemy.color}}>Udemy</Typography>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card className={HesaplarımClasses.card}> 
                        <Grid item container className={HesaplarımClasses.header} xs={12}>
                            <Typography className={HesaplarımClasses.title} variant="h4"> Mail Hesaplarım </Typography>
                        </Grid>
                        <CardContent>
                            <Grid item container className={HesaplarımClasses.content} justify="flex-start" xs={12}>
                                <Grid item xs={4} align="left">
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="mailto:talha_bayburtlu2@hotmail.com" >
                                        <SvgIcon className={HesaplarımClasses.icon}  viewBox="0 0 48 48" fontSize="large">{Icons.Outlook.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} variant="h5" style={{color: Icons.Outlook.color}}>Outlook</Typography>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} align="center">
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="mailto:talha.bayburtlu1@gmail.com" >
                                        <SvgIcon className={HesaplarımClasses.icon} viewBox="0 0 48 48" fontSize="large">{Icons.Gmail.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} variant="h5" style={{color: Icons.Gmail.color}}>Gmail</Typography>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card className={HesaplarımClasses.card}> 
                        <Grid item container className={HesaplarımClasses.header} xs={12}>
                            <Typography className={HesaplarımClasses.title} variant="h4"> Diğer Hesaplarım </Typography>
                        </Grid>
                        <CardContent>
                            <Grid item container className={HesaplarımClasses.content} justify="flex-start" xs={12}>
                                <Grid item xs={4} align="left">
                                    <IconButton className={HesaplarımClasses.iconButton} target="_blank" href="https://open.spotify.com/user/talha_bayburtlu2?si=pZOlg3UGRK2VzR7mS4KC2w" >
                                        <SvgIcon className={HesaplarımClasses.icon}  viewBox="0 0 24 24" fontSize="large">{Icons.Spotify.path}</SvgIcon>
                                        <Typography className={HesaplarımClasses.mediaName} variant="h5" style={{color: Icons.Spotify.color}}>Spotify</Typography>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Hesaplarım;