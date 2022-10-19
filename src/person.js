import React from 'react';
import './Person.css';
import Button from 'react-bootstrap/Button'

class Person extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      waves: 0,
      helpMe: false,
    };
  };

  needsHelp = () => {
    this.setState({
      helpMe: true,
    });
  }

  gotHelp = () => {
    this.setState({
      helpMe: false,
    })
  }

  handleWaves = () => {
    this.setState({
      waves: this.state.waves + 1,
    });
  }

  render(){
    console.log('app state', this.state);
    return(
      <article>
        <h3>{this.props.name}</h3>
        <p>💙 {this.state.waves} Greetings</p>
        <p onClick={this.handleWaves}>Say Hello!</p>
        <img src={this.props.imageURL} alt={this.props.name} />
        <Button onClick={this.needsHelp}variant="danger">Help!</Button>
        <Button onClick={this.gotHelp} variant="success">I got Help</Button>
        <div>{this.state.helpMe ? 'I need help' : ''}</div>
      </article>
    )
  }
}

export default Person;

//----------------------------------------------------

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waves: 0,
      helpMe: false,
    };
  }

  needsHelp = () => {
    this.setState({
      helpMe: true,
    });
  };

  gotHelp = () => {
    this.setState({
      gotHelp: true,
    });
  };

  handleWaves = () => {
    this.setState({
      waves: this.state.waves + 1,
    });
  };

  render() {
    console.log("app state", this.state);
    return (
      /*
    <article>
        <h3>{this.props.id}</h3>
        <h2>{this.props.title}</h2>
          <img src={this.props.image_url} alt={beast.description} title={this.props.title} />
          <h2>{this.props.description}</h2>
      </article>
      */
      <article>
        <Card key={this.props.id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            alt={this.props.description}
            title={this.props.title}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </article>
    );
  }
}

 export default HornedBeast;





 main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
