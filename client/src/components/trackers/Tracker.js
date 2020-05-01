import React from 'react';
import { StyledTracker } from '../../elements/index';

const Tracker = (props) => {
    return (
        <StyledTracker>
            <div>{props.name}</div>
            <div>{props.points}</div>
        </StyledTracker>
    )
}

export default Tracker