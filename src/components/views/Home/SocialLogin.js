import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import Hidden from '../../common/Hidden';
import PinterestLogin from '../../PinterestLogin/PinterestLogin';

import { googleApiKey } from '../../../utils/constants';

import { login } from '../../../utils/mockAPI/api';

export default class SocialLogin extends Component {

    login = data => {

        login(data)
            .then(
                userData => {

                    localStorage.saveObject('userData', userData)

                }
            )

    }

    onGoogleLogin = data => {

        const { givenName, familyName, imageUrl, email } = data.profileObj

        this.login({
            avatar: imageUrl,
            firstName: givenName,
            lastName: familyName,
            email
        })

    }

    onGoogleLoginClick = () => {
        this.googleButton.signIn()
    }

    render () {

        return (

            <div>
                <h1>Login</h1>
                <div className="social-login-button">
                    <Button color='blue'>
                        <Icon name='facebook official' />
                        Login using facebook
                    </Button>
                </div>
                <div className="social-login-button" onClick={this.onGoogleLoginClick}>
                    <Button color='white'>
                        <Icon name='google' />
                        Login using google
                    </Button>
                </div>
                <div className="social-login-button">
                    <Button color='red'>
                        <Icon name='pinterest square' />
                        Login using pinterest
                    </Button>
                </div>
                <Hidden>
                    <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={true}
                        fields="name,email,picture"/>
                </Hidden>
                <Hidden>
                    <GoogleLogin
                        ref={c => this.googleButton = c}
                        clientId={googleApiKey}
                        onSuccess={this.onGoogleLogin}
                    />
                </Hidden>
                <PinterestLogin></PinterestLogin>
            </div>
        )

    }

}