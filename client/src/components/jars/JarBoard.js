import React from 'react';
import { StyledBoard } from '../../elements/index';
import Jar from './Jar';

const JarBoard = (props) => {

    const mappedJars = props.jars.map((item) => {
        return (
            <Jar {...item} key={item._id} />
        )
    });

    return (
        <StyledBoard>
            {mappedJars[0] ? mappedJars : "No available Jars" }
        </StyledBoard>
    )
};

export default JarBoard;