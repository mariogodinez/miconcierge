import React, { Component } from 'react'
import Menu from './Menu'


class Reservations extends Component {

    render () {
        return (
            <div className="flex">
                <Menu></Menu>
                <section class="width100">
                    <article class="margin0-20 padding20-0 border-bottom2">
                        <h2 class="color-fuchia text-center">Reservations List</h2>
                    </article>

                    <article class="flex flex-middle flex-right">
                        <section class="tabs flex">
                            {}
                            <div class="tabs-item pointer flex">
                                <span class=" margin-right5 font18">Item</span>
                                <span class="my-badge back-gray flex flex-middle flex-center">All item</span>
                            </div>
                        </section>
                        <section class="margin-left20 margin-right20">
                            <div class="my-input-search margin10 flex flex-middle relative">
                                <span class="ion-ios-search my-input-search-icon relative"></span>
                                <input type="" name="" placeholder="Search ..." class="flex" />
                                <span class="ion-levels my-input-search-icon absolute"></span>
                            </div>
                        </section>
                    </article>

                    <article class="flex width100">
                        
                        <div class="padding10 flex flex-center">
                            <h3 class="color-gray text-center">
                                Promotor
                            </h3>
                        </div>

                        <div class="padding10">
                            <h3 class="color-gray">
                                Reservation
                            </h3>
                        </div>

                        <div class="padding10">
                            <h3 class="color-gray">
                                Date/Time
                            </h3>
                        </div>

                        <div class="padding10 text-center flex flex-center flex-middle">
                            <h3 class="color-gray">
                                Status
                            </h3>
                        </div>
                    </article>

                    {/* <section class="padding-bottom20 reservations" style="height:calc(85vh - 30vh); overflow-y:auto;"> */}

                    <section class="padding-bottom20 reservations">
                        <article class="flex width100 padding10-0 pointer reservations-list">
                            
                            <div class="padding0-10 flex flex-center" >
                                <figure class="margin0 rounded border2 color-fuchia">
                                    <img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" class="width100 rounded height100" />
                                </figure>
                            </div>

                            <div class="padding10">
                                <h3 class="color-black font-normal font25 margin-bottom5">
                                    Julia Robertson
                                </h3>
                                <p class="font18 color-gray">People: 4</p>
                            </div>

                            <div class="padding10">
                                <h3 class="color-black font-normal font23">
                                    20 Nov
                                </h3>
                                <h3 class="color-black font-normal font23">
                                    20 Hrs.
                                </h3>
                            </div>

                            <div class="padding10 text-center flex flex-center flex-middle">
                                <span class="ion-ios-checkmark-outline font30 color-green"></span>
                                {/* <span class="ion-ios-close-outline font30" v-show="bt" style="color:red;"></span>
                                <span class="ion-ios-clock-outline font30" v-show="bt" style="color:lightblue;"></span> */}

                            </div>
                        </article>
                    </section>

                    
                </section>
            </div>
        )
    }
}

export default Reservations