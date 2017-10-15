import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledContainer from '../../StyledContainer';

const baseClassName = 'FilmDescription';

export default class FilmDescription extends Component {
    static propTypes = {
        description: PropTypes.string.isRequired,
    }

    render() {
        const {
            description,
        } = this.props;

        return (
            <StyledContainer className={`${baseClassName}__container`}>
                {description}
            </StyledContainer>
        );
    }
}
