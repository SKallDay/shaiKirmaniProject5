import React, { Component } from 'react';
import swal from 'sweetalert';



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
        //  this.setState({
        //     item:''
        // })
        if(!this.state.item){
            return swal("Hey!", "I think you forgot to an an Item", "error");
        } else{
           this.setState({
               item:''
           })
        }
        this.props.addItem(this.state.item);

    }

    render(){
        return(
            <div className="form-container">
                <div className="form-info">
                    <h2 className='form-h2'>Add your Items here</h2>
                    <p className="form-p">
                        When you have packed your items.
                        Click them from the itemslist and move them to packed Items to remind you what you've already got in your suitcase !
                    </p>

                    <p className="form-p">Time for another adventure ? Press the Clear button to resets lists, you can start adding some items for your new trip!</p>

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