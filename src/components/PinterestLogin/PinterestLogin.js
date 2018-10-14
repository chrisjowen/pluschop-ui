import React, { Component } from 'react';

import { pinterestAppID } from '../../utils/constants';

export default class PinterestLogin extends Component {

    componentDidMount () {

        console.log(window.PDK)

        if(window.PDK) {
            window.PDK.init({
                appId: pinterestAppID, // Change this
                cookie: true
            });

            
        }

    }

    render () {
        return <div onClick={() => window.PDK.login({ scope: 'read_public' }, (hello) => {console.log(hello)})}>click</div>
    }

}