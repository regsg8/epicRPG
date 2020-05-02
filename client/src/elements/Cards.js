import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 80%;
    max-width: 300px;
    min-width: 40px;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 6px;
    border: solid 1px black;
    padding: 5px;
    margin: 5px;
`;

export const StyledTracker = styled(StyledDiv)`
    color: red;
`;

export const StyledReward = styled(StyledDiv)`
    color: green
`;