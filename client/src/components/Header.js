import React from 'react';

const Header = () => {
    const styles = {
        header: {
            padding: '10px',
            border: '2px red solid'
        }
    };

    return (
        <div style={styles.header}>
            Tracker Header
        </div>
    )
}

export default Header