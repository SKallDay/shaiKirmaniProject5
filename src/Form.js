import React, { Component } from 'react';

class Form extends Component{
    constructor(){
        super();
        this.handleChange.bind(this)
        this.state = {
            Item: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleSumbit = (e) =>{
        e.preventDefault();
        console.log(this.props);
        
        this.props.addItem(this.state.item);

        this.setState({
            item:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSumbit}>
                {/* label will display none */}
                <label htmlFor="item">Item</label>

                {/* input for user to add items tp ItemList */}
                <input type="text" id="item" placeholder="Items" onChange={this.handleChange} value={this.state.item}/>

                {/* submit to firebase db */}
                <input type="submit" value='addItem'/>
            </form>
        );
    }

}

export default Form;