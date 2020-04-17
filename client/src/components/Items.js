import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Item from "./Item";
import {CardGroup, Button,} from "semantic-ui-react"
import NewItem from './NewItem';



const Items = () => {
  const [items, setItems] = useState([]);
  const [showItemForm, setShowItemForm] = useState(false)

  useEffect(() => {
    axios.get("/api/items")
      .then(res => {
        setItems(res.data)
      })
  }, [items]);


  const renderItems = () => {
    return items.map(item => (
      <Item key={item.id} {...item}  />
    ))
  };

  const addItem = (item) => {
    setItems([...items, item])
  };

  

  return (
    <div>
      <h1 align="center">Instagerms</h1>
      <hr />
      <Button onClick={ () => setShowItemForm(!showItemForm)} color="blue">
        {showItemForm ? "Cancel" : "New Post"}
      </Button>
      {showItemForm && <NewItem addItem={addItem} toggleForm={setShowItemForm} /> }
      <br />
      <br />
    
    <CardGroup itemsPerRow={4}>
      {renderItems()}
    </CardGroup>
    
    </div>
  );
};

export default Items;