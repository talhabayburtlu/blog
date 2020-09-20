import React , {useState,useEffect} from "react";
import {Button, Menu, MenuItem } from "@material-ui/core";

import {BlogItems, IndividualItems} from "../../../containers/Blog/BlogItems";
import TabStyles from "./TabStyles";

const Tab = (props) => {
    const TabClasses =  TabStyles();

    const [info , setInfo] = useState({index: -1 , title: "" , items: []})
    const [anchorEl , setAnchorEl] = useState(null)

    const onOpenHandler = (event) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
          }
    };

    const onCloseHandler  = () => {
        setAnchorEl(setAnchorEl(null));
    };

    useEffect(() => {
        setInfo({index: props.index, title: BlogItems[props.index] , items: IndividualItems[props.index]})
    }, [props.index])

    const itemsMenu = () => (
        info.items !== [] ?  
        <Menu
            PaperProps={{style: {borderRadius: "0px"}}}
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            open={Boolean(anchorEl)}
            onClose={onCloseHandler}
            MenuListProps={{ onMouseLeave: onCloseHandler}}
            anchorOrigin={{vertical: 'bottom',horizontal: 'center'}}
            transformOrigin={{vertical: 'top',horizontal: 'center'}}
        >
            {info.items.length > 0 ? info.items.map((item,itemIndex) => (
                <MenuItem
                    key={item} 
                    className={[TabClasses.button , TabClasses.buttonHover ].join(" ")} 
                    onClick={() => {props.onItemChangeHandler(info.index,itemIndex); onCloseHandler();}} 
                    style={{margin: "-10px 0px"}}
                >{item.toUpperCase()}</MenuItem>
            )) : null}
        </Menu> : null
    )

    return (
        <React.Fragment>
            <Button  className={TabClasses.button} 
            size="large" 
            variant="text"
            onClick={info.items.length === 0 ? () => props.onItemChangeHandler(0,0) : null}
            onMouseOver={info.items.length !== 0 ? onOpenHandler : null}
            >{info.title}</Button>

            {info.items.length > 0 ? itemsMenu() : null}
        </React.Fragment>  
    )

}

export default Tab;