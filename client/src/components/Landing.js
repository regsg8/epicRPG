import React from 'react';

const Landing = () => {
    const styles = {
        landing: {
            position: 'fixed',
            left: '0',
            top: '42px',
            bottom: '42px',
            width: '20%',
            padding: '10px',
            border: '2px black solid'
        }
    }
    return (
        <div style={styles.landing}>
            Landing Filler
        </div>
    )
}

export default Landing