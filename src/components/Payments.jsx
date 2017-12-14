
import React, { Component } from 'react'

class Payments extends Component {

    render (){
        return (
            <section>
                <article className="margin20 padding20-30">
                    <div className="width100 margin-right20 padding20">
                        <h3 className="color-gray">Payments options</h3>
                    </div>
                    <section >
                        <article className="flex padding20">
                            <section className="padding0-20">
                                <div>
                                    <h4 className="my-title">Credit Card</h4>
                                </div>
                                <div className="square30"></div>
                                <article className="width100">
                                    <div className="flex margin-bottom15">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">Visa</h3>
                                    </div>
                                    <div className="flex margin-bottom15">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">Mastercard</h3>
                                    </div>

                                    <div className="flex">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">American Express</h3>
                                    </div>
                                </article>

                            </section>

                            <section className="margin0-20 padding0-20">
                                <div>
                                    <h4 className="my-title">Cash</h4>
                                </div>
                                <div className="square30"></div>
                                <article className="width100">
                                    <div className="flex margin-bottom15">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">Cash USD</h3>
                                    </div>
                                    <div className="flex margin-bottom15">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">CASH MXN</h3>
                                    </div>

                                    <div className="flex">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">Cash Euro</h3>
                                    </div>
                                </article>

                            </section>

                            <section className="padding0-20">
                                <div>
                                    <h4 className="my-title">Other options</h4>
                                </div>
                                <div className="square30"></div>
                                <article className="width100">
                                    <div className="flex margin-bottom15">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">Visa</h3>
                                    </div>
                                    <div className="flex margin-bottom15">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">Mastercard</h3>
                                    </div>

                                    <div className="flex">
                                        <div className="checkWrap flex flex-middle flex-center margin0 relative" style={{bottom: 2 + 'px', 'flex-shrink': 0}}>
                                            <input type="checkbox" name="yesNo" id="privacityCheck" className=" pointer" />
                                            <label className="check-icon back-fuchia"></label>
                                        </div>
                                        <h3 className="color-gray margin-left10">American Express</h3>
                                    </div>
                                </article>

                            </section>
                        </article>
                             
                    </section>

                </article>

                <article className="margin0-20 flex flex-center" style={{paddingLeft: 40 + 'px', paddingRight: 40 + 'px'}}>
                <div className="width100 margin-right20 padding10-20">
                    
                </div>
            </article>
        </section>
        )
    }
}


export default Payments