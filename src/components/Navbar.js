import React, { Component} from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';
class Navbar extends Component {
    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        const styles = require('./less/Navbar.less');
    }

    componentWillReceiveProps (nextProps) {
    }


    render () {
        var self = this;
        const {} = this.props;
        return (
            <div className="navbar">
                <div className="pull-right">
                    <Link to="/counter" activeClassName="active">Counter</Link>
                    <Link to="/user" activeClassName="active">User</Link>
                </div>
                <h1>React / Redux from scratch</h1>
            </div>
        );
    }
}

export default withRouter(Navbar);
