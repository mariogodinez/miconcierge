import React, { Component } from 'react'



class ErrorTag extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg: ''
        }
    }

    componentWillMount(){
        this.setState({msg: this.props.msg})
    }

    render(){

        return (
            <span>
                <span className="color-fuchia font15">{this.state.msg}</span>
            </span>
        )
    }

}

export default ErrorTag