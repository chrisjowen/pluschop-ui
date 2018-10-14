import React, { Component } from 'react';

import { pinterestAppID } from '../../utils/constants';

export default class PinterestLogin extends Component {

    componentDidMount () {

        if(window.PDK) {

            window.PDK.init({
                appId: pinterestAppID
            });

        }

    }

    signIn = () => {

        const { onSuccess = () => {} } = this.props

        window.PDK.login(
            { scope: 'read_public' },
            () => {

                window.PDK.me(
                    ``,
                    {
                        fields: ['first_name', 'last_name', 'image', 'username']
                    },
                    onSuccess
                )

            }
        )
    }

    render () {
        return null
    }

}