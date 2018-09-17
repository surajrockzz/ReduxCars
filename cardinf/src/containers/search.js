import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getCars} from '../actions'
import {bindActionCreators} from 'redux'

class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            keyword:''
        }
    }
searchBar=(event)=>{
    event.preventDefault();
    this.props.getCars(this.state.keyword); 
} 

    handleChange= (event)=>{
            this.setState({
                keyword:event.target.value
            })
    }
    componentDidMount(){
        console.log(this.state.keyword)
    }
    render(){
        return (
            <div className="main_search">
                <form onSubmit={this.searchBar}>
                    <input type="text" onChange={this.handleChange} value={this.state.keyword}/>
                    </form>
            </div>
        )
    }
} 

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars},dispatch)
}
export default connect(null ,mapDispatchToProps)(Search);