import React, { Component } from 'react'
import Menu from './Menu'


class ReservationView extends Component {

    render(){
        return (
        <div className="flex">
            <Menu></Menu>
            
            <section class="width100">
			<article class="margin0-20 padding20-0 border-bottom2">
				<h2 class="color-fuchia text-center">Reservation View</h2>
			</article>

			<article class="padding10">
			</article>

			<article class="flex width100">
				
				<div class="padding0-10 flex flex-center">
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

			<section class="padding-bottom20">
				<article class="flex width100 padding0">
					
					<div class="padding0-10 flex flex-center">
						<figure class="margin0 rounded border2 color-fuchia">
							<img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" class="width100 rounded height100" />
						</figure>
					</div>

					<div class="padding20-10">
						<h3 class="color-black font-normal font25 margin-bottom5">
							Julia Robertson
						</h3>
					</div>

					<div class="padding10">
						
					</div>

					<div class="padding0 text-center flex flex-center flex-middle">
						<button class="my-btn flex flex-middle back-lightblue color-white">
							<span class="margin-right10 ion-ios-checkmark-outline font30"></span>
							<span class="">Check in</span>
							
						</button>
						<span class="ion-ios-close-outline font30" ></span>
						<span class="ion-ios-clock-outline font30"></span>

					</div>
				</article>
			</section>
		</section>
        </div>
        
        )
    }
}


export default ReservationView