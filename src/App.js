import React, { Component } from "react";
//import { render } from "react-dom";

import "./App.css";
import TopBar from "./components/TopBar";
import Playground from "./components/Playground";
import OutlinedButtons from "./components/buttons/OutlinedButtons";
import FloatingActionButtons from "./components/buttons/FloatingActionButtons";
import ButtonSizes from "./components/buttons/ButtonSizes";
import TabShow from "./components/TabShow";
import IntegrationReactSelect from "./components/IntegrationReactSelect";
import ImageAvatars from "./components/ImageAvatars";
import SimpleBadge from "./components/SimpleBadge";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import amber from "@material-ui/core/colors/amber";
import pink from "@material-ui/core/colors/pink";
import teal from "@material-ui/core/colors/teal";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12
    // Tell Material-UI what's the font-size on the html element is.
    //htmlFontSize: 20
  },
  palette: {
    primary: teal,
    secondary: purple
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TopBar />
        <hr />
        <SimpleBadge />
        <hr />
        <OutlinedButtons />
        <hr />
        <FloatingActionButtons />
        <hr />
        <ButtonSizes />
        <hr />
        <TabShow />
        <hr />
        <IntegrationReactSelect />
        <hr />
        <ImageAvatars />
        <hr />
        <Playground />
      </MuiThemeProvider>
    );
  }
}

export default App;
