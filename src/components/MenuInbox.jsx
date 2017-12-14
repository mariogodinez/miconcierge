import React, { Component } from 'react'
import { Link } from 'react-router'

class MenuInbox extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [1,2,3,4,5],
            active: false
        }
    }

    render(){

        return (
            <div>
                <section className="my-nav-inbox padding10">
                    <article className="flex flex-center relative">
                        <figure className="center-block padding20">
                            <img src="./img/miconcierge.png" className="width100" alt="logo miconcierge" />
                        </figure>
                        <div className="my-nav-inbox-switch flex flex-middle">
                            <span className={`${ this.state.active ? 'color-fuchia' : ''}`}  style={{marginRight: 3 + 'px'}}>On</span>
                            <span className={`fa pointer color-fuchia fa-toggle-on font25  ${ !this.state.active ? 'hide' : 'flex'}`} onClick={() =>{ this.setState({ active: !this.state.active }) }}></span>

                            <span className={`fa pointer fa-toggle-off font25  ${ this.state.active ? 'hide' : 'flex'}`} onClick={() =>{ this.setState({ active: !this.state.active }) }}></span>    
                            <span className={`${ !this.state.active ? 'color-black' : ''}`} style={{marginLeft: 3 + 'px'}}>Off</span>
                        </div>
                    </article>

                    <article className="my-nav-inbox-list">
                    {
                        this.state.messages.map(message => {
                            return (
                                <div className="my-nav-inbox-list-item flex flex-middle padding20-0 relative">
                                    <figure className="my-nav-inbox-list-item-img margin0 flex-none rounded border2 color-fuchia">
                                        <img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" className="width100 rounded height100" />
                                    </figure>
                                    <div className="margin-left10 my-nav-inbox-list-item-copy">
                                    <div className="flex flex-middle">
                                        <div className="flex flex-middle my-nav-inbox-list-item-copy-person">
                                            <h3>Mario Godme</h3>
                                            
                                        </div>
                                        <span className="my-badge margin-left5 back-fuchia flex flex-middle flex-center">1</span>
                                    </div>
                                        
                                        <div className="my-nav-inbox-list-item-copy-msg">
                                            <p>lorem ipsunm apemt dolor ter lowercase domper</p>
                                        </div>
                                    </div>
                                    <div className="my-nav-inbox-list-item-actions">
                                        <p className="font1em">30 min</p>
                                        <p className="text-right my-nav-inbox-list-item-actions-action"><span className="ion-android-more-vertical font25"></span></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                        
                    </article>
                </section>
            </div>
        )
    }
}



export default MenuInbox