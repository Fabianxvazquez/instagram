import React from 'react';
import {Header, Container} from "semantic-ui-react"
import { Route, Switch} from "react-router-dom";
import Items from "./components/Items";
import Navbar from "./components/Navbar"
import Home from "./components/Home"

const App = () => (
  <>
  <Navbar/>
  <Container>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/items" component={Items} />
    </Switch>
    
  </Container>
  </>
)



export default App;
