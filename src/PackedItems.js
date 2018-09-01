import React, { Component } from 'react'

const PackedItems = (props) =>{
    
    return(
      // this is the container holding the packed items
        <section className="packed-items_container">
            <h2 className='packed-item_h2'>Packed Items</h2>
                {/* this is where the items from ItemList are going to go */}
                {props.items.map((item)=>{

                    return(
                        <ul>
                            <li>{item.item}</li>
                        </ul>
                    )

                })}


        </section>
    );
}

export default PackedItems;