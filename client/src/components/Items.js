import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Item from "./Item";
import {CardGroup, } from "semantic-ui-react"


const Items = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    axios.get("/api/items")
      .then(res => {
        setItems(res.data)
      })
  }, []);


  const renderItems = () => {
    return items.map(item => (
      <Item key={item.id} {...item}  />
    ))
  };

  

  return (
    <div>
      <h1 align="center">Instagerms</h1>
      <hr />
      <br />
      <br />
    
    <CardGroup itemsPerRow={4}>
      {renderItems()}
    </CardGroup>
    </div>
  );
};

export default Items;