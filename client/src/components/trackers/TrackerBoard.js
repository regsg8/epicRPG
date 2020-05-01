import React from 'react';
import { StyledBoard } from '../../elements/index';
import Tracker from './Tracker';

const TrackerBoard = () => {
    return (
        <StyledBoard>
            <Tracker />
            <Tracker />
            <Tracker />
        </StyledBoard>
    )
}

export default TrackerBoard