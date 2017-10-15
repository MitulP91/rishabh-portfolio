import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilmCredit from './FilmCredit';
import StyledContainer from '../../../StyledContainer';

const baseClassName = 'FilmCredits';

export default class FilmCredits extends Component {
    static propTypes = {
        credits: PropTypes.array.isRequired,
    }

    render() {
        const {
            credits,
        } = this.props;

        const children = [];

        for (let i = 0; i < credits.length; i++) {
            children.push((<FilmCredit key={i} {...credits[i]}/>));
        }

        return (
            <StyledContainer className={`${baseClassName}__container`}>
                {children}
            </StyledContainer>
        );
    }
}

