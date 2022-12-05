import React from "react";
import apple from "../images/app-store.4084377.png"
import google from "../images/google-play.6d00271.png"


export default function MainHero () {
    return (

        <div className={'main-hero'}>
            <div className={'main-hero-description'}>
            <div>
                <h1>Probably the best app for hiking ever made.</h1>
            </div>
            <div className={'title-description'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. </p>
            </div>
            </div>
            <h3>Download and start the adventure</h3>
            <div className={'download-links'}>
            <a href=""><img src={apple} alt=""/></a>
            <a href=""><img src={google} alt=""/></a>
            </div>
        </div>

        )
}