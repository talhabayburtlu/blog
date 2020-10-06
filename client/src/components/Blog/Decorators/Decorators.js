import React from "react";

const youtubeDecorator = (props) => {
    const decoratedText = props.decoratedText;
    const link = decoratedText.replace("watch?v=" , "embed/")

    return (
        <div style={{margin: "10px" , align:"center", textAlign:"center"}}>
            <iframe width="420" height="315" src={link} frameborder="0" allowFullScreen title="video"/>
        </div>
    )
}

const spotifyDecorator = (props) => {
    const decoratedText = props.decoratedText;
    const link = decoratedText.replace(".com/" , ".com/embed/")

    return (
        <div style={{margin: "10px" , align:"center", textAlign:"center"}}>
            <iframe width="500" height="80" src={link} frameborder="0"  
                allowtransparency="true" allow="encrypted-media" title="spotify"/>
        </div>
    )
}

const twitterDecorator = (props) => {
    const decoratedText = props.decoratedText;
    const link = "https://twitframe.com/show?url=" + decoratedText;

    return (
        <div style={{margin: "10px" , align:"center", textAlign:"center"}}>
            <iframe width="500" height="500" src={link} frameborder="0"  
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