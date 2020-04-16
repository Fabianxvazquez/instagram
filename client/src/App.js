import React from 'react';
import {Header, Container} from "semantic-ui-react"
import { Route, } from "react-router-dom";
import Items from "./components/Items";

const App = () => (
  <>
  <Container>
    <Route exact path="/" component={Items} />
  </Container>
  </>
)



export default App;
