import React from 'react';
import { StyledBoard } from '../../elements/index';
import Reward from './Reward';

const RewardBoard = (props) => {

    const mappedRewards = props.rewards.map((item) => {
        return (
            <Reward {...item} key={item._id} />
        )
    });

    return (
        <StyledBoard>
            {mappedRewards[0] ? mappedRewards : "No available Rewards" }
        </StyledBoard>
    )
};

export default RewardBoard;