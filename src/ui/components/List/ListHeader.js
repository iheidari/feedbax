import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import HeaderText from './HeaderText';

const StyledColumn = styled(Grid)`
  border: 1px solid black;
  padding: 5px;
  cursor: ${props => (props.sortable ? 'pointer' : 'default')};
`;

const ListHeader = ({ name, model, sort, order, onClick }) => {
  return (
    <StyledColumn
      item
      {...model.size}
      onClick={model.sortable ? onClick : null}
      sortable={model.sortable ? 1 : 0}
    >
      <HeaderText
        sort={sort}
        order={order}
        columnName={name}
        columnTitle={model.text}
      />
    </StyledColumn>
  );
};

export default ListHeader;
