import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledContainer from '../../../StyledContainer';

const baseClassName = 'FilmCredit';

export default class FilmCredit extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }

    render() {
        const {
            name,
            title,
        } = this.props;

        return (
            <StyledContainer className={`${baseClassName}__container`}>
                {name}: {title}
            </StyledContainer>
        );
    }
}
