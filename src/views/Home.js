import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuickCommitment from '../components/views/Home/QuickCommitment';
import SocialLogin from '../components/views/Home/SocialLogin';
import UserInformation from '../components/views/Home/UserInformation';
import Commitments from './Commitments'

import { login } from '../utils/mockAPI/api';

import { isLoggedIn } from '../utils/user';

import { setUser } from '../redux/actions/auth';

class Home extends Component {

    onLogin = data => {

        login(data)
            .then(
                userData => {

                    localStorage.saveObject('userData', userData)

                    this.props.dispatch(setUser(userData))

                }
            )

    }

    render () {

        return (

            <div
                className="Home"
            >
                <QuickCommitment />
                {
                    isLoggedIn() ? this.props.history.push('/commitments/:id') : <SocialLogin onLogin={this.onLogin} />
                }
            </div>

        )

    }

}

export default connect(
    ({ authReducer, dispatch }) => ({ authReducer, dispatch })
)(Home)
