import React from 'react';
import {Header, Container} from "semantic-ui-react"
import { Route, Switch} from "react-router-dom";
import Items from "./components/Items";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import NewItem from "./components/NewItem"

const App = () => (
  <>
  <Navbar/>
  <Container>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/items" component={Items} />
    <Route exact path="/new_item" component={NewItem}/>
    </Switch>
    
  </Container>
  </>
)



export default App;
