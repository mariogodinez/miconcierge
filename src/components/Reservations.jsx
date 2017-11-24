import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Menu from './Menu'


class Reservations extends Component {
    constructor(props){
        super(props)

        this.state = {
            clients: [1,2,3],
            tabs: [{
                name: 'All',
                items: 2
            },{
                name: 'Aproved',
                items: 1
            },{
                name: 'Pending',
                items: 5
            },{
                name: 'Canceled',
                items: 0
            }
            ],
            tabActive: 'All',
        }
    }

    goReservation(){
        browserHistory.push('/reservation-view')
    }

    render () {
        return (
            <div className="flex height85vh">
                <Menu></Menu>
                <section className="width100">
                    <article className="margin0-20 padding20-0 border-bottom2">
                        <h2 className="color-fuchia text-center">Reservations List</h2>
                    </article>

                    <article className="flex flex-middle flex-right">
                        <section className="tabs flex">
                            { this.state.tabs.map(tab => {
                                return (<div className="tabs-item pointer flex">
                                    <span className=" margin-right5 font18">{tab.name}</span>
                                    <span className="my-badge back-gray flex flex-middle flex-center">{tab.items}</span>
                                </div>)
                            }) }
                            
                        </section>
                        <section className="margin-left20 margin-right20">
                            <div className="my-input-search margin10 flex flex-middle relative">
                                <span className="ion-levels my-input-search-icon-lupe relative"></span>
                                <input type="" name="" placeholder="Search ..." className="flex" />
                                <span className="ion-ios-search my-input-search-icon absolute"></span>
                            </div>
                        </section>
                    </article>

                    <article className="flex width100 panel-header">
                        
                        <div className="padding10 flex flex-center panel-header-first">
                            <h3 className="color-gray text-center">
                                Promotor
                            </h3>
                        </div>

                        <div className="padding10 panel-header-second">
                            <h3 className="color-gray">
                                Reservation
                            </h3>
                        </div>

                        <div className="padding10 panel-header-third">
                            <h3 className="color-gray">
                                Date/Time
                            </h3>
                        </div>

                        <div className="padding10 text-center flex flex-center flex-middle panel-header-fourth">
                            <h3 className="color-gray">
                                Status
                            </h3>
                        </div>
                    </article>

                    {/* <section className="padding-bottom20 reservations" style="height:calc(85vh - 30vh); overflow-y:auto;"> */}
                    { this.state.clients.map(tab => {
                                return (
                                    <section className="padding-bottom20 reservations" onClick={()=>{
                                        this.goReservation()
                                    }}>
                                        <article className="flex width100 padding10-0 pointer reservations-list panel-header">
                                            
                                            <div className="padding0-10 flex flex-center panel-header-first" >
                                                <figure className="margin0 rounded border2 color-fuchia square70">
                                                    <img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" className="width100 rounded height100" />
                                                </figure>
                                            </div>

                                            <div className="padding10 panel-header-second">
                                                <h3 className="color-black font-normal font25 margin-bottom5">
                                                    Julia Robertson
                                                </h3>
                                                <p className="font18 color-gray">People: 4</p>
                                            </div>

                                            <div className="padding10 panel-header-third">
                                                <h3 className="color-black font-normal font23">
                                                    20 Nov
                                                </h3>
                                                <h3 className="color-black font-normal font23">
                                                    20 Hrs.
                                                </h3>
                                            </div>

                                            <div className="padding10 text-center flex flex-center flex-middle panel-header-fourth">
                                                <span className="ion-ios-checkmark-outline font30 color-green"></span>
                                                {/* <span className="ion-ios-close-outline font30" v-show="bt" style="color:red;"></span>
                                                <span className="ion-ios-clock-outline font30" v-show="bt" style="color:lightblue;"></span> */}

                                            </div>
                                        </article>
                                    </section>
                                )
                            }) }
                    

                    
                </section>
            </div>
        )
    }
}

export default Reservations