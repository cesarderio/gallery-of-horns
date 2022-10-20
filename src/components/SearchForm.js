import React from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class SearchForm extends React.Component {
  render() {
    return (
      <>
        <InputGroup>
          <Form.Group 
           onSubmit={this.props.handleSubmit}
           className="horn-select" 
           controlId="searchForm"
          >
            <InputGroup.Text>Number of Horns</InputGroup.Text>
            <Form.Select onChange={this.props.handleSelect}>
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </Form.Select>
            <Button  type="submit" variant="primary">
              Search
            </Button>
          </Form.Group>
        </InputGroup>
      </>
    );
  }
}

export default SearchForm;


/*
<Button variant="primary" type="submit">
  Submit
</Button>
*/
