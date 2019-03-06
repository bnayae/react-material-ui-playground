import React, { Component } from "react";
//import { render } from "react-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import "./App.css";
import TopBar from "./components/TopBar";
import Playground from "./components/Playground";

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TopBar />
        <Playground />
      </MuiThemeProvider>
    );
  }
}

export default App;
