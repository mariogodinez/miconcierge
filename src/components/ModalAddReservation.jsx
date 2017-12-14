import React, { Component } from 'react'





class ModalAddReservation extends Component {
    render(){
        return (
           
              <section name="modal">
                <div className="modal-mask">
                  <div className="modal-wrapper">
                    <div className="modal-container">
            
                      <div className="modal-header padding10">
                          <h1 className="text-center">Add New Reservation</h1>
                      </div>
            
                      <section className="">
                        <article  className="margin20 flex flex-between">
                          <div className="flex width100 margin-right20 padding0-20 relative" style={{top : 2 + 'px'}}>
                            <div className="width100 margin-right20">
                                <h4 className="margin-bottom20">Date</h4>
                                <div>
                                    <input type="text" className="my-input"/>
                                </div>
                            </div>

                            <div className="width100">
                                <h4 className="margin-bottom20">Time</h4>
                                <div>
                                    <input type="text" className="my-input"/>
                                </div>
                            </div>
                          </div>
                          <div className="padding0-20 width100">
                            <h4>People</h4>
                            <div className="flex flex-middle border-bottom1" style={{ height: 60 + 'px'}}>
                              
                              <div className="flex flex-middle margin-right30">
                                <span className="flex margin-right5">
                                    <div className="flex flex-column flex-middle margin-right5">
                                        <p className="color-darkgray ion-arrow-up-b font25 relative" style={{ bottom: -7 + 'px'}}></p>
                                        <p className="padding2-5 back-whity color-darkgray">2</p>
                                        <p className="color-darkgray ion-arrow-down-b font25 relative" style={{ top: -6 + 'px'}}></p>
                                    </div>
                                </span>
                                <p>Adults</p>
                              </div>

                              <div className="flex flex-middle">
                                <span className="flex margin-right5">
                                    <div className="flex flex-column flex-middle margin-right5">
                                        <p className="color-darkgray ion-arrow-up-b font25 relative" style={{ bottom: -7 + 'px'}}></p>
                                        <p className="padding2-5 back-whity color-darkgray">0</p>
                                        <p className="color-darkgray ion-arrow-down-b font25 relative" style={{ top: -6 + 'px'}}></p>
                                    </div>

                                </span>
                                <p>Kids</p>
                              </div>
                                  
                                
                            </div> 
                          </div>
                          
                        </article>

                        <article className="margin20 flex flex-center">
                          <div className="width100 margin-right20 padding0-20">
                              <h4>Name</h4>
                              <div>
                                  <input type="text" className="my-input"/>
                              </div>
                          </div>

                          <div className="width100 padding0-20">
                              <h4>Last Name</h4>
                              <div>
                                  <input type="text" className="my-input"/>
                              </div>
                          </div>
                        </article>

                        <article className="margin20 flex flex-center">
                          <div className="width100 margin-right20 padding0-20">
                              <h4>Email</h4>
                              <div>
                                  <input type="email" className="my-input"/>
                              </div>
                          </div>

                          <div className="width100 padding0-20">
                              <h4>Phone</h4>
                              <div>
                                  <input type="text" className="my-input"/>
                              </div>
                          </div>
                        </article>

                        <article className="margin20 flex flex-center">
                          <div className="width100 margin-right20 padding0-20">
                              <h4>Comes from</h4>
                              <div>
                                  <input type="email" className="my-input"/>
                              </div>
                          </div>

                          <div className="width100 padding0-20">
                              <h4>Promoter</h4>
                              <div>
                                  <input type="text" className="my-input"/>
                              </div>
                          </div>
                        </article>
                        <br/>
                        <article className="margin20 flex flex-center">
                            <div className="flex flex-middle">
                              <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                  <input checked type="radio" name="yesNo" id="privacityCheck" className=" pointer" />
                                  <label className="check-icon back-fuchia"></label>
                              </div>
                              <h4 className="color-gray margin-left5">Aproved</h4>  
                            </div>

                            <div className="flex flex-middle margin-left20 margin-right20">
                              <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                  <input  type="radio" name="yesNo" id="privacityCheck" className=" pointer" />
                                  <label className="check-icon back-fuchia"></label>
                              </div>
                              <h4 className="color-gray margin-left5">Pending</h4>  
                            </div>

                            <div className="flex flex-middle">
                              <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                  <input type="radio" name="yesNo" id="privacityCheck" className=" pointer" />
                                  <label className="check-icon back-fuchia"></label>
                              </div>
                              <h4 className="color-gray margin-left5">Canceled</h4>  
                            </div>
                        </article>

                        <article className="flex flex-center margin10 font20" >
                          <button className="back-fuchia my-btn padding20" style={{width : 230 + 'px'}}>
                            <span className="color-white">Reserve</span>
                          </button>
                        </article>

                        
                      </section>
                    </div>
                  </div>
                </div>
              </section>
            
        )
    }
}


export default ModalAddReservation