import React from 'react';
import styled from 'styled-components';

const OrderedColumn = styled.b`
  font-weight: 600;
  background-color: yellowgreen;
`;

const HeaderText = ({ sort, order, columnName, columnTitle }) => {
  if (sort === columnName) {
    const sign = order === 'asc' ? '+' : '-';
    return (
      <OrderedColumn>
        {sign}
        {columnTitle}
      </OrderedColumn>
    );
  } else return <span>{columnTitle}</span>;
};

export default HeaderText;
