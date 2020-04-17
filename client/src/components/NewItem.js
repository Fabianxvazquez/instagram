import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class NewItem extends React.Component {
  state = {
    name: '',
    image: '',
    description: '',
    likes: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/items`, this.state)
      .then((res) => {
        this.setState({ state: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    const { name, image, description, likes } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              label="Name"
              name="name"
              placeholder="name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Image Url"
              placeholder="Image"
              type="input"
              name="image"
              value={image}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              placeholder="Description"
              type="input"
              name="description"
              value={description}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Likes"
              placeholder="Likes"
              type="input"
              name="likes"
              value={likes}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button color='blue'>Submit</Button>
        </Form>
      </>
    );
  }
}

export default NewItem;
