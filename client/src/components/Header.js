import React from 'react';

const Header = () => {
    const styles = {
        header: {
            position: 'fixed',
            top: '0',
            width: '100%',
            padding: '10px',
            border: '2px red solid'
        }
    };

    return (
        <div style={styles.header}>
            epicRPG
        </div>
    )
}

export default Header