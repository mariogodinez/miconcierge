import React, { Component } from 'react'
import MenuInbox from './MenuInbox'


class Inbox extends Component {
	render(){
		return (
				<div className="flex">
					<MenuInbox></MenuInbox>
					<section className="width100">
	                    <article className="margin0-20 padding20-0 border-bottom2">
	                        <h2 className="color-fuchia text-center">Inbox</h2>
	                    </article>
                    </section>
				</div>
			)
	}
}


export default Inbox