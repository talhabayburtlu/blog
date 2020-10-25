import React, {useState} from "react";
import { Grid,Button, AppBar, ButtonGroup,Fade, Zoom, Grow } from "@material-ui/core";
import Iframe from 'react-iframe'

import CvStyles from "./CvStyles";
import turkishCV from "../../public/pdfs/cv-türkçe.pdf";
import englishCV from "../../public/pdfs/cv-english.pdf";

const CV = () => {
    const [activeDocument , setActiveDocument] = useState(turkishCV)
    const CvClasses = CvStyles();

    const onDocumentChange = (language) => {
        setActiveDocument(language === "turkish" ? turkishCV : englishCV )
        console.log(activeDocument)
    }
    
    return (
        <React.Fragment>
            <Grow in={true} timeout={1000}>
                <Grid container className={CvClasses.container} justify="center">
                    <Grid item xs={12} align="center" >
                        <AppBar className={CvClasses.appbar} position="relative" >
                            <Grid container item justify="center">
                                <ButtonGroup >
                                    <Button className={CvClasses.button} onClick={() => onDocumentChange("turkish")}>Türkçe</Button>
                                    <Button className={CvClasses.button} onClick={() => onDocumentChange("english")}>English</Button>
                                </ButtonGroup>
                            </Grid>
                        </AppBar> 
                    </Grid>
                    <Grid item className={CvClasses.cvbody} xs={12} align="center" >
                        <Iframe className={CvClasses.document} src={activeDocument} position="relative" display="initial" />
                    </Grid>
                </Grid>
            </Grow>
        </React.Fragment>
    )
}

export default CV;