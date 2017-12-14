import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Menu from './Menu'
import ModalAddReservation from './ModalAddReservation'



class Reservations extends Component {
    constructor(props){
        super(props)

        this.state = {
            showAddReservation: false,
            clients: [1,2,3,4,5],
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

    handleShowAddReservation(){
        alert('yea')
        
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

                    <article className="flex padding0-20 width100 panel-header">
                        
                        <div className="padding10 flex panel-header-first">
                            <h3 className="color-gray">
                                Recommended by
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
                    <div className="heightSectionScroll width100 padding-bottom30">
                    { this.state.clients.map(tab => {
                                return (
                                    
                                <section className="reservations " onClick={()=>{
                                        this.goReservation()
                                    }}>
                                        <article className="flex width100 padding0-10 pointer reservations-list panel-header">
                                            
                                            <div className="padding0-20 panel-header-first" >
                                                <h3 className="color-black font-normal font25 margin-bottom5">
                                                Felipe Carrillo
                                                </h3>
                                                <p className="font18 color-gray">Hotel Xcaret</p>
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
                     </div>

                    
                </section>
                <div onClick={()=>{ this.setState({ showAddReservation : true }) }} className="back-lightblue  rounded absolute flex flex-middle flex-center square60 shadowCard pointer" style={{bottom: 12 + 'px', right: 12 + 'px'}}>
                    <span className="ion-plus-round font25 color-white"></span>
                </div>
                {
                    this.state.showAddReservation ? <ModalAddReservation></ModalAddReservation> : ''
                }
                
            </div>
        )
    }
}

export default Reservations