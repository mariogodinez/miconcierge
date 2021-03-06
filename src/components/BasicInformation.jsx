
import React, { Component } from 'react'

class BasicInformation extends Component {

    render (){
        return (
            <section>
                
                    <br/>
                <article className="margin20 padding20-30 flex flex-center">
                    <div className="width100 margin-right20 padding0-20">
                        <h4 className="my-title">Company Name</h4>
                        <div>
                            <input type="text" className="my-input" value="Restaurant la Recova"/>
                        </div>
                    </div>

                    <div className="width100 padding0-20">
                        <h4 className="my-title">Business Description</h4>
                        <div>
                            <input type="text" className="my-input" value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam tenetur est itaque velit fu"/>
                        </div>
                    </div>
                </article>

                <article className="margin0-20 padding20-30 flex flex-center">
                    <div className="width100 margin-right20 padding0-20">
                        <h4 className="my-title">City Name</h4>
                        <div>
                            <input type="text" className="my-input" value="Restaurant la Recova"/>
                        </div>
                    </div>

                    <div className="width100 padding0-20">
                        <h4 className="my-title">Address</h4>
                        <div>
                            <input type="text" className="my-input" value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam tenetur est itaque velit fu"/>
                        </div>
                    </div>
                </article>

                <article className="margin0-20 padding20-30 flex flex-center" style={{paddingBottom: 5 + 'px'}}>
                    <div className="width100 margin-right20 padding0-20">
                        <h4 className="my-title">Postal Code</h4>
                        <div>
                            <input type="text" className="my-input" value="Restaurant la Recova"/>
                        </div>
                    </div>

                    <div className="width100 padding0-20">
                        <h4 className="my-title">Coordinate Address</h4>
                        <div>
                            <input type="text" className="my-input" value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam tenetur est itaque velit fu"/>
                        </div>
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
        </section>
        )
    }
}


export default BasicInformation