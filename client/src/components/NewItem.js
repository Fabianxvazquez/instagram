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
  // const [name, setName] = useState('')
  // const [image, setImage] = useState('')
  // const [description, setDescription] = useState('')
  // const [likes, setLikes] = useState('')

  // const item = {item: item, image: image, description: description, likes: likes}

  handleSubmit = e => {
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
          <Form.Group>
            {/* <Form.Label>Name </Form.Label> */}
            <Form.Input
              placeholder="Name"
              type="input"
              name="name"
              required
              value={name}
              onChange={this.handleChange}
              required
            />
            {/* <Form.Label>Image </Form.Label> */}
            <Form.Input
              placeholder="Image"
              type="input"
              name="image"
              required
              value={image}
              onChange={this.handleChange}
              required
            />
            {/* <Form.Label>Description: </Form.Label> */}
            <Form.Input
              placeholder="Description"
              type="input"
              name="description"
              required
              value={description}
              onChange={this.handleChange}
              required
            />
            {/* <Form.Label>Likes </Form.Label> */}
            <Form.Input
              placeholder="Likes"
              type="input"
              name="likes"
              required
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
