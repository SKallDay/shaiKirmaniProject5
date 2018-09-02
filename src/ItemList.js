import React, { Component } from 'react';

const ItemList = (props) =>{
    // console.log(props.listOfItems[0]);

    return(
        <section className="item-list">
            <h2 className="item-list__h2">Items to Pack</h2>
            
                
                
                {/* UL to put items in here */}
                {props.listOfItems.length > 0 ? props.listOfItems.map((item)=>{
                    //console.log(itemList);
                    
                    return (
                    // this the containter that will hold input items
                    <div className="itemList-container">
                        
                        <div className="items-content">
                            <label className="checkbox-label" htmlFor="checkbox">{item.item}</label>
                             <input type="checkbox" id="checkbox"
                                checked={this.checked} onChange={()=>{props.movestuff(item)}
                                } key={item}/>
                        </div>        
                               
                    </div>
                )
                })
                 : <p className="list-p"> No Items on List !</p>
            }
           

            <button className="list-button" onClick={()=>props.clear()}>
                clear
            </button>
            {/* this button will allow us to move item from ItemList to Packeditems
            <button onClick={(item)=>props.addToPackedItems(item)}>
               Add to Packed Items
            </button> */}
        </section>
    );
}

export default ItemList;