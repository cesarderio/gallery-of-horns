//imports
import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../CSS/App.css'
import Modal from 'react-bootstrap/Modal';
import data from '../data.json';
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
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

  if (selected === 'Select') {
    let newData = data.filter(this.includes())
    this.setState({sortedData: newData});
  } else{
    let newData = data.filter(beast => beast.horns === parseInt(selected));
    this.setState({sortedData: newData});
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
    return (
      <>
      <Header 
        heart={this.state.heart}
      />
      <SearchForm
        handleSubmit={this.state.handleSubmit} handleSelect={this.state.handleSelect}
        />
      <Main 
        addHearts={this.addHearts}
        handleOpenModal={this.handleOpenModal}
        data={data}
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
