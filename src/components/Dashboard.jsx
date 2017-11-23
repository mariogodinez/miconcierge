import React, { Component } from 'react'
import Menu from './Menu'


class Dashboard extends Component {

    render () {
        return (
            <div className="flex">
                <Menu></Menu>
                <h2>Dashboard</h2>
            </div>
        )
    }
}

export default Dashboard