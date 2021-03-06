import React, { Component } from 'react'
import Menu from './Menu'
import { browserHistory } from 'react-router'





class ReservationView extends Component {

    goBack(){
        browserHistory.goBack()
    }

    render(){
        return (
        <div className="flex">
            <Menu></Menu>
            
            <section class="width100">
                <article className="margin0-20 padding20-0 border-bottom2 flex flex-middle flex-between">
                    <span onClick={()=>{
                        this.goBack()
                    }} class="ion-arrow-left-c font30 margin-left20 color-gray pointer hover-fuchia"></span>
                        <h2 class="color-fuchia text-center ">Reservation View</h2>
                    <span style={{width: 30 + 'px'}}></span>
                </article>

			<article class="padding10">
			</article>

			<article class="flex width100">
				
				<div class="padding0-10 flex flex-center" style={{width: 90 + 'px'}}>
					<h3 class="color-gray text-center">
						
					</h3>
				</div>

				<div class="padding0-10" >
					<h3 class="color-gray">
						Client
					</h3>
				</div>

				<div class="padding0-10">
					<h3 class="color-gray">
					</h3>
				</div>

				<div class="padding0-10 text-center flex flex-center flex-middle">
					<h3 class="color-gray">
					</h3>
				</div>
			</article>

			<section class="padding-bottom20" >
				<article class="flex flex-between width100 padding0 margin-bottom20">
					<div class="flex margin-left10">
                        <div class="padding0-10 flex flex-center">
                            <figure class="margin0 rounded border2 color-fuchia square70">
                                <img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" class="width100 rounded height100" />
                            </figure>
                        </div>

                        <div class="padding20-10">
                            <h3 class="color-black font-normal font25 margin-bottom5">
                                Julia Robertson
                            </h3>
                        </div>
					</div>

					<div class="padding0 text-center flex flex-column flex-center flex-middle margin-right20">
						<button class="round10 my-btn flex flex-middle back-lightblue color-white">
							<span class="margin-right10 ion-ios-checkmark-outline font30"></span>
							<span class="">Check in</span>
						</button>
						<p className="anchor color-gray margin-top10">On Hold</p>
					</div>
				</article>


				<article className="flex color-gray width100 padding20-0 relative" style={{top: 20 + 'px'}}>
					<div className="margin0 padding0" style={{width:130 + 'px'}}>

					</div>
					<div className="" style={{width: 30 + '%'}}>
						<h3>Date</h3>
					</div>

					<div className="" style={{width: 40 + '%'}}>
						<h3>Time</h3>
					</div>

					<div className="" style={{width: 15 + '%'}}>
						<h3>People</h3>
					</div>

					<div className="" style={{width: 15 + '%'}}>
						<h3>Status</h3>
					</div>

				</article>


				<article className="flex color-gray width100">
					<div className="margin0 padding10-20" style={{width: 90 + 'px'}}>

					</div>
					<div className="" style={{width: 30 + '%'}}>
						<h3 className="font30 color-fuchia font-normal">Nov 28</h3>
					</div>

					<div className="" style={{width: 40 + '%'}}>
						<h3 className="font30 color-fuchia font-normal">20:30 Hrs.</h3>
					</div>

					<div className="" style={{width: 15 + '%'}}>
						<h3 className="font30 color-fuchia font-normal">4</h3>
					</div>

					<div className="flex flex-middle relative" style={{width: 15 + '%'}}>
						<span className="ion-ios-checkmark-outline color-green font25"></span>
						<span className="color-green font20">Approve</span>
						<p className="color-gray absolute anchor"  style={{bottom: -20 + 'px', left: 0}}>Cancel</p>
					</div>

				</article>
					<div className="relative" style={{marginTop: 20 + 'px'}}>
						<article className="flex color-gray width100 padding-bottom5" >
							<div className="margin0 padding0" style={{width: 130 + 'px'}}>

							</div>
							
							<div className="" style={{width: 30 + '%'}}>
								<h3>Check In Time</h3>
							</div>
							<div className="" style={{width: 25 + '%'}}>
								<h3>Total Consumption</h3>
							</div>

							<div className="" style={{width: 30 + '%'}}>
								<h3>Hotel: (Comes From...)</h3>
							</div>

							

							<div className="" style={{width: 15 + '%'}}>
							</div>

						</article>
						<article className="flex color-gray width100">
							<div className="margin0 padding0-20" style={{width: 90 + 'px'}}>

							</div>
							
							<div className="" style={{width: 30 + '%'}}>
								<h3 className="font30 color-black font-normal">20:36 hrs.</h3>
							
							</div>
							<div className="" style={{width: 25 + '%'}}>
								<h3 className="font30 color-black font-normal">-</h3>
							</div>

							<div className="" style={{width: 30 + '%'}}>
								<h3 className="font30 color-black font-normal">Iberostar</h3>
							</div>

							

							<div className="" style={{width: 15 + '%'}}>
							</div>

						</article>
					</div>

					<div className="border1 color-lightgray margin20" style={{width: 95 + '%'}}></div>

					<article class="flex width100 margin-bottom10">
				
						<div class="padding0-10 flex flex-right" style={{width: 90 + 'px'}}>
							<figure class="margin0 rounded border2 color-fuchia square40">
                                <img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" class="width100 rounded height100" />
                            </figure>
						</div>

						<div class="padding0-10" style={{width: 25 + '%'}}>
							<h3 class="color-gray">
								Promoter:
							</h3>

							<h3 class="color-black font25 font-normal">
								Arturo López
							</h3>
						</div>

						<div class="padding0" style={{width: 40 + '%'}}>
							<h3 class="color-gray">
								Phone:
							</h3>

							<h3 class="color-black font25 font-normal">
								+55 999 321 23 32
							</h3>
						</div>

						<div class="padding0-10 text-center flex flex-center flex-middle">
							<button  style={{width: 130 + 'px', 'padding-top': 3 + 'px', 'padding-bottom': 3 + 'px'}} className="my-btn flex flex-center flex-middle flex-between back-white color-lightblue border2 round10">
								<span className="margin-right10">Chat</span>
								<span className="ion-chatbox-working font30"></span>
							</button>
						</div>
					</article>

					<article class="flex width100">
				
						<div class="padding0-10 flex flex-right" style={{width: 90 + 'px'}}>
							<figure class="margin0 opacity0 rounded border2 color-fuchia square40">
                            </figure>
						</div>

						<div class="padding0-10" style={{width: 25 + '%'}}>
							<h3 class="color-gray">
								Comission
							</h3>

							<h3 class="color-fuchia font25 font-normal">
								$60
							</h3>
						</div>

						<div class="padding0" style={{width: 40 + '%'}}>
							<h3 class="color-gray">
								Company
							</h3>

							<h3 class="color-black font25 font-normal">
								Travel Guide Agency
							</h3>
						</div>

						<div class="padding0-10 text-center flex flex-center flex-middle">
							
						</div>
					</article>
				


				
			</section>
		</section>
        </div>
        
        )
    }
}


export default ReservationView