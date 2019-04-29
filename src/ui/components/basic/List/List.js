import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const CustomizedList = ({ items, isComplex, ...props }) => {
  let itemsComponents = [];
  if (isComplex)
    itemsComponents = items.map(section => (
      <li key={`section-${section.key}`}>
        <ul>
          <ListSubheader>{section.text}</ListSubheader>
          {section.items.map(item => (
            <ListItem key={`item-${section.key}-${item.key}`} button>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </ul>
      </li>
    ));
  else
    itemsComponents = items.map(item => (
      <ListItem button key={item.key}>
        <ListItemText primary={item.text} />
      </ListItem>
    ));
  return <List subheader={isComplex && <li />}>{itemsComponents}</List>;
};

CustomizedList.propTypes = {
  items: PropTypes.array
};

export default CustomizedList;
