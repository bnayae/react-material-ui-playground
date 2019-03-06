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
import RadioSelection from "./components/RadioSelection";
import Cards from "./components/Cards";
import OutlinedChips from "./components/OutlinedChips";

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
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       color: "white",
  //       "&:hover": {
  //         backgroundColor: "purple"
  //       }
  //     }
  //   }
  // }
});

// const theme = createMuiTheme({
//   {
//     palette: {
//       primary: {
//         c100: blue[100],
//         c200: blue[200],
//         light: blue[300],
//         main: blue[500],
//         dark: blue[700]
//       },
//       secondary: {
//         light: deepOrange[300],
//         main: deepOrange[500],
//         dark: deepOrange[700]
//       }
//     },
//     typography: {
//       fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//       fontSize: 14,
//       fontWeightLight: 300,
//       fontWeightRegular: 400,
//       fontWeightMedium: 500
//     },
//     anchor: {
//       main: blue[500],
//       selected: blue[700]
//     },
//   });
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
        <RadioSelection />
        <hr />
        <TabShow />
        <hr />
        <IntegrationReactSelect />
        <hr />
        <Cards />
        <hr />
        <ImageAvatars />
        <hr />
        <Playground />
        <hr />
        <OutlinedChips />
      </MuiThemeProvider>
    );
  }
}

export default App;
