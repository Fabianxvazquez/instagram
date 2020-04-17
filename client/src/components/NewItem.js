import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialState = {
  name: '',
  image: '',
  description: '',
  likes: '',
};

const NewItem = () => {
  const history = useHistory();
  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/items`, state)
      .then((res) => {
        setState({ state: res.data });
        history.push('/items');
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Name"
            name="name"
            placeholder="name"
            type="text"
            value={state.name}
            onChange={handleChange}
            required
          />
          <Form.Input
            label="Image Url"
            placeholder="Image"
            type="text"
            name="image"
            value={state.image}
            onChange={handleChange}
            required
          />
          <Form.Input
            label="Description"
            placeholder="Description"
            type="text"
            name="description"
            value={state.description}
            onChange={handleChange}
            required
          />
          <Form.Input
            label="Likes"
            placeholder="Likes"
            type="number"
            name="likes"
            value={state.likes}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" color="blue">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewItem;
