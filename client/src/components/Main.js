import React from 'react';
import Landing from './Landing';

const Main = () => {
    const styles = {
        main: {
            position: 'fixed',
            bottom: '42px',
            top: '42px',
            width: '100%',
            padding: '10px',
            border: '2px green solid'
        }
    }
    return (
        <div style={styles.main}>
            Main Filler
            <Landing />
        </div>
    )
}

export default Main