import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {carDetail} from '../actions'

class Car extends Component{

    componentWillMount(){
        this.props.carDetail(this.props.match.params.id)
    }

    render(){
        return(
        <div> {this.props.match.params.id} </div>)
    }
}


function mapStateToProps(state){ 
    console.log(state)   
    return{ 
        carDetail:state.carDetail
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({carDetail},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Car);