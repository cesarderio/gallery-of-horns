import React from "react";
import './HornedBeast.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }
  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };
  render() {
    console.log("app state", this.state);
    return (
      /*
      <article>
        <h3>{this.props.id}</h3>
        <h2>{this.props.title}</h2>
          <img src={this.props.image_url} alt={this.props.description} title={this.props.title} />
          <h2>{this.props.description}</h2>
      </article>
        */
      <article>
        <Card key={this.props.id} style={{ width: "18rem", height: "32rem" }} bg={'success'} text={'light'} >
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            
          />
          <Card.Body>
            <Card.Title>{this.props.title}<hr></hr>{this.state.likes}💙</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button onClick={this.handleLikes} variant="primary">
              Like
            </Button>
          </Card.Body>
        </Card>
      </article>
    );
  }
}
export default HornedBeast;
