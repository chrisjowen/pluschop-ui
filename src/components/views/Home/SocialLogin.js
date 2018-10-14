import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

import Hidden from '../../common/Hidden';
import PinterestLogin from '../../PinterestLogin/PinterestLogin';

import { googleApiKey } from '../../../utils/constants';

export default class SocialLogin extends Component {

    onPinterestLogin = ({data}) => {

        const { last_name, first_name, image, username } = data

        this.props.onLogin({
            firstName: first_name,
            lastName: last_name,
            email: username,
            avatar: image["60x60"].url
        })

    }

    onGoogleLogin = data => {

        const { givenName, familyName, imageUrl, email } = data.profileObj

        this.props.onLogin({
            avatar: imageUrl,
            firstName: givenName,
            lastName: familyName,
            email
        })

    }

    onFacebookLogin = data => {

        const { first_name, last_name, email, picture } = data;

        this.props.onLogin({
            avatar: picture.data.url,
            firstName: first_name,
            lastName: last_name,
            email
        })

    }

    onPinterestLoginClick = () => {
        this.pinterestButton.signIn()
    }

    onGoogleLoginClick = () => {
        this.googleButton.signIn()
    }

    render () {

        return (

            <div>
                <h1>Login</h1>
                <div className="social-login-button">
                    <FacebookLogin
                        ref={c => this.facebookButton = c}
                        callback={this.onFacebookLogin}
                        appId="2089445167977638"
                        fields="first_name,last_name,email,picture"
                        render={
                            props => {
                                return (
                                    <Button color='blue' onClick={props.onClick}>
                                        <Icon name='facebook official' />
                                        Login using facebook
                                    </Button>
                                )
                            }
                        }
                    />
                </div>
                <div className="social-login-button">
                    <Button onClick={this.onGoogleLoginClick}>
                        <Icon name='google' />
                        Login using google
                    </Button>
                </div>
                <div className="social-login-button">
                    <Button color='red' onClick={this.onPinterestLoginClick}>
                        <Icon name='pinterest square' />
                        Login using pinterest
                    </Button>
                </div>
                <Hidden>
                    <GoogleLogin
                        ref={c => this.googleButton = c}
                        clientId={googleApiKey}
                        onSuccess={this.onGoogleLogin}
                    />
                </Hidden>
                <PinterestLogin
                    ref={c => this.pinterestButton = c}
                    onSuccess={this.onPinterestLogin}
                />
            </div>
        )

    }

}