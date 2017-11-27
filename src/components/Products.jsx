import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Menu from './Menu'


class Products extends Component {
    constructor(props){
        super(props)

        
    }

    goReservation(){
        browserHistory.push('/product-view')
    }

    render () {
        return (
            <div className="flex height85vh">
                <Menu></Menu>
                <section className="width100">
                    <article className="margin0-20 padding20-0 border-bottom2">
                        <h2 className="color-fuchia text-center">Products</h2>
                    </article>

                    <article className="flex flex-middle flex-right">
                        
                        <section className="margin-left20 margin-right20">
                            <div className="my-input-search margin10 flex flex-middle relative">
                                <span className="ion-ios-search my-input-search-icon relative" style={{left : 10 + 'px'}}></span>
                                <input type="" name="" placeholder="Search ..." className="flex" />
                                <span className="ion-levels my-input-search-icon absolute" style={{right : 15 + 'px'}}></span>
                            </div>
                        </section>
                    </article>

                    <section className="padding-bottom20 center-block heightSectionScroll">
                        <div className="width100">
                            <article className="flex width100">
                                <div className="padding10-20 width100 flex flex-middle flex-between">
                                    <h3 className="pointer color-darkblue opacity80">Special events</h3>
                                    <span className="pointer margin-right20 color-darkblue opacity80">View all</span>
                                </div>
                            </article>

                            <article className="flex">
                                <div className="margin20 round10 shadowCard pointer">
                                    <figure className="margin0" style={{width : 20.3 + 'vw'}}>
                                        <img className="roundTop10 width100" src="https://cdn-jpg3.thedailymeal.com/sites/default/files/styles/hero_image_breakpoints_theme_tdmr_lg_1x/public/story/shutterstock_185740553.jpg?itok=xdSGDCK8&timestamp=1487780910" />
                                    </figure>
                                    <div className="padding5-15">
                                        <h4 className="margin0 color-darkblue opacity80">Dinner metting</h4>
                                        <div className="flex flex-middle flex-between">
                                            <p className="margin0 color-fuchia fon15">$189</p>
                                            <p className="margin0 color-lightblue fon15" >Reservation</p>
                                            {/* <p className="margin0 color-lightblue fon15" v-show="i ==2">Sale</p>
                                            <p className="margin0 color-lightblue fon15" v-show="i ==3">Rent</p> */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="width100">
                            <article className="flex width100">
                                <div className="padding10-20 width100 flex flex-middle flex-between">
                                    <h3 className="pointer color-darkblue opacity80">Dinner</h3>
                                    <span className="pointer margin-right20 color-darkblue opacity80">View all</span>
                                </div>
                            </article>

                            <article className="flex">
                                <div className="margin20 round10 shadowCard pointer">
                                    <figure className="margin0" style={{width : 20.3 + 'vw'}}>
                                        <img className="roundTop10 width100" src="https://cdn-jpg3.thedailymeal.com/sites/default/files/styles/hero_image_breakpoints_theme_tdmr_lg_1x/public/story/shutterstock_185740553.jpg?itok=xdSGDCK8&timestamp=1487780910" />
                                    </figure>
                                    <div className="padding5-15">
                                        <h4 className="margin0 color-darkblue opacity80">Dinner metting</h4>
                                        <div className="flex flex-middle flex-between">
                                            <p className="margin0 color-fuchia fon15">$255</p>
                                            {/* <p className="margin0 color-lightblue fon15" v-show="i ==1">Reservation</p> */}
                                            <p className="margin0 color-lightblue fon15">Sale</p>
                                            {/* <p className="margin0 color-lightblue fon15" v-show="i ==3">Rent</p> */}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="width100">
                            <article className="flex width100">
                                <div className="padding10-20 width100 flex flex-middle flex-between">
                                    <h3 className="pointer color-darkblue opacity80">Lunch</h3>
                                    <span className="pointer margin-right20 color-darkblue opacity80">View all</span>
                                </div>
                            </article>

                            <article className="flex">
                                <div className="margin20 round10 shadowCard pointer">
                                    <figure className="margin0" style={{width : 20.3 + 'vw'}}>
                                        <img className="roundTop10 width100" src="https://cdn-jpg3.thedailymeal.com/sites/default/files/styles/hero_image_breakpoints_theme_tdmr_lg_1x/public/story/shutterstock_185740553.jpg?itok=xdSGDCK8&timestamp=1487780910" />
                                    </figure>
                                    <div className="padding5-15">
                                        <h4 className="margin0 color-darkblue opacity80">Dinner metting</h4>
                                        <div className="flex flex-middle flex-between">
                                            <p className="margin0 color-fuchia fon15">$359</p>
                                            {/* <p className="margin0 color-lightblue fon15" v-show="i ==1">Reservation</p>
                                            <p className="margin0 color-lightblue fon15" v-show="i ==2">Sale</p> */}
                                            <p className="margin0 color-lightblue fon15">Rent</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        
                    </section>
                </section>
            </div>
        )
    }
}

export default Products

