import Axios from "axios";
import React, { Component } from "react";
import "./App.css";
import AddItem from "./Components/addItem";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };

    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }  

  handleAddItem() {
    console.log("calling handleAddItem");
    console.log(this.state.input);
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  // removeItem = (index) => {
  //   .delete(`/api/item/${index}`)
  //   .then((res) => {
  //     this.setState({item: res.data});
  //   })
  //   .catch((err) => console.log(err));
  // }


  render() {
    let list = this.state.list.map((element, index) => {
      return <AddItem key={index} task={element} />
    });

    return (
      <div className="App">
        <header className="header">
          <h1>Kitchen Inventory</h1>
        </header>
        <div>
          <input className="input-bar" placeholder="Add New Item" value={this.state.input} onChange={e => this.handleInputChange(e.target.value)}/>

          <button className="button" onClick={this.handleAddItem} >Add</button>
        </div>

        <br />
        {list}
        <div className="items-needed">
          <form>
            Items Needed From Store
          </form>
        </div>
      </div>
    );
  }
}

export default App;
