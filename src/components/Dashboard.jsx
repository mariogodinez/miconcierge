import React, { Component } from 'react'
import Menu from './Menu'


class Dashboard extends Component {

    render () {
        return (
            <div className="flex">
                <Menu></Menu>
                <section class="dashboard width100">
                    <article class="margin0-20 padding20-0 border-bottom2">
                        <h2 class="color-fuchia text-center">Dashboard</h2>
                    </article>
                </section>
            </div>
        )
    }
}

export default Dashboard