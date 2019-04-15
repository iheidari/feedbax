import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const CustomizedList = ({ items, ...props }) => {
  const itemsComponents = items.map(item => (
    <ListItem button key={item.key}>
      <ListItemText primary={item.text} />
    </ListItem>
  ));
  return <List>{itemsComponents}</List>;
};

CustomizedList.propTypes = {
  items: PropTypes.array
};

export default CustomizedList;
