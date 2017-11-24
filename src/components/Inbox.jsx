import React, { Component } from 'react'
import MenuInbox from './MenuInbox'
import { browserHistory } from 'react-router'


class Inbox extends Component {

	goBack(){
		browserHistory.goBack()
	}

	render(){
		return (
				<div className="flex">
					<MenuInbox></MenuInbox>
					<section className="width100">
	                    <article className="margin0-20 padding20-0 border-bottom2 flex flex-middle flex-between">
							<span onClick={()=>{
								this.goBack()
							}} class="ion-arrow-left-c font30 margin-left20 color-gray pointer hover-fuchia"></span>
								<h2 class="color-fuchia text-center ">Inbox</h2>
							<span style={{width: 30 + 'px'}}></span>
	                    </article>
                    </section>
				</div>
			)
	}
}


export default Inbox