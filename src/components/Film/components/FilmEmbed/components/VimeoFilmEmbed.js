import React, { Component } from 'react';
import PropTypes from 'prop-types';

const vimeoBaseEmbedUrl = 'https://player.vimeo.com/video/';

export default class VimeoFilmEmbed extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        height: PropTypes.number,
        width: PropTypes.number,
        allowFullScreen: PropTypes.bool,
    }

    static defaultPropTypes = {
        height: 360,
        width: 640,
        allowFullScreen: true,
    }

    get url() {
        return vimeoBaseEmbedUrl + this.props.id;
    }

    render() {
        const {
            height,
            width,
            allowFullScreen,
        } = this.props;

        const iframeProps = {
            src: this.url,
            height,
            width,
        };

        if (allowFullScreen) {
            iframeProps['webkitallowfullscreen'] = true;
            iframeProps['mozallowfullscreen'] = true;
            iframeProps['allowfullscreen'] = true;
        }

        return (
            <iframe {...iframeProps}></iframe>
        );
    }
}
