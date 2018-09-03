import React, { Component } from 'react';

const ItemList = (props) =>{

    return(
        <section className="item-list">
            <h2 className="item-list__h2">Items to Pack</h2>
            
                
                
                {/* UL to put items in here */}
                {props.listOfItems.length > 0 ? props.listOfItems.map((item)=>{
                    
                    return (
                    // this the containter that will hold input items
                    <div className="itemList-container">
                        
                        <div className="items-content">
                                <ul>
                                    <li className="itemList-li" onClick={() => { props.movestuff(item) }} key={item}>
                                        {item.item}
                                    </li>
                                </ul>
                        </div>        
                               
                    </div>
                )
                })
                 : <p className="list-p"> No Items on List !</p>
            }
           

            <button className="list-button" onClick={()=>props.clear()}>
                clear
            </button>
    
        </section>
    );
}

export default ItemList;