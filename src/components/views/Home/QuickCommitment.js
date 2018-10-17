import React, { Component } from 'react';
import DateTime from 'react-datetime';
import { Select, Input } from 'semantic-ui-react'

import { commitment_date_options, commitment_types } from '../../../constants/commitment';

class QuickCommitment extends Component {

    state = {
        commitment_type: 1,
        commitment_item: '',
        commitment_date_dropdown: 3
    }

    _onChange = (e, data) => this.setState({
        [data.name]: data.value
    })

    render () {

        const { commitment_type = 1, commitment_item = '', commitment_date_dropdown = 3 } = this.state

        return (

            <div className='SelectorHeader'>
                <span>I want to</span>
                <Select
                    onChange={this._onChange}
                    value={commitment_type}
                    options={commitment_types}
                    name="commitment_type"
                />
                <span>a</span>
                <Input
                    value={commitment_item}
                    onChange={this._onChange}
                    name="commitment_item"
                />
                <span>by</span>
                <Select
                    onChange={this._onChange}
                    value={commitment_date_dropdown}
                    options={commitment_date_options}
                    name="commitment_date_dropdown"
                />
                {
                    commitment_date_dropdown == 'specific_date' ?
                        <DateTime />
                    : null
                }
            </div>

        )

    }

}

export default QuickCommitment