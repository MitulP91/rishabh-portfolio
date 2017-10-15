import React, { Component } from "react";
import PropTypes from 'prop-types';
import './styles.scss';

const baseClassName = 'StyledContainer';

class StyledContainer extends Component {
    static propTypes = {
        variation: PropTypes.oneOf([
            'inherit',
            'cover',
            'flex',
            'flex-center',
            'flex-horizontal',
            'flex-vertical',
            'flex-horizontal-centered',
            'flex-inherit',
            'flex-inherit-horizontal',
            'flex-inherit-vertical',
            'flex-groups-border',
            'flex-groups-grow',
            'flex-groups-lean',
            'flex-group',
            'flex-no-shrink',
            'flex-shrinkwrap',
            'flex-wrap',
            'standard-shadow',
            'standard',
            'shaded',
            'border',
            'border-dashed',
            'shadow',
            'padded',
            'padded-lean',
            'admin',
            'full-height',
            'parent-height',
            'collapsed',
        ]),
    };

    static defaultProps = {
        variation: 'inherit',
    };

    render() {
        return (
            <div className={`${baseClassName} ${baseClassName}--${this.props.variation}`}>
                {this.props.children}
            </div>
        );
    }
}

export default StyledContainer;
