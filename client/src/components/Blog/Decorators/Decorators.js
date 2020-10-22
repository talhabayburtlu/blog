import React from "react";

import DecoratorStyles from "../Decorators/DecoratorStyles";

const youtubeDecorator = (props) => {
    const DecoratorClasses =  DecoratorStyles();

    const decoratedText = props.decoratedText;
    const link = decoratedText.replace("watch?v=" , "embed/")

    return (
        <div style={{margin: "10px" , align:"center", textAlign:"center"}}>
            <iframe src={link} frameborder="0" allowFullScreen title="video"
                className={DecoratorClasses.youtube}/>
        </div>
    )
}

const spotifyDecorator = (props) => {
    const DecoratorClasses =  DecoratorStyles();

    const decoratedText = props.decoratedText;
    const link = decoratedText.replace(".com/" , ".com/embed/")

    return (
        <div style={{margin: "10px" , align:"center", textAlign:"center"}}>
            <iframe className={DecoratorClasses.spotify} src={link} frameborder="0"  
                allowtransparency="true" allow="encrypted-media" title="spotify"/>
        </div>
    )
}

const twitterDecorator = (props) => {
    const DecoratorClasses =  DecoratorStyles();

    const decoratedText = props.decoratedText;
    const link = "https://twitframe.com/show?url=" + decoratedText;

    return (
        <div style={{margin: "10px" , align:"center", textAlign:"center"}}>
            <iframe className={DecoratorClasses.twitter} src={link} frameborder="0"  
                allowtransparency="true" allow="encrypted-media" title="spotify"/>
        </div>
    )
}

const decorators = [
    {
        component: youtubeDecorator,
        regex: /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w]*)(&(amp;)?‌​[\w​=]*)?/g
    },
    {
        component: spotifyDecorator,
        regex: /[\bhttps://open.\b]*spotify[\b.com\b]*[/:]*track[/:]*[A-Za-z0-9?=]+/g
    },{
        component: twitterDecorator,
        regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)$/g
    }
]

export default decorators;