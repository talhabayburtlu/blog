import React, {useState} from "react";
import {Collapse, List, ListItem, ListItemText,Button, Grid, Typography} from "@material-ui/core";

import {BlogItems, IndividualItems} from "../../../containers/Blog/BlogItems";
import TabStyles from "./TabStyles";

const Tab = (props) => {
    const TabClasses =  TabStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <ListItem button onClick={handleClick} className={[TabClasses.button,TabClasses.buttonHover].join(" ")}>
                <ListItemText >
                    <Button onClick={props.BlogItemsIndex === 0 ? () => {props.onItemChangeHandler(0,0)} : null} className={[TabClasses.button,TabClasses.buttonHover].join(" ")} align="center">{BlogItems[props.BlogItemsIndex]}</Button>
                </ListItemText>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className={TabClasses.nested} dense>
                    {IndividualItems[props.BlogItemsIndex].map((item,index) => (
                        <ListItem disableGutters dense >
                            <Grid item align="center">
                                <Button className={[TabClasses.button,TabClasses.buttonHover].join(" ")}
                                    onClick={() => {props.onItemChangeHandler(props.BlogItemsIndex,index); props.onClose();}} >{item}</Button>
                            </Grid>
                          
                        </ListItem>
                    ) )}
                </List>
            </Collapse>
    </React.Fragment>
    );
}

export default Tab;