import React, { Component } from 'react';

import QuickCommitment from '../components/views/Home/QuickCommitment';
import SocialLogin from '../components/views/Home/SocialLogin';

export default class Home extends Component {

    render () {

        return (

            <div
                className="Home"
            >
                <QuickCommitment />
                <SocialLogin />
            </div>

        )

    }

}