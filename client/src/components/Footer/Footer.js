import React from "react"
import { Typography, Grid, IconButton } from "@material-ui/core"
import {LinkedIn,Twitter,Mail, Instagram, GitHub} from "@material-ui/icons"

import FooterStyles from "./FooterStyles"

const Footer = () => {
    const FooterClasses = FooterStyles();
    
    return (
      <Grid className={FooterClasses.container} container direction="column" justify="center" alignItems="center">
        <Grid item xs={2} />
        <Grid item xs={4}>
          <IconButton className={FooterClasses.icon} children={<LinkedIn fontSize="large"/>} aria-label="LinkedIn" target="_blank" href="https://www.linkedin.com/in/talha-bayburtlu-102703190/" />
          <IconButton className={FooterClasses.icon} children={<Twitter fontSize="large"/>} aria-label="Twitter" target="_blank" href="https://twitter.com/talha_bayburtlu" />
          <IconButton className={FooterClasses.icon} children={<Instagram fontSize="large"/>} aria-label="Instagram" target="_blank" href="https://www.instagram.com/talhabayburtlu/?hl=tr" />
          <IconButton className={FooterClasses.icon} children={<GitHub fontSize="large"/>} aria-label="Github" target="_blank" href="https://github.com/talhabayburtlu/" />
          <IconButton className={FooterClasses.icon} children={<Mail fontSize="large"/>} aria-label="Mail" target="_blank" href="mailto:talha_bayburtlu2@hotmail.com" />
        </Grid>
        <Grid item align="center" xs={6}>
          <Typography className={FooterClasses.paragraph} variant="body2" paragraph >Bu web sayfası ReactJS ve NodeJS kullanılarak oluşturulmuştur. </Typography>
          <Typography className={FooterClasses.paragraph} variant="body2" paragraph>Talha Bayburtlu - 2020</Typography>
        </Grid>
      </Grid>
    )
}

export default Footer;