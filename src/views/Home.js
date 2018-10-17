import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import QuickCommitment from '../components/views/Home/QuickCommitment';
import SocialLogin from '../components/views/Home/SocialLogin';
import UserInformation from '../components/views/Home/UserInformation';
import PostContents from '../components/views/Home/PostContents';

import { login } from '../utils/mockAPI/api';
import { isLoggedIn } from '../utils/user';
import { jsonData } from '../utils/constants';

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

        const { userData = {} } = this.props.authReducer
        const { user = {} } = userData

        return (

            <div
                className="Home"
            >
                <QuickCommitment />
                {
                    isLoggedIn() ? <Redirect to={'/commitments/1'} /> : <SocialLogin onLogin={this.onLogin} />
                }
                <PostContents
                    data={jsonData}
                />
            </div>

        )

    }

}

export default connect(
    ({ authReducer, dispatch }) => ({ authReducer, dispatch })
)(Home)