// import Axios from "axios";
import React, { Component } from "react";
import "./App.css";
import AddItem from "./Components/addItem";
import AddStoreItem from "./Components/addStoreItem";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      storeList: [],
      inventoryInput: "",
      storeInput: ""
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleAddStoreItem = this.handleAddStoreItem.bind(this);
  }

  handleInputChange(value) {
    this.setState({ inventoryInput: value });
  }  

  handleAddItem() {
    this.setState({
      list: [...this.state.list, this.state.inventoryInput],
      inventoryInput: ""
    });
  }

  handleStoreInputChange(value) {
    this.setState({ storeInput: value });
  }  

  handleAddStoreItem() {
    console.log("asdfasdfasdf");
    console.log(this.state.storeInput);
    this.setState({
      storeList: [...this.state.storeList, this.state.storeInput],
      storeInput: ""
    });
  }



  render() {
    let list = this.state.list.map((element, index) => {
      return <AddItem key={index} task={element} />
    });
    let storeList = this.state.storeList.map((element, index) => {
      return <AddStoreItem key={index} task={element} />
    });

    return (
      <div className="App">
        <h1 className="header">Kitchen Inventory</h1>

        <input className="input-bar" placeholder="Add New Item" value={this.state.inventoryInput} onChange={e => this.handleInputChange(e.target.value)}/>

        <button className="button" onClick={this.handleAddItem}>
          Add
        </button>
        <div className="kitchen-output">{list}</div>
        
        <div className="items-needed">
          Items Needed From Store
        </div>
        <input className="input-bar" placeholder="Add New Item" value={this.state.storeInput} onChange={e => this.handleStoreInputChange(e.target.value)}/>
        <button className="second-button" onClick={this.handleAddStoreItem}>
          Add
        </button>
        <div className="store-output">{storeList}</div>
      </div>
    );
  }
}

export default App;
