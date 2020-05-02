import React from 'react';

const Jar = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.maxPoints}</div>
        </div>
    )
}

export default Jar