import React from "react";
import "../CSS/HornedBeast.css";
import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";

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

  handleNameClick = () => {
    this.props.handleOpenModal(this.props.beast);
  };

  render() {
    return (
      <Col className="m-4">
        <Card key={this.props.id} bg={"success"} text={"light"}>
          <Card.Img
            onClick={this.handleNameClick}
            variant="top"
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            style={{ width: "100%", height: "20rem" }}
          />
          <Card.Body>
            <Card.Title>
              {this.props.title}
              <hr></hr>
              {this.state.likes}💙
            </Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button onClick={this.handleLikes} variant="primary">
              Like
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default HornedBeast;

/*
<article>
  <h3>{this.props.id}</h3>
  <h2>{this.props.title}</h2>
    <img src={this.props.image_url} alt={this.props.description} title={this.props.title} />
    <h2>{this.props.description}</h2>
</article>
  */
