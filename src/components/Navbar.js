import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Navbar extends Component {
    componentWillMount () {
    }

    componentWillReceiveProps (nextProps) {
    }

    render () {
        return (
            <div className="navbar">
                <div className="pull-right">
                    <Link to="/counter">Counter</Link>
                    <Link to="/user">User</Link>
                </div>
                <h1>React / Redux from scratch!</h1>
            </div>
        );
    }
}

Navbar.propTypes = {
    user: PropTypes.object,
    userActions: PropTypes.object
};

export default Navbar;
