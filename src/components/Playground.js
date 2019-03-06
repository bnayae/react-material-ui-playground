import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Topography from "@material-ui/core/Typography";

export class Playground extends Component {
  render() {
    return (
      <>
        <Topography variant="title" color="inherit">
          <h1>Hello Title</h1>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Topography>
      </>
    );
  }
}

export default Playground;
