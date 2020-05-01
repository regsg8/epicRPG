import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Provider } from '../index';

class DataProvider extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            menu: true
        };
    };

    toggleMenu = () => {
        this.setState(prevState => ({
            menu: !prevState.menu 
        }));
    };

    render() {
        const props = {
            ...this.state,
            toggleMenu = this.toggleMenu
        };
        return (
            <Provider value={props}>
                {this.props.children}
            </Provider>
        );
    }
};

export default withRouter(DataProvider);