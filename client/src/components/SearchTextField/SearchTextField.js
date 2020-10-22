import React, {useEffect} from "react";
import { connect } from "react-redux";
import {TextField, InputAdornment} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import * as actions from "../../store/actions/index";

const searchTextField = React.memo((props) => {

    return (
        <TextField
            placeholder="Başlıklarda Ara"
            value={props.search}
            onChange={props.onChange}
            InputProps={{endAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            )}}
            autoFocus
        >
            {console.log("rendered textfield")}
        </TextField>
    )
})

const mapStateToProps = state => {
    return {
        search: state.post.search
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateSearch : (value) => dispatch(actions.updateSearch(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(searchTextField);