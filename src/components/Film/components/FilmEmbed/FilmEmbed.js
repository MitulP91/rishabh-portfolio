import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VimeoFilmEmbed from './components/VimeoFilmEmbed';

export const EMBED_VIMEO = 'vimeo';

export const EMBED_TYPES = [
    EMBED_VIMEO,
];

const baseClassName = 'FilmEmbed';

export default class FilmEmbed extends Component {
    static propTypes = {
        embedType: PropTypes.oneOf(EMBED_TYPES),
        url: PropTypes.string.isRequired,
    }

    static defaultProps = {
        embedType: EMBED_VIMEO,
    }

    render() {
        const {
            embedType,
            ...otherProps,
        } = this.props;

        switch (embedType) {
            case EMBED_VIMEO: {
                return (<VimeoFilmEmbed {...otherProps} />);
            }
            default: {
                return (<VimeoFilmEmbed {...otherProps} />);
            }
        }
    }
}
