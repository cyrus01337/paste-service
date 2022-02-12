import React from "react";
import {
    IoCodeSlash,
    IoLink,
    IoLogoGithub,
    IoPersonCircleOutline,
    IoSaveSharp,
    IoSettingsSharp,
    IoShareOutline
} from "react-icons/io5";

import Account from "./Account";
import Theme from "./Theme";
// import Uploads from "./Uploads";


function getAccount() {
    console.log("Get account!");

    return null;
}


function getSettings() {
    console.log("Get settings!");

    return { theme: "dark" };
}


function onLoginClick(event) {
    console.log("Login!");
}


function onLanguageClick() {
    console.log("Change language!");
}


function onGithubClick() {
    console.log("Open repository!");
}


function onSettingsClick() {
    console.log("Open settings!");
}


function onUploadClick() {
    console.log("Open uploads menu!");
}


function onSaveClick() {
    console.log("Save!");
}


function onCopyClick() {
    console.log("Copy URL!");
}


function Topbar() {
    let account = getAccount();
    let { theme } = getSettings();

    return (
        <div className="topbar">
            <span className="title">paste-service</span>

            <IoPersonCircleOutline onClick={onLoginClick} />
            <IoCodeSlash onClick={onLanguageClick} />
            <IoLogoGithub onClick={onGithubClick} />
            <IoSettingsSharp onClick={onSettingsClick} />
            <IoShareOutline onClick={onUploadClick} />
            <IoSaveSharp className="save" onClick={onSaveClick} />
            <IoLink className="copy" onClick={onCopyClick} />

            <Account account={account} />
            <Theme theme={theme} />
            {/* <Uploads /> */}
        </div>
    );
}


export default Topbar;
