
import React, { Component } from 'react'

class Completed extends Component {

    render (){
        return (
            <section>
              
                
                <article className="margin20 padding20-30 flex flex-center">
                    <div className="width100 margin-right20 padding0-20">
                        <h4>GReat you have completed</h4>
                    </div>
                   
                </article>


                <article className="margin0-20 flex flex-center" style={{paddingLeft: 40 + 'px', paddingRight: 40 + 'px'}}>
                <div className="width100 margin-right20 padding10-20">
                    
                </div>
                <div className="flex flex-middle margin-right20">
                    <button className="my-btn back-fuchia color-white" style={{width:180  + 'px !important', paddingRight: 30 + 'px', paddingLeft: 30 + 'px', paddingTop: 15 + 'px',paddingBottom: 15 + 'px'}}>Done</button>
                </div>
            </article>
        </section>
        )
    }
}


export default Completed