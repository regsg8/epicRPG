import React from 'react';
import TrackerBoard from './trackers/TrackerBoard';
import JarBoard from './jars/JarBoard';
import RewardBoard from './rewards/RewardBoard';

const Main = () => {
    const styles = {
        main: {
            height: '100%',
            padding: '10px',
            border: '2px green solid',
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
    return (
        <div style={styles.main}>
           <TrackerBoard />
           <JarBoard />
           <RewardBoard />
        </div>
    )
}

export default Main