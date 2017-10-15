import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledContainer from '../StyledContainer';

import FilmEmbed, { EMBED_VIMEO } from './components/FilmEmbed';
import FilmDescription from './components/FilmDescription';
import FilmCredits from './components/FilmCredits';

export default class Film extends Component {
    static propTypes = {
        embedType: PropTypes.string,
        embedProps: PropTypes.object,
        description: PropTypes.string,
        credits: PropTypes.array,
    }

    static defaultPropTypes = {
        embedType: EMBED_VIMEO,
        description: null,
        credits: null,
    }

    render() {
        const {
            embedType,
            embedProps,
            credits,
            description,
        } = this.props;

        const children = [];

        children.push((<FilmEmbed embedType={embedType} {...embedProps} />));

        if (credits) {
            children.push((<FilmCredits credits={credits} />));
        }

        if (description) {
            children.push((<FilmDescription description={description} />));
        }

        return (
            <StyledContainer variation="flex-center">
                {children}
            </StyledContainer>
        );
    }
}
