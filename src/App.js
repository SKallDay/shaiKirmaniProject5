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
  this.setState({
    itemList: [],
    message: 'Write Items here!'
    
  })
}

clearAllPacked = () => {
  const packItemRef = firebase.database().ref(`packed`)
  packItemRef.remove();

    this.setState({
      packedItems: [],
      message: 'No items have been packed'
    })
  }


  render() {
    return (
      <div className="App">
      {/* HEADER STARTS HERE */}
        <header className="App-header">
          <div className="wrapper">
            <div className="header-container">
                <div className="head-content">
                  <h1>Ready2Pack</h1>
                  <p className="header-p"> A great application that can help you pack for your next Adventure</p>
                </div>
                <i class="fas fa-suitcase"></i>
            </div>
            </div>
        </header>

        {/*MAIN SECTION STARTS HERE */}
        <section className="main-container">
            <div className="wrapper">
              <Form addItem={this.addItemToDatabase} />

             <ItemList listOfItems={this.state.itemList} movestuff={this.moveToPackedItems} removeKey={this.removeKey} clear={this.clearAll} />

              <PackedItems items={this.state.packedItems} clear={this.clearAllPacked} />
          </div>
        </section>
        <footer>
          <p>made S.Kirmani</p>
        </footer>
      </div>
    );
  }
}

export default App;
