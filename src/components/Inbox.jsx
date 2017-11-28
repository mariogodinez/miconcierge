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
								<section className="message-conversation flex flex-column flex-right" style={{height: 400 + 'px'}}>
									<article className="padding20">
										<div className="flex">
											<figure className="margin0 flex-none rounded border2 color-fuchia square40">
												<img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" className="width100 rounded height100" />
											</figure>
											<div className="margin-left10 round20 back-whity padding10-30 max-width50">
												Lorem ipsum dolor sit, amet consectetur adipisicing eati quisquam fuga, ullam, quasi tenetur ipsam sequi autem ut laboriosam expedita eveng eati quisquam fuga, ullam, quasi tenetur ipsam sequi autem ut laboriosam expedita eveng eati quisquam fuga, ullam, quasi tenetur ipsam sequi autem ut laboriosam expedita eveng eati quisquam fuga, ullam, quasi tenetur ipsam sequi autem ut laboriosam expedita eveniet!
											</div>
										</div>
									</article>

									<article className="padding20">
										<div className="flex flex-right">
											<div className="margin-right10 max-width50 back-fuchia color-white padding10-30 round20">
												Si!
											</div>
											<figure className="margin0 flex-none rounded border2 color-fuchia square40">
												<img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" className="width100 rounded height100" />
											</figure>
										</div>
									</article>

									<article className="padding20">
										<div className="flex flex-right">
											<div className="margin-right10 max-width50 back-fuchia color-white padding10-30 round20">
												Acuerdate de Lorem iantium ullam modi, blanditiis illo commodi. Dicta quos soluta reprehenderit ducimus pariatur. Veniam architecto voluptatum dolorum!!
											</div>
											<figure className="margin0 flex-none rounded border2 color-fuchia square40">
												<img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" className="width100 rounded height100" />
											</figure>
										</div>
									</article>
									
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