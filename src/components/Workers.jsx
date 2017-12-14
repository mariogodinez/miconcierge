import React, { Component } from 'react'
import Menu from './Menu'


class Workers extends Component {

    constructor(props){
        super(props)
        this.state = {
            showWorkers: true
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

                    <section className="margin-left20 margin-right20 flex flex-between">
                        <div className="padding20">
                            <h2 className="my-title relative">Workers <span className="absolute font-normal" style={{ 'font-size' : 14 + 'px' , right: -23 + 'px', bottom: -2 + 'px'}}>36</span></h2>
                            <h2 className="hide relative">Pending <span className="absolute font-normal" style={{ 'font-size' : 14 + 'px' , right: -23 + 'px', bottom: -2 + 'px'}}>6</span></h2>
                        </div>

                        <div className="my-input-search margin10 flex flex-middle relative">
                            <span className="ion-levels my-input-search-icon-lupe relative"></span>
                            <input type="" name="" placeholder="Search ..." className="flex" />
                            <span className="ion-ios-search my-input-search-icon absolute"></span>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}

export default Workers