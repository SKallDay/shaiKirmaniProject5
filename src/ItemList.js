import React, { Component } from 'react';

const ItemList = (props) =>{

    return(
        <section className="item-list">
            <h2 className="item-list__h2">Items to Pack</h2>
            <ul>
                {/* UL to put items in here */}
                {props.listOfItems.map((item)=>{
                    //console.log(itemList);
                    
                    return (
                    <li>{item}</li>
                )
                })}
            </ul>

            {/* this button will allow us to move item from ItemList to Packeditems */}
            <button onClick={(item)=>props.addToPackedItems(item)}>
               Add to Packed Items
            </button>
        </section>
    );
}

export default ItemList;