import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="nameGame">{props.children}</div>
        <div className="score">
            Score: {props.score}
            Highscore: {props.high}
        </div>
    </div>
)