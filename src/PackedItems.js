import React, { Component } from 'react'

const PackedItems = (props) =>{
    
    return(
      // this is the container holding the packed items
        <section className="packed-items_container">
            <h2 className='packed-item_h2'>Packed Items</h2>
                {/* this is where the items from ItemList are going to go */}
                {props.items.length > 0 ? props.items.map((item)=>{

                    return(
                        <div className="items-content">
                        
                        <ul>
                            <li className="packedItem-li">{item.item}</li>
                        </ul>

                        </div>
                    )

            }) : <p className="list-p"> Packed Items Go Here !</p>
            }

            <button className="list-button" onClick={() => props.clear()}>
                clear
            </button>

        </section>
    );
}

export default PackedItems;