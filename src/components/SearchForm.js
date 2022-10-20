import React from "react";
import { InputGroup } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import '../CSS/Main.css';

class SearchForm extends React.Component {
  render() {
    return (
      <>
        <InputGroup>
          <Form.Group 
           className="horn-select" 
           controlId="searchForm"
          >
            <InputGroup.Text>Number of Horns</InputGroup.Text>
            <Form.Select onChange={this.props.handleSelect}>
              <option value=''>Select</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3+</option>
            </Form.Select>
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
