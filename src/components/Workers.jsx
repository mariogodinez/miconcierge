import React, { Component } from 'react'
import Menu from './Menu'


class Workers extends Component {

    constructor(props){
        super(props)
        this.state = {
            showWorkers: true,
            workers:[1,2,3,4,5]
        }
    }

    changeView(bo){
        const currentValUser = this.state.showWorkers
        const currentValCompany = this.state.showCompanyInfo
        
        this.setState({showWorkers: bo, showCompanyInfo: !bo,})
    }

    render () {
        return (
            <div className="flex">
                <Menu></Menu>
                <section class="workers width100">
                    <article className="margin0-20 relative padding20-0 border-bottom2 flex flex-between flex-middle">
                        <span style={{top: 30 + '%', left: -5 + 'px'}} className="absolute ion-arrow-left-c font30 margin-left20 color-gray pointer hover-fuchia" onClick={ () => this.goBack()}></span>
                        <h2 className={`text-center pointer relative ${this.state.showWorkers ? 'color-fuchia' : 'color-black'}`} style={{marginLeft: 25 + '%'}} onClick={ () => this.changeView(true)}>
                            Workers
                            <p className={`borderSectionBottom ${ !this.state.showWorkers ? 'hide' : ''}`} style={{left: 25 + 'px'}}></p>
                        </h2>

                        <h2 className={`text-center pointer relative ${ !this.state.showWorkers ? 'color-fuchia' : 'color-black'}`} style={{marginRight: 25 + '%'}} onClick={ () => this.changeView(false)}>
                            Workers Pending
                            <p className={`borderSectionBottom ${ this.state.showWorkers ? 'hide' : ''}`} style={{left: 50 + 'px'}}></p>
                        </h2>
                    </article>

                    <article className="margin-left20 margin-right20 flex flex-between">
                        <div className="padding20">
                            <h2 className="my-title relative">Workers <span className="absolute font-normal" style={{ 'font-size' : 14 + 'px' , right: -23 + 'px', bottom: -2 + 'px'}}>36</span></h2>
                            <h2 className="hide relative">Pending <span className="absolute font-normal" style={{ 'font-size' : 14 + 'px' , right: -23 + 'px', bottom: -2 + 'px'}}>6</span></h2>
                        </div>

                        <div className="my-input-search margin10 flex flex-middle relative">
                            <span className="ion-levels my-input-search-icon-lupe relative"></span>
                            <input type="" name="" placeholder="Search ..." className="flex" />
                            <span className="ion-ios-search my-input-search-icon absolute"></span>
                        </div>
                    </article>

                    <article className="flex margin20 width100 panel-header border-bottom2">
                        <div className="padding0 flex" style={{ width: 50 + 'px'}}>
                            
                        </div>
                        
                        <div className="padding10 flex panel-header-first">
                            <h3 className="color-gray">
                                Name
                            </h3>
                        </div>

                        <div className="padding10 panel-header-second">
                            <h3 className="color-gray">
                                Email
                            </h3>
                        </div>

                        <div className="padding10 panel-header-third" style={{width : 21 + '%'}}>
                            <h3 className="color-gray">
                                Phone
                            </h3>
                        </div>

                        <div className="padding10 text-center flex flex-center flex-middle panel-header-fourth">
                            <h3 className="color-gray">
                                Contact
                            </h3>
                        </div>

                        <div className="padding10 flex" style={{ width: 30 + 'px'}}>
                            
                        </div>
                    </article>

                    {
                        this.state.workers.map(item => {
                            return (<article className="flex flex-middle margin20 width100 panel-header">
                                <div className="padding0 flex margin-right15" style={{ width: 40 + 'px'}}>
                                <figure className="margin0 flex-none rounded border2 color-fuchia square40">
                                    <img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" className="width100 rounded height100" />
                                </figure>
                                </div>
                                
                                <div className="padding flex panel-header-first">
                                    <h3 className="color-gray font-normal">
                                        Julia Roberts
                                    </h3>
                                </div>

                                <div className="padding0 panel-header-second">
                                    <h3 className="color-gray font-normal">
                                        julrobts@gmail.com
                                    </h3>
                                </div>

                                <div className="padding0 panel-header-third" style={{width : 21 + '%'}}>
                                    <h3 className="color-gray font-normal">
                                        +52 333 233 5432
                                    </h3>
                                </div>

                                <div className="padding0 text-center flex flex-center flex-middle panel-header-fourth">
                                    <button style={{width: 100 + 'px'}} class="my-btn flex flex-middle flex-between back-white color-lightblue border2 round10">
                                        <span class="">Chat</span>
                                        <span class="ion-chatbox-working font20"></span>
                                    </button>
                                </div>

                                <div className="padding10 flex" style={{ width: 30 + 'px'}}>
                                    <span className="ion-trash-a relative font25" style={{right: 20 + 'px'}}></span>
                                </div>
                            </article>)

                        })
                    }

                    
                </section>
            </div>
        )
    }
}

export default Workers