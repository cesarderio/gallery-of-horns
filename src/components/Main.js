import React from "react";
import HornedBeast from "./HornedBeast.js";
import '../CSS/Main.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Main extends React.Component{
  render(){
    let beasts = this.props.data.map((beast)=>{
      return <HornedBeast
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        key={beast.id}
        addHearts={this.props.addHearts}
        handleOpenModal={this.props.handleOpenModal}
        beast={beast}
        />
    });

    return(
      <>
     
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={5}>
            {beasts}
          </Row>
        </Container>

      </>
    )
  }
}
export default Main;
