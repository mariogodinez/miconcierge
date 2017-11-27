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
						
						<section className="relative">
							<div style={{position: 'absolute', top: 20 + 'px', right: 20 + 'px'}}>
								<span className="ion-android-more-vertical font25"></span>
							</div>
							<article  className="relative">
								<section className="message-conversation" style={{height: 400 + 'px'}}>

								</section>

								<section className="message-actions flex-center flex flex-middle flex-between">
									<div className="flex width100">
										<input className="my-input width100 border0" type="text" placeholder="Reply to Username"/>
									</div>
									<article className="flex flex-middle">
										<div className="margin0-30">
											<span className="ion-camera font25"></span>
										</div>
										<button className="my-btn back-fuchia color-white font20">
											Send
											<span className="ion-navigate"></span>
										</button>
									</article>
									
								</section>
							</article>
						</section>
                    </section>
					<br/>
					
				</div>
			)
	}
}


export default Inbox