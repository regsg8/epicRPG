import React from 'react';
import { StyledBoard } from '../../elements/index';
import Jar from './Jar';

const JarBoard = () => {
    return (
        <StyledBoard>
            <Jar />
            <Jar />
        </StyledBoard>
    )
};

export default JarBoard;