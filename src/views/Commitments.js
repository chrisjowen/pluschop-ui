
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react'

import UserInformation from '../components/views/Home/UserInformation'
import LogOut from '../components/auth/LogOut.js'

const panes = [
    { menuItem: 'My Commitment', render: () => <Tab.Pane>My Commitment</Tab.Pane> },
    { menuItem: 'My Journey', render: () => <Tab.Pane>My Journey</Tab.Pane> },
    { menuItem: 'My Inspiration', render: () => <Tab.Pane>My Inspiration</Tab.Pane> },
  ]

class Commitments extends Component {

    render() {

        const { userData = {} } = this.props.authReducer
        const { user = {} } = userData

        return (
            <div>
            <UserInformation user={user}/>
                <Tab panes={panes} />
            </div>
        )
    }
}


export default connect(
    ({ authReducer, dispatch }) => ({ authReducer, dispatch })
)(Commitments)
