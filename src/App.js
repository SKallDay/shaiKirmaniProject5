import React, { Component } from 'react';
import './App.css';
import firebase from './firebase'

//COMPONENTS
import Form from './Form'
import ItemList from './ItemList';
import PackedItems from './PackedItems';
const dbRef = firebase.database().ref();
class App extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      packedItems: []
    }
  }
  componentDidMount() {
    console.log('did this work?');
    dbRef.on('value', (snapshot) => {

    this.sortItems(snapshot.val());
    });
  }

  sortItems = (itemsObject) =>{
    // this maps throught our item objects turns items into an 
    // array
    console.log(itemsObject);
    const itemArray = Object.entries(itemsObject).map((item)=>{
      console.log(item);
      // this is returning the key of item and the item to us
      return({
        key:item[0],
        item:item[1].item
      })
    }) 
    // this is setting the set to itemArray
  this.setState({
    itemList:itemArray
  });
                
  } 
  // this is pushing to database 
  addItemToDatabase = (item) =>{
    dbRef.push({
      item: item
    })
  }
  addToPackedItems = (item) =>{
    console.log('working');
    
    const packedItems = Array.from(this.state.packedItems)

    packedItems.push(item);

    this.setState({item})
    
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ready2Pack</h1>
        </header>
          <Form addItem={this.addItemToDatabase} />

          <ItemList listOfItems={this.state.itemList}/>

          <PackedItems items={this.state.packedItems} />
       
      </div>
    );
  }
}

export default App;
