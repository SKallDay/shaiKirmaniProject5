import React, { Component } from 'react';
import firebase from './firebase'

//COMPONENTS
import Form from './Form'
import ItemList from './ItemList';
import PackedItems from './PackedItems';
const dbRef = firebase.database().ref()
const dbRef2pack =firebase.database().ref('2pack')
const dbRefpacked = firebase.database().ref('packed')

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      packedItems: []
    }
  }
  componentDidMount() {
    //console.log('did this work?');
    dbRef2pack.on('value', (snapshot) => {

    this.sortItems(snapshot.val());
    });
    dbRefpacked.on('value', (snapshot) => {

      this.sortPackedItems(snapshot.val());
    });
  }

  sortItems = (itemsObject) =>{
    // this maps throught our item objects turns items into an 
    // array
    if(itemsObject){
    console.log(itemsObject);
    const itemArray = Object.entries(itemsObject).map((item)=>{
      //console.log(item);
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
  }
  sortPackedItems = (itemsObject) => {
    // this maps throught our item objects turns items into an 
    // array
    if(itemsObject){
    console.log(itemsObject);
    const itemArray = Object.entries(itemsObject).map((item) => {
      //console.log(item);
      // this is returning the key of item and the item to us
      return ({
        key: item[0],
        item: item[1].item
      })
    })
    // this is setting the set to itemArray
    this.setState({
      packedItems: itemArray
    });

    } 
  }
  // this is pushing to database 
  addItemToDatabase = (item) =>{
    dbRef2pack.push({
      item: item
    })
  }
  //remove the key
  removeKey = (key) =>{
    console.log('key');
    
    let itemkey = firebase.database().ref('2pack{key}')
  }

  // this is adding item differnt array packed items
 moveToPackedItems = (item) =>{
   console.log(item.key);
  let itemKey = item.key
   const packedItems = []


    const newDbRef = firebase.database().ref(`packed`)
   newDbRef.push({
      item: item.item
   })
  const itemRef = firebase.database().ref(`2pack/${item.key}`)
  itemRef.remove();
 }

clearAll = () => {
  const clearingAll = firebase.database().ref(`2pack`)

    clearingAll.set({pack:{}})
    this.sortItems(clearingAll);
}

  clearAllPacked = () => {
    const clearingAll = firebase.database().ref(`packed`)

    clearingAll.set({ pack: {} })
    this.sortPackedItems(clearingAll);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ready2Pack</h1>
          <h3> The App to help you pack</h3>
        </header>
        <section className="wrapper">
              <Form addItem={this.addItemToDatabase} />

            <ItemList listOfItems={this.state.itemList} movestuff={this.moveToPackedItems} removeKey={this.removeKey} clear={this.clearAll} />

            <PackedItems items={this.state.packedItems} clear={this.clearAllPacked} />
        </section>
      </div>
    );
  }
}

export default App;
