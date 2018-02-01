import React, {Component} from 'react';
import {Navbar} from 'components';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {User, Counter} from 'components';

const mapStateToProps = function (state) {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
});

class App extends Component {
    componentWillMount () {
    }

    componentWillReceiveProps (nextProps) {
    }

    render () {
        return (
            <div className="app">
                <Navbar/>
                <h2>Well done</h2>
                <p>Here is your React / Redux / Webpack App!</p>
                <Route exact path="/" render={() => (
                    <Redirect to="/counter"/>
                )}/>
                <Switch>
                    <Route path="/counter" component={Counter} />
                    <Route path="/user" component={User} />
                </Switch>

            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
