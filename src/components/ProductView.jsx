import React, { Component } from 'react'
import Menu from './Menu'
import { browserHistory } from 'react-router'



class ProductView extends Component{

    goBack(){
        browserHistory.goBack()
    }

    render(){
        return (
            <div className="flex">
                <Menu></Menu>
                <section class="width100">
                    <article class="margin0-20 padding20-0 border-bottom2 flex flex-between flex-middle">
                        <span class="ion-arrow-left-c font30 margin-left20 color-gray pointer hover-fuchia" onClick={ () => this.goBack()}></span>
                        <h2 class="color-fuchia text-center ">Product View</h2>
                        <span></span>
                    </article>

                    <article class="flex flex-middle flex-right">
                        
                        <section class="margin-left20 margin-right20">
                            <div class="my-input-search margin10 flex flex-middle relative">
                                <span class="ion-ios-search my-input-search-icon relative" style={{left: 10 + 'px'}}></span>
                                <input type="" name="" placeholder="Search ..." class="flex" />
                                <span class="ion-levels my-input-search-icon absolute" style={{right: 15  + 'px'}}></span>
                            </div>
                        </section>
                    </article>

                    <section class="padding-bottom20 center-block">
                        <article class="flex width100">
                            <div class="padding0-20 width100 flex flex-middle flex-between">
                                <h3 class="pointer margin0 font1em color-darkblue opacity80">
                                    Category <span className="relative">></span>
                                    <span>Special Dinner</span>
                                </h3>
                            </div>
                        </article>
                        <section class="flex width100 padding10-20">
                            <article class="margin-right20" style={{width: 44 + '%'}}>
                                <figure class="width100">
                                    <img class="round10 width100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhRLE8XH9NiMAXLkdh5ueUOkyO8wesKRN-jvgA1N3xpX1eYRHFA"/>
                                </figure>
                                <div class="flex margin-top10">
                                    <figure class="margin-right15">
                                        <img class="round10 width100" src="http://cdn.skim.gs/images/fsbr9qxckrxyuh0dobql/jana-kramers-courage-steals-the-dancing-with-the-stars-spotlight"/>
                                    </figure>
                                    <figure class="">
                                        <img class="round10 width100" src="http://cdn.skim.gs/images/fsbr9qxckrxyuh0dobql/jana-kramers-courage-steals-the-dancing-with-the-stars-spotlight"/>
                                    </figure>
                                </div>
                            </article>
                            <article style={{width : 45 + '%'}}>
                                <div>
                                    <h3 class="margin0 font20 color-darkblue opacity80">New Year Dance</h3>
                                </div>

                                <div class="padding10-0 flex flex-between">
                                    <div>
                                        <span class="relative margin-right15 ">
                                            <span class="color-gray off-price">$289</span>
                                        </span>
                                        
                                        <span class="font-bold color-fuchia">$259</span>
                                    </div>
                                    <div>
                                        <span class="margin-right15 font-bold color-gray">Incentive:</span>
                                        <span class="font-bold color-lightblue relative" style={{letterSpacing: 1 + 'px'}}>
                                            $10 USD
                                            <span style={{position: 'absolute', bottom:-15 + 'px', right:0, fontSize:.9 + 'em', letterSpacing:0}}>for sale</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="padding10-0">
                                    <h4 class="margin0 color-darkblue opacity50">Include: (or Description)</h4>
                                </div>
                                <div class="padding10-0">
                                    <p class="margin0 color-darkblue">Lorem ipsum dolor sit amet, consectetur adipi eprehe nderi riatur. Excepteur sint occaecat cupidatat non met loremi nsd loerm edwei efwfrnwqd wdqeded rfe
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div class="padding10-0 margin-bottom20">
                                    {/* <p v-for="i in 4">- item {{i}}</p> */}
                                </div>

                                <div>
                                    <button class="my-btn padding1em back-fuchia color-white width100">Reserve</button>
                                </div>
                            </article>
                        </section>
                        
                    </section>


                    
                </section>
            </div>
        )
    }
}



export default ProductView