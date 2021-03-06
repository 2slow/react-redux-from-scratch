import React, { Component} from 'react';
import PropTypes from 'prop-types';
import * as applicationActions from 'actions/applicationActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = function (state) {
    return {
        counter: state.application.counter
    };
};
const mapDispatchToProps = (dispatch) => ({
    applicationActions: bindActionCreators(applicationActions, dispatch)
});

class Counter extends Component {
    componentWillMount () {
    }

    componentWillReceiveProps (nextProps) {
    }

    render () {
        var self = this;
        const {counter, applicationActions} = this.props;
        return (
            <div className="counter">
                <h3>A simple counter:</h3>
                <p>{counter} <button onClick={applicationActions.addCounter.bind(self)}>Add 1</button></p>
            </div>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number,
    applicationActions: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter));
