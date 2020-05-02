import React, { Component } from 'react';
import TrackerBoard from './trackers/TrackerBoard';
import JarBoard from './jars/JarBoard';
import RewardBoard from './rewards/RewardBoard';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            trackers: [
                {   
                    name: "Test Tracker Main",
                    points: 10,
                },
                {
                    name: "Other Tracker",
                    points: 15,
                }
            ],
            testText: "Test Text Main"
        };
    };

    
    render() {
        const styles = {
            main: {
                height: '100%',
                padding: '10px',
                border: '2px green solid',
                display: 'flex',
                justifyContent: 'space-between'
            }
        };

        return (
        <div style={styles.main}>
           <TrackerBoard {...this.state}/>
           <JarBoard />
           <RewardBoard />
        </div>
        )
    };
};

export default Main