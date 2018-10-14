import React, { Component } from 'react';

import LogOut from '../../auth/LogOut';

class UserInformation extends Component {

    render () {

        const { user } = this.props

        return (

            <div>
                <img src={user.avatar} />
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
                <LogOut>
                    {
                        logOutFunc => <a onClick={logOutFunc} href="">logout</a>
                    }
                </LogOut>
            </div>

        )

    }

}

export default UserInformation