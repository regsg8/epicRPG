import React from 'react';
import { StyledReward } from "../../elements/index";

const Reward = (props) => {
    return (
        <StyledReward>
            <div>{props.name}</div>
            <div>{props.points}</div>
        </StyledReward>
    )
}

export default Reward