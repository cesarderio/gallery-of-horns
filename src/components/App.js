//imports
import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../CSS/App.css'

import data from '../data.json';

import SelectedBeast from "./SelectedBeast.js";

import SearchForm from "./SearchForm.js";

//class component
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedBeast: '',
      selectedVal: '',
      sortedData: data
    }
  }

handleSubmit = (event) => {
  event.preventDefault();

  let selected = event.target.selected.value;

  this.setState({
    selectedVal: selected
  });
}

handleSelect = (event) => {
  let selected = event.target.value;

  if (selected) {
    let newData = data.filter(beast => beast.horns === parseInt(selected));
    this.setState({sortedData: newData});
  } else{
    this.setState({sortedData: data});
  }
}

addHearts = () => {
  this.setState({
    heart: this.state.heart + '💙'
  })
}

handleCloseModal = () => {
  this.setState({
    showModal: false
  })
}

handleOpenModal = (beast) => {
  this.setState({
    showModal: true,
    selectedBeast: beast,
  })
}

  render(){
    console.log("app state", this.state);
    return (
      <>
      <Header 
        heart={this.state.heart}
      />
      <SearchForm
       handleSelect={this.handleSelect}
        />
      <Main 
        addHearts={this.addHearts}
        handleOpenModal={this.handleOpenModal}
        data={this.state.sortedData}
      />
      <SelectedBeast 
       show={this.state.showModal}
       onHide={this.handleCloseModal}
       title = {this.state.selectedBeast.title}
       src={this.state.selectedBeast.image_url}
       alt={this.state.selectedBeast.description}
      />
      <Footer />
      </>
    )
  }
}

//export
export default App;
