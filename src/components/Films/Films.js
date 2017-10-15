import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Film from '../Film';
import StyledContainer from '../StyledContainer';

import films from './films-data';
console.log(films);

export default class Films extends Component {
    render() {
        const children = [];

        for (let i = 0; i < films.length; i++) {
            const film = films[i];
            const embedProps = {
                id: film.id,
            };

            children.push((
                <StyledContainer>
                    <Film
                        key={i}
                        embedProps={embedProps}
                        description={film.description}
                        credits={film.credits}
                    />
                </StyledContainer>
            ));
        }

        return (
            <StyledContainer variation="flex-center">
                {children}
            </StyledContainer>
        );
    }
}
