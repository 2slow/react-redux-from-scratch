import React, { Component, PropTypes} from 'react';
import {MainContent, Navbar} from "components";

class App extends Component {
    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        const styles = require('./less/App.less');
    }

    componentWillReceiveProps (nextProps) {
    }


    render () {
        var self = this;
        const {} = this.props;
        return (
            <div className="app">
                <Navbar/>
                <MainContent/>
            </div>
        );
    }
}

export default App;
