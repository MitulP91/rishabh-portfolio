import React, { Component } from "react";
import PropTypes from 'prop-types';
import FacebookIcon from './facebook.png';
import VimeoIcon from './vimeo.png';
import './styles.scss';

const allowedSocialTypes = ['Facebook', 'Vimeo'];

const socialTypeToIconMap = {
    Facebook: FacebookIcon,
    Vimeo: VimeoIcon,
};

const socialTypeToLinkMap = {
    Facebook: 'https://www.facebook.com/rishabh.patel.148',
    Vimeo: 'https://vimeo.com/user6833831',
};

const baseClassName = 'SocialIcon';

class SocialIcon extends Component {
    static propTypes = {
        type: PropTypes.oneOf(allowedSocialTypes).isRequired,
        linkTarget: PropTypes.string,
    };

    static defaultProps = {
        linkTarget: '_blank',
    }

    render() {
        const socialIcon = socialTypeToIconMap[this.props.type];
        const socialLink = socialTypeToLinkMap[this.props.type];

        return (
            <div className={baseClassName}>
                <a href={socialLink} target={this.props.linkTarget}>
                    <img className={`${baseClassName}__img`} src={socialIcon} alt={this.props.type} />
                </a>
            </div>
        );
    }
}

export default SocialIcon;
