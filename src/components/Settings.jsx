import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Menu from './Menu'
import BasicInformation from './BasicInformation'
import ContactInformation from './ContactInformation'
import OperationInformation from './OperationInformation'
import Payments from './Payments'
import Completed from './Completed'
import SpecialServices from './SpecialServices'




class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
            showUserInfo: false,
            showCompanyInfo: false,
            step: 4
        }
        // this.setStep = this.setStep.bind(this)
    }
    setStep(number){
        console.log(number)
        this.setState({step: number})
        
    }
    goBack(){
        browserHistory.goBack()
    }

    changeView(boolean){
        const currentValUser = this.state.showUserInfo
        const currentValCompany = this.state.showCompanyInfo
        
        this.setState({showUserInfo: !currentValUser, showCompanyInfo: !currentValCompany,})
    }

    render(){

        // let sectionActive = null 
        // if(this.state.showCompanyInfo && this.state.step == 1){
        //     sectionActive =  '<BasicInformation></BasicInformation>'
        // }
        // if(this.state.showCompanyInfo && this.state.step == 2){
        //     sectionActive =  '<ContactInformation></ContactInformation>'
        // }




        return (
            <div className="flex">
                <Menu></Menu>
                <section className="width100">
                    <article className="margin0-20 relative padding20-0 border-bottom2 flex flex-between flex-middle">
                        <span style={{top: 30 + '%', left: -5 + 'px'}} className="absolute ion-arrow-left-c font30 margin-left20 color-gray pointer hover-fuchia" onClick={ () => this.goBack()}></span>
                        <h2 className={"text-center pointer " + this.state.showUserInfo ? 'color-fuchia' :''} style={{marginLeft: 25 + '%'}} onClick={ () => this.changeView()}>User info</h2>
                        <h2 className={"text-center pointer " + this.state.showCompanyInfo ? 'color-fuchia' : ''} style={{marginRight: 25 + '%'}} onClick={ () => this.changeView()}>Company info</h2>
                    </article>
                    
                    {
                        this.state.showUserInfo ? (
                        <section className="flex flex-center flex-column relative">
                         <article className="margin0-20 padding10-0 flex flex-center padding-bottom0">
                            <div className="text-center flex flex-center flex-column flex-middle">
                                <div className="back-fuchia square30 rounded flex flex-center flex-middle">
                                    <span className="ion-checkmark color-white font18"></span>
                                </div>
                                <p className="color-fuchia font-bold">Basic</p>
                                <p className="color-fuchia font-bold">Information</p>
                            </div>
                        </article>

                        <article className="margin0-20 padding20-30 flex flex-center">
                            <div className="width100 margin-right20 padding0-20">
                                <h4>Name</h4>
                                <div>
                                    <input type="text" className="my-input" value="Juan"/>
                                </div>
                            </div>

                            <div className="width100 padding0-20">
                                <h4>Last Name</h4>
                                <div>
                                    <input type="text" className="my-input" value="Gomez"/>
                                </div>
                            </div>
                        </article>

                        <article className="margin0-20 padding20-30 flex flex-center">
                            <div className="width100 margin-right20 padding0-20">
                                <h4>Email</h4>
                                <div>
                                    <input type="text" className="my-input" value="juangomez@gmail.com"/>
                                </div>
                            </div>

                            <div className="width100 padding0-20">
                                <h4>Phone</h4>
                                <div>
                                    <input type="text" className="my-input" value="+5523872399"/>
                                </div>
                            </div>
                        </article>

                        <article className="margin0-20 padding20-30 flex flex-center">
                            <div className="width100 margin-right20 padding0-20">
                                <h4>Password</h4>
                                <div>
                                    <input type="password" className="my-input" value="jsfdfre"/>
                                </div>
                            </div>

                            <div className="width100 padding0-20">
                                <h4>Confirm Password</h4>
                                <div>
                                    <input type="password" className="my-input" value="jsfdfre"/>
                                </div>
                            </div>
                        </article>

                        <article className="margin0-20 flex flex-center" style={{paddingLeft: 30 + 'px'}}>
                            <div className="width100 margin-right20 padding0-20">
                                <h4>Profile Photo</h4>
                            </div>
                        </article>

                        <article className="margin0-20 flex flex-center" style={{paddingLeft: 40 + 'px', paddingRight: 40 + 'px'}}>
                            <div className="width100 margin-right20 padding10-20">
                                <figure className="margin0 rounded border2 color-fuchia square70 back-gray relative">
                                    {/* <img src="https://scontent.fgdl1-2.fna.fbcdn.net/v/t1.0-9/19224935_10207926979927346_4253521002093344347_n.jpg?oh=30cec9bcfc8d89bf2c4a11734cd0a26a&oe=5A6C6420" className="width100 rounded height100" /> */}
                                    <span className="fa fa-user absolute font30 color-black" style={{top: 20 + 'px', left: 25 + 'px'}}></span>
                                </figure>
                            </div>

                            
                        </article>
                    </section>) : (
                        <div >
                            <section className="flex flex-center">
                            <article className="companyInfo-stateLine margin0-20 padding20 flex flex-between padding-bottom0">
                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(1) }>
                                    <div className="zIndex10 back-fuchia square30 rounded flex flex-center flex-middle absolute" style={{top:  -5 + 'px'}}>
                                        <span className="ion-checkmark color-white font18"></span>
                                    </div>
                                    <div className="relative color-fuchia" style={{top:  25 + 'px'}}>
                                    <p className="font-bold">Basic</p>
                                        <p className="font-bold">Information</p> 
                                    </div>
                                    
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(2) }>
                                    <div className="zIndex10 back-gray square20 rounded flex flex-center flex-middle absolute" style={{top:  -5 + 'px'}}>
                                        {/* <span className="ion-checkmark color-white font18"></span> */}
                                    </div>
                                    <div className="relative color-gray font15 " style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Contact</p>
                                        <p className=" font-bold">Information</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(3) }>
                                    <div className="zIndex10 back-gray square20 rounded flex flex-center flex-middle absolute" style={{top:  -5 + 'px'}}>
                                        {/* <span className="ion-checkmark color-white font18"></span> */}
                                    </div>
                                    <div className="relative color-gray font15 " style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Operation</p>
                                        <p className=" font-bold">Information</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(4) }>
                                    <div className="zIndex10 back-gray square20 rounded flex flex-center flex-middle absolute" style={{top:  -5 + 'px'}}>
                                        {/* <span className="ion-checkmark color-white font18"></span> */}
                                    </div>
                                    <div className="relative color-gray font15 " style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Payments</p>
                                        <p className=" font-bold opacity0">.</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(5) }>
                                    <div className="zIndex10 back-gray square20 rounded flex flex-center flex-middle absolute" style={{top:  -5 + 'px'}}>
                                        {/* <span className="ion-checkmark color-white font18"></span> */}
                                    </div>
                                    <div className="relative color-gray font15 " style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Special</p>
                                        <p className=" font-bold">Requirements</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(6) }>
                                    <div className="zIndex10 back-gray square20 rounded flex flex-center flex-middle absolute" style={{top:  -5 + 'px'}}>
                                        {/* <span className="ion-checkmark color-white font18"></span> */}
                                    </div>
                                    <div className="relative color-gray font15 " style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Special</p>
                                        <p className=" font-bold">Services & Addons</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(7) }>
                                    <div className="zIndex10 back-green square20 rounded flex flex-center flex-middle absolute" style={{top:  -5 + 'px'}}>
                                        {/* <span className="ion-checkmark color-white font18"></span> */}
                                    </div>
                                    <div className="relative color-gray font15 " style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Completed</p>
                                        <p className=" font-bold opacity0">.</p> 
                                    </div>
                                </div>
                            </article>
                            </section>
                            {
                                        
                                this.state.step == 1 ? <BasicInformation></BasicInformation> : this.state.step == 2 ? <ContactInformation></ContactInformation> : this.state.step == 3 ? <OperationInformation></OperationInformation> : this.state.step == 4 ? <Payments></Payments> : 
                                this.state.step == 6 ? <SpecialServices></SpecialServices> :  this.state.step == 7 ? <Completed></Completed> :''
                            }
                        </div>
                        
                        )
                    }
                    
                     <div className="flex flex-middle margin-right20 skipSave">
                        <p className="margin-right20 font20">Skip</p>
                        <button className="my-btn back-fuchia color-white" style={{width:180  + 'px !important', paddingRight: 30 + 'px', paddingLeft: 30 + 'px', paddingTop: 15 + 'px',paddingBottom: 15 + 'px'}}>Save</button>
                    </div>
                </section>
               
            </div>
        )
    }
}


export default Settings