import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const ColorList = (props) => {
  return (
    <ListGroup>
      {props.list.map((listItem, index) => {
        return (
          <ListGroupItem key={index} style={{ backgroundColor: listItem }}>
            {/* {listItem}
            <Button color="danger" onClick={() => props.handleDelete(index)}>
              Delete!
            </Button> */}
            {/* style={{ backgroundColor: listItem }} */}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default ColorList;
