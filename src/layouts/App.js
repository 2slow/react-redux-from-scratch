import React, { Component, PropTypes} from 'react';
import {MainContent, Navbar} from "components";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
    };
};
const mapDispatchToProps = (dispatch) => ({
});

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
        console.log('this.props', this.props)
        return (
            <div className="app">
                <Navbar/>
                <h2>Well done</h2>
                <p>Here is your React / Redux / Webpack App!</p>
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
