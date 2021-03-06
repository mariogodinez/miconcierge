import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import is from 'is-js'
import Menu from './Menu'
import BasicInformation from './BasicInformation'
import ContactInformation from './ContactInformation'
import OperationInformation from './OperationInformation'
import Payments from './Payments'
import Completed from './Completed'
import SpecialServices from './SpecialServices'
import SpecialReq from './SpecialReq'

import ErrorTag from './ErrorTag'




class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
            showUserInfo: false,
            showCompanyInfo: false,
            step: 1,
            name:'',
            lastName:'',
            phone:'',
            email:'',
            password:'',
            repeatPassword:'',
            noValidLastName:  false,
            noValidName: false,
            noValidEmail: false,
            
        }
        // this.setStep = this.setStep.bind(this)
    }
    checkName(){
        if(is.empty(this.state.name)){
            this.setState({ noValidName : true})
        } else {
            this.setState({ noValidName : false})
        }
    }

    checkLastName(){
        if(is.empty(this.state.lastName)){
            this.setState({ noValidLastName : true})
        } else {
            this.setState({ noValidLastName : false})
        }
    }

    checkEmail(){
        if(is.empty(this.state.email)){
            this.setState({ noValidEmail : true })
        } else {
            this.setState({ noValidEmail : false})
        }
    }
    validateFields(){
        console.log(this.state)



        this.saveChanges()
    }

    setStep(number){
        console.log(number)
        this.setState({step: number})
        
    }
    goBack(){
        browserHistory.goBack()
    }

    changeView(bo){
        const currentValUser = this.state.showUserInfo
        const currentValCompany = this.state.showCompanyInfo
        
        this.setState({showUserInfo: bo, showCompanyInfo: !bo,})
    }

    next(){
        if(this.state.step == 7){
            return false
        }
        this.setState({step:  this.state.step + 1})
    }

    saveChanges(){
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
                        <h2 className={`text-center pointer relative ${this.state.showUserInfo ? 'color-fuchia' : 'color-black'}`} style={{marginLeft: 25 + '%'}} onClick={ () => this.changeView(true)}>
                            User info
                            <p className={`borderSectionBottom ${ !this.state.showUserInfo ? 'hide' : ''}`} style={{left: 25 + 'px'}}></p>
                        </h2>

                        <h2 className={`text-center pointer relative ${ !this.state.showUserInfo ? 'color-fuchia' : 'color-black'}`} style={{marginRight: 25 + '%'}} onClick={ () => this.changeView(false)}>
                            Company info
                            <p className={`borderSectionBottom ${ this.state.showUserInfo ? 'hide' : ''}`} style={{left: 50 + 'px'}}></p>
                        </h2>
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
                            <div className="width100 margin-right20 padding0-20 relative">
                                <h4 className="my-title">Name</h4>
                                <div>
                                    <input type="text" className="my-input" placeholder="Ex. Josh" onChange={e => this.setState({name: e.target.value})} onBlur={()=> this.checkName()}/>
                                </div>
                                <span className={`shot absolute ${this.state.noValidName ? 'flex' : 'hide'}`}>
                                    <ErrorTag msg="Please, check this field."></ErrorTag>
                                </span>
                                
                            </div>

                            <div className="width100 padding0-20 relative">
                                <h4 className="my-title">Last Name</h4>
                                <div>
                                    <input type="text" onChange={e => this.setState({ lastName: e.target.value })} className="my-input" onBlur={()=> this.checkLastName()}/>
                                </div>
                                <span className={`shot absolute ${this.state.noValidLastName ? 'flex' : 'hide'}`}>
                                    <ErrorTag msg="Please, check this field."></ErrorTag>
                                </span>
                            </div>
                        </article>

                        <article className="margin0-20 padding20-30 flex flex-center ">
                            <div className="width100 margin-right20 padding0-20 relative">
                                <h4 className="my-title">Email</h4>
                                <div>
                                    <input type="text" onChange={e => this.setState({ email: e.target.value })} className="my-input" onBlur={()=> this.checkEmail()}/>
                                </div>
                                <span className={`shot absolute ${this.state.noValidEmail ? 'flex' : 'hide'}`}>
                                    <ErrorTag msg="Please, check this field."></ErrorTag>
                                </span>
                            </div>

                            <div className="width100 padding0-20">
                                <h4 className="my-title">Phone</h4>
                                <div>
                                    <input type="text" className="my-input" onChange={e => this.setState({phone: e.target.value })}/>
                                </div>
                            </div>
                        </article>

                        <article className="margin0-20 padding20-30 flex flex-center " >
                            <div className="width100 margin-right20 padding0-20 relative">
                                <h4 className="my-title">Password</h4>
                                <div>
                                    <input type="password" className="my-input" onChange={e => this.setState({password: e.target.value })}/>
                                </div>
                                <span className={`shot absolute ${this.state.noValidPassword ? 'flex' : 'hide'}`}>
                                    <ErrorTag msg="Please, check this field."></ErrorTag>
                                </span>
                            </div>

                            <div className="width100 padding0-20 relative">
                                <h4 className="my-title">Confirm Password</h4>
                                <div>
                                    <input type="password" className="my-input" onChange={e => this.setState({repeatPassword: e.target.value })}/>
                                </div>
                                <span className={`shot absolute ${this.state.noValidRepeatPassword ? 'flex' : 'hide'}`}>
                                    <ErrorTag msg="Please, check this field."></ErrorTag>
                                </span>
                            </div>
                        </article>

                        <article className="margin0-20 flex flex-center" style={{paddingLeft: 30 + 'px'}}>
                            <div className="width100 margin-right20 padding10-20">
                                <h4 className="my-title">Profile Photo</h4>
                            </div>
                        </article>

                        <article className="margin0-20 flex flex-center" style={{paddingLeft: 40 + 'px', paddingRight: 40 + 'px'}}>
                            <div className="width100 margin-right20 padding0-10">
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
                                    <div className={`zIndex10 back-gray square20 rounded flex flex-center flex-middle absolute ${this.state.step == 1 ? 'activeItem' : ''}`} style={{top:  -5 + 'px'}}>
                                        <span className={`ion-checkmark color-white font18 ${this.state.step != 1 ? 'hide' : ''}`}></span>
                                    </div>
                                    <div className={`font15 relative ${this.state.step == 1 ? 'color-fuchia' : 'color-gray'}`} style={{top:  25 + 'px'}}>
                                    <p className="font-bold">Basic</p>
                                        <p className="font-bold">Information</p> 
                                    </div>
                                    
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(2) }>
                                    <div className={`zIndex10 square20 rounded flex flex-center back-gray flex-middle absolute ${this.state.step == 2 ? 'activeItem' : ''}`}  style={{top:  -5 + 'px'}}>
                                        <span className={`ion-checkmark color-white font18 ${this.state.step != 2 ? 'hide' : ''}`}></span>
                                    </div>
                                    <div className={`font15 relative ${this.state.step == 2 ? 'color-fuchia' : 'color-gray'}`} style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Contact</p>
                                        <p className=" font-bold">Information</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(3) }>
                                    <div className={`zIndex10 square20 rounded flex flex-center back-gray flex-middle absolute ${this.state.step == 3 ? 'activeItem' : ''}`} style={{top:  -5 + 'px'}}>
                                        <span className={`ion-checkmark color-white font18 ${this.state.step != 3 ? 'hide' : ''}`}></span>
                                    </div>
                                    <div className={`font15 relative ${this.state.step == 3 ? 'color-fuchia' : 'color-gray'}`} style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Operation</p>
                                        <p className=" font-bold">Information</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(4) }>
                                    <div className={`zIndex10 square20 rounded flex flex-center back-gray flex-middle absolute ${this.state.step == 4 ? 'activeItem' : ''}`} style={{top:  -5 + 'px'}}>
                                        <span className={`ion-checkmark color-white font18 ${this.state.step != 4 ? 'hide' : ''}`}></span>
                                    </div>
                                    <div className={`font15 relative ${this.state.step == 4 ? 'color-fuchia' : 'color-gray'}`} style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Payments</p>
                                        <p className=" font-bold opacity0">.</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(5) }>
                                    <div className={`zIndex10 square20 rounded flex flex-center back-gray flex-middle absolute ${this.state.step == 5 ? 'activeItem' : ''}`} style={{top:  -5 + 'px'}}>
                                        <span className={`ion-checkmark color-white font18 ${this.state.step != 5 ? 'hide' : ''}`}></span>
                                    </div>
                                    <div className={`font15 relative ${this.state.step == 5 ? 'color-fuchia' : 'color-gray'}`} style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Special</p>
                                        <p className=" font-bold">Requirements</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(6) }>
                                    <div className={`zIndex10 square20 rounded flex flex-center back-gray flex-middle absolute ${this.state.step == 6 ? 'activeItem' : ''}`} style={{top:  -5 + 'px'}}>
                                        <span className={`ion-checkmark color-white font18 ${this.state.step != 6 ? 'hide' : ''}`}></span>
                                    </div>
                                    <div className={`font15 relative ${this.state.step == 6 ? 'color-fuchia' : 'color-gray'}`} style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Special</p>
                                        <p className=" font-bold">Services & Addons</p> 
                                    </div>
                                </div>

                                <div className="text-center flex flex-center flex-column flex-middle relative pointer" onClick={() => this.setStep(7) }>
                                    <div className={`zIndex10 square20 rounded flex flex-center flex-middle absolute ${this.state.step == 7 ? 'back-green' : 'back-gray'}`} style={{top:  -5 + 'px'}}>
                                        <span className={`ion-checkmark color-white font18 ${this.state.step != 7 ? 'hide' : ''}`}></span>
                                    </div>
                                    <div className={`font15 relative ${this.state.step == 7 ? 'color-fuchia' : 'color-gray'}`} style={{top:  25 + 'px'}}>
                                        <p className=" font-bold">Completed</p>
                                        <p className=" font-bold opacity0">.</p> 
                                    </div>
                                </div>
                            </article>
                            </section>
                            {
                                        
                                this.state.step == 1 ? <BasicInformation></BasicInformation> : this.state.step == 2 ? <ContactInformation></ContactInformation> : this.state.step == 3 ? <OperationInformation></OperationInformation> : this.state.step == 4 ? <Payments></Payments> : 
                                this.state.step == 5 ? <SpecialReq></SpecialReq> : 
                                this.state.step == 6 ? <SpecialServices></SpecialServices> :  this.state.step == 7 ? <Completed></Completed> :''
                            }
                        </div>
                        
                        )
                    }
                    
                     <div className="flex flex-middle margin-right20 skipSave">
                        <p className="margin-right20 font20 pointer" onClick={()=> {
                            this.next()
                         }}>Skip</p>
                        <button className="my-btn back-fuchia color-white" style={{width:180  + 'px !important', paddingRight: 30 + 'px', paddingLeft: 30 + 'px', paddingTop: 15 + 'px',paddingBottom: 15 + 'px'}} onClick={()=> {
                            this.validateFields()
                         }}>Save</button>
                    </div>
                </section>
               
            </div>
        )
    }
}


export default Settings