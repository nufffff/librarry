import * as React from 'react';
import Buttons from "./Buttons";
import AppContent from "./AppContent";

export default function Header(props) {
    return (
    <header className="App-header">
        <div className="left">
            <img src={props.logoSrc} className="App-logo" alt="logo" />
            <h1 className="App-title" onClick={props.showMain}>{props.pageTitle}</h1>
        </div>
        <div className="menu">
        <Buttons
            login={props.login}
            logout={props.logout}
        />
        </div>
    </header>
  );
};