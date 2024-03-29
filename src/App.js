import React from 'react';
import { Provider } from 'react-redux';
import { Container, Item } from "./components/grid.component"
import { Typography, makeStyles } from "@material-ui/core"
import ProblemSolver from "./components/problem-solver.component";
import ExpansionMaker from "./components/expansion-panel-maker.component";
import EmulatedConsole from "./components/emulated-console.component";
import store from "./store";

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: "center",
    marginBottom: "5vh"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Container>
        <Item md={12} ><Typography className={classes.header} variant="h2" gutterBottom >Web tasarım ödevi</Typography></Item>
        <Container justify="center">
          <Item md={8} >
            <ExpansionMaker panels={[<ProblemSolver platform="Euler" />]} />
          </Item>
        </Container>

        <Container justify="center">
          <Item md={8} >
            <ExpansionMaker panels={[<ProblemSolver platform="Leetcode" />]} />
          </Item>
        </Container>

        <Container justify="center">
          <Item md={8}><EmulatedConsole cevap="Önce çalıştırın" /></Item>
        </Container>

      </Container >
    </Provider>
  );
}


export default App;



