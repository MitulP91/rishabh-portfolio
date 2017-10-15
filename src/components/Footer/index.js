import React, { Component } from "react";
import SocialIcon from "../SocialIcon";
import "./styles.scss";

const baseClassName = "Footer";

export default class Footer extends Component {
    render() {
        return (
            <footer className={baseClassName}>
                <SocialIcon className={`${baseClassName}__icon`} type="Facebook" />
                <SocialIcon className={`${baseClassName}__icon`} type="Vimeo" />
            </footer>
        );
    }
}
