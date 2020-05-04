import React, { Component } from 'react';
import axios from 'axios';
import TrackerBoard from './trackers/TrackerBoard';
import JarBoard from './jars/JarBoard';
import RewardBoard from './rewards/RewardBoard';
const TrackerAxios = axios.create();

class Main extends Component {
    constructor() {
        super();
        this.state = {
            trackers: [],
            jars: [],
            rewards: [],
            testText: "Test Text Main"
        };
    };

    componentDidMount = () => {
        TrackerAxios.get("/api/trackers")
        .then((res) => {
            this.setState({ trackers: res.data })
        });
        TrackerAxios.get("/api/jars")
        .then((res) => {
            this.setState({ jars: res.data })
        });
        TrackerAxios.get("/api/rewards")
        .then((res) => {
            this.setState({ rewards: res.data })
        });
    }

    
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
           <JarBoard {...this.state}/>
           <RewardBoard {...this.state}/>
        </div>
        )
    };
};

export default Main

// trackers: [
//     {   
//         name: "Test Tracker Main",
//         points: 10,
//         jar: "Health Jar"
//     },
//     {
//         name: "Other Tracker",
//         points: 15,
//         jar: "Health Jar"
//     }
// ],
// jars: [
//     {
//         name: "Health Jar",
//         maxPoints: 1000
//     }
// ],
// rewards: [
//     {
//         name: "2 hours of video games",
//         jar: "Health Jar",
//         points: 100
//     }
// ],