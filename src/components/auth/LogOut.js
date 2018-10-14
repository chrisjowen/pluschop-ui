import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUser } from '../../redux/actions/auth';

class LogOut extends Component {

    logOut = () => {

        localStorage.removeItem('userData')

        this.props.dispatch(setUser({}))

    }

    render () {

        return this.props.children(this.logOut)

    }

}

export default connect(
    ({ dispatch }) => ({ dispatch })
)(LogOut)