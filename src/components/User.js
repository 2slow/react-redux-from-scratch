import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from 'actions/userActions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = function (state) {
    return {
        user: state.user.current
    };
};
const mapDispatchToProps = (dispatch) => ({
    userActions: bindActionCreators(userActions, dispatch)
});

class User extends Component {
    componentWillMount () {
        require('./less/User.less');
    }

    componentWillReceiveProps (nextProps) {
    }

    render () {
        var self = this;
        const {user, userActions} = this.props;

        return (
            <div className="user">
                <p>
                    {!user.data && !user.loading && <span>No user loaded yet</span>}
                    {user.loading && <span>Loading...</span>}
                    {user.error && <span>Error!</span>}
                    {user.data && <span>{user.data.name}</span>}
                    <button onClick={userActions.loadUser.bind(self)}>Load user</button>
                </p>
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object,
    userActions: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
