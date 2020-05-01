import React from 'react';
import { StyledBoard } from '../../elements/index';
import Tracker from './Tracker';
import { Consumer } from '../../index';

const TrackerBoard = (props) => {

    const mappedTrackers = props.trackers.map((item) => {
        return (
            <Tracker {...item} key={item._id} />
        )
    });

    return ( 
        <StyledBoard>
            {mappedTrackers[0] ? mappedTrackers : "No available Trackers" }
        </StyledBoard>
    )
};

export default TrackerBoard;