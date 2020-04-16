import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Item from "./Item";
import {Button, CardGroup, Card } from "semantic-ui-react"


const Items = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    axios.get("/api/items")
      .then(res => {
        setItems(res.data)
      })
  }, []);

  // const addItem = (item) => setItems([item, ...items])

  const renderItems = () => {
    return items.map(item => (
      <Item key={item.id} {...item} deleteItem={deleteItem} editItem={editItem} />
    ))
  };

  const deleteItem = (id) => {
    axios.delete(`/api/items/${id}`)
      .then(res => {
        setItems(items.filter(item => item.id !== id))
      })
  }

  const editItem = (id, item) => {
    axios.put(`/api/items/${id}`, item)
      .then( res => {
        const updateItem = items.map( item => {
          if (item.id === id)
            return res.data
           return item; 
        })
          setItems(updateItem)
      })
  }

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