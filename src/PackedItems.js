import React, { Component } from 'react'

const PackedItems = (props) =>{
    return(
      // this is the container holding the packed items
        <section className="packed-items_container">
            <h2 className='packed-item_h2'>Packed Items</h2>
            <ul>
                {/* this is where the items from ItemList are going to go */}
                {/* {props.packedItems.map((item)=>{
                    return <li>{item[1].item}</li>
                })} */}

            </ul>
        </section>
    );
}

export default PackedItems;