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

//class component
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedBeast: ''
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
      <Main 
        addHearts={this.addHearts}
        handleOpenModal={this.handleOpenModal}
        data={data}
      />
        <Modal 
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          backdrop="static"
          keyboard="false"
          
        >
          <Modal.Header >
          <Modal.Title className="modal-title w-100">{this.state.selectedBeast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body >
            <Container>
              <img src={this.state.selectedBeast.image_url} alt={this.state.selectedBeast.description} style={{ width: "100%"}}/>
              {this.state.selectedBeast.description}
            </Container>
          </Modal.Body>

          <Modal.Footer className="modal-footer content-center mx-auto d-block text-center">
          <Button variant="secondary" onClick={this.handleCloseModal}>Close</Button>
         
          </Modal.Footer>
        </Modal>

      <Footer />
      </>
    )
  }
}

//export
export default App;
