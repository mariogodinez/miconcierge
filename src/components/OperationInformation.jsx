
import React, { Component } from 'react'

class OperationInformation extends Component {

    render (){
        return (
            <section className="relative">
              
                
                <article className="margin20 padding20-30 flex flex-center">
                    <div className="width100 margin-right20 padding0-20">
                        <h4>Operatign cities</h4>
                        <div>
                            <input type="text" className="my-input" value="+52 559345533"/>
                        </div>
                    </div>
                    <div className="width100 padding0-20">
                        <h4>Operating months</h4>
                        <div>
                            <input type="text" className="my-input" value="info@restaurant.com"/>
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