
import React, { Component } from 'react'

class OperationInformation extends Component {

    render (){
        return (
            <section className="relative">
              
                
                <article className="margin20 padding20-30 flex flex-center">
                    <div className="width100 margin-right20 padding0-20">
                        <h4 className="my-title">Operating cities</h4>
                        <div>
                            <input type="text" className="my-input" value="+52 559345533"/>
                        </div>
                    </div>
                    <div className="width100 padding0-20">
                        <h4 className="my-title">Operating months</h4>
                        <div>
                            <input type="text" className="my-input" value="info@restaurant.com"/>
                        </div>
                    </div>
                </article>

                <article className="margin20 padding20-30 flex flex-center">
                    <div className="width100 margin-right20 padding0-20">
                        <h4 className="my-title">Operating days</h4>
                        <div>
                            <h3 className="padding10-0 font-normal border-bottom1">7 day a month</h3>
                            <div className="back-gray operatingDays-box">
                                <p className="operatingDays-box-item">7 days a week</p>
                                <p className="operatingDays-box-item">Only weekends</p>
                                <p className="operatingDays-box-item">Mon - Fri</p>
                                <p className="operatingDays-box-item">Sunday</p>
                                <p className="operatingDays-box-item">Monday</p>
                                <p className="operatingDays-box-item">Tuesday</p>
                                <p className="operatingDays-box-item">Wednesday</p>
                                <p className="operatingDays-box-item">Thursday</p>
                                <p className="operatingDays-box-item">Friday</p>
                                <p className="operatingDays-box-item">Saturday</p>
                            </div>
                        </div>
                    </div>
                    <div className="width100 padding0-20">
                        <div>
                          <h4 className="my-title">Open/Close</h4>
                          <div className="flex flex-middle border-bottom1 margin-bottom20" style={{ height: 60 + 'px'}}>
                              <h3 className="margin-right30" style={{ width: 60 + 'px'}}>From:</h3>
                                <span className="flex margin-right30">
                                    <div className="flex flex-column flex-middle margin-right5">
                                        <p className="color-darkgray ion-arrow-up-b font25 relative" style={{ bottom: -7 + 'px'}}></p>
                                        <p className="padding2-5 back-whity color-darkgray">12</p>
                                        <p className="color-darkgray ion-arrow-down-b font25 relative" style={{ top: -8 + 'px'}}></p>
                                    </div>

                                    <div className="flex flex-column flex-middle">
                                        <p className="color-darkgray ion-arrow-up-b font25 relative" style={{ bottom: -7 + 'px'}}></p>
                                        <p className="padding2-5 back-whity color-darkgray">30</p>
                                        <p className="color-darkgray ion-arrow-down-b font25 relative" style={{ top: -8 + 'px'}}></p>
                                    </div>
                                </span>

                              <span className="flex margin-right20">
                                <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                    <input type="radio" name="yesNo" id="privacityCheck" className=" pointer" />
                                    <label className="check-icon back-fuchia"></label>
                                </div>
                                <h4 className="color-gray margin-left5">AM</h4>  
                              </span>

                              <span className="flex">
                                <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                    <input type="radio" name="yesNo" id="privacityCheck" className=" pointer" />
                                    <label className="check-icon back-fuchia"></label>
                                </div>
                                <h4 className="color-gray margin-left5">PM</h4>  
                              </span>
                              
                          </div>

                          <div className="flex flex-middle border-bottom1" style={{ height: 60 + 'px'}}>
                              <h3 className="margin-right30" style={{ width: 60 + 'px'}}>To:</h3>
                                <span className="flex margin-right30">
                                    <div className="flex flex-column flex-middle margin-right5">
                                        <p className="color-darkgray ion-arrow-up-b font25 relative" style={{ bottom: -7 + 'px'}}></p>
                                        <p className="padding2-5 back-whity color-darkgray">12</p>
                                        <p className="color-darkgray ion-arrow-down-b font25 relative" style={{ top: -8 + 'px'}}></p>
                                    </div>

                                    <div className="flex flex-column flex-middle">
                                        <p className="color-darkgray ion-arrow-up-b font25 relative" style={{ bottom: -7 + 'px'}}></p>
                                        <p className="padding2-5 back-whity color-darkgray">30</p>
                                        <p className="color-darkgray ion-arrow-down-b font25 relative" style={{ top: -8 + 'px'}}></p>
                                    </div>
                                </span>

                              <span className="flex margin-right20">
                                <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                    <input type="radio" name="to" id="privacityCheck" className=" pointer" />
                                    <label className="check-icon back-fuchia"></label>
                                </div>
                                <h4 className="color-gray margin-left5">AM</h4>  
                              </span>

                              <span className="flex">
                                <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                    <input type="radio" name="to" id="privacityCheck" className=" pointer" />
                                    <label className="check-icon back-fuchia"></label>
                                </div>
                                <h4 className="color-gray margin-left5">PM</h4>  
                              </span>
                              
                          </div> 
                        </div>
                        
                    </div>
                </article>


                <article className="margin0-20 flex flex-center" style={{paddingLeft: 40 + 'px', paddingRight: 40 + 'px'}}>
                <div className="width100 margin-right20 padding10-20">
                    
                </div>
            </article>
        </section>
        )
    }
}


export default OperationInformation