import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/items">
      <Menu.Item>
        All Items
      </Menu.Item>
    </Link>
    <Link to="/new_item">
      <Menu.Item>
        Add New Item
      </Menu.Item>
    </Link>
  </Menu>
);

export default Navbar;