import React, {useState} from "react";
import { Grid,Button, AppBar, ButtonGroup } from "@material-ui/core";
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
            <Grid container justify="center" style={{margin:"50px 0px", padding:"0px 15.5%"}}>
                <Grid item xs={12} align="center" >
                    <AppBar className={CvClasses.appbar} position="relative" >
                        <Grid container item justify="center">
                            <ButtonGroup >
                                <Button className={CvClasses.button} size="large" onClick={() => onDocumentChange("turkish")}>Türkçe</Button>
                                <Button className={CvClasses.button} size="large" onClick={() => onDocumentChange("english")}>English</Button>
                            </ButtonGroup>
                        </Grid>
                    </AppBar> 
                </Grid>
                <Grid item className={CvClasses.cvbody} xs={12} align="center" >
                    <Iframe className={CvClasses.document} src={activeDocument} position="relative" display="initial" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default CV;