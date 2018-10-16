import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { setUser } from '../../redux/actions/auth';

class LogOut extends Component {

    logOut = () => {

        localStorage.removeItem('userData')

        this.props.dispatch(setUser({}))

        this.props.history.push('/')

    }

    render () {

        return this.props.children(this.logOut)

    }

}

export default withRouter(connect(
    ({ dispatch }) => ({ dispatch })
)(LogOut))
