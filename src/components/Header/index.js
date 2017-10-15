import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './styles.scss';

const baseClassName = 'Header';

class Header extends Component {
    static propTypes = {
        activeNavLocation: PropTypes.oneOf([
            'bio',
            'home',
            'portfolio',
            'resume',
        ]),
    };

    render() {
        return (
            <header className={baseClassName}>
                <div className={`${baseClassName}__icon`}>
                    <Link className={`${baseClassName}__home`} to="/">Home</Link>
                </div>

                <div className={`${baseClassName}__nav`}>
                    <Link className={`${baseClassName}__nav-item`} to="/bio">Bio</Link>
                    <Link className={`${baseClassName}__nav-item`} to="/portfolio">Portfolio</Link>
                    <Link className={`${baseClassName}__nav-item`} to="/resume">Resume</Link>
                </div>
            </header>
        );
    }
}

export default Header;
