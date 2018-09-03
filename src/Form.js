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
            <div className="form-container">
                <div className="form-info">
                    <h2>Add your Items here</h2>
                    <p className="form-p">
                        When you have packed your items.
                        Clicked the itemslist and move them to packed Items to remind you what you've already got in your suitcase !
                    </p>

                    <p className="form-p">Time for another adventure ? Clear button resets lists, you can start you new items like for your new trip!</p>

                    <i class="fas fa-arrow-circle-down"></i>
                </div>
                <form onSubmit={this.handleSumbit}>
                    
                    {/* label will display none */}
                    <label className="label-checkbox"  htmlFor="item">Item</label>

                    {/* input for user to add items tp ItemList */}
                    <input type="text" id="item" placeholder="Item" onChange={this.handleChange} value={this.state.item}/>

                    {/* submit to firebase db */}
                    <input type="submit" id="submit" value='add to list'/>
                </form>
            </div>
        );
    }

}

export default Form;