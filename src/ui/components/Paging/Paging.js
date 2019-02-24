import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const showButton = (current, page, pageCount) =>
  page <= 2 ||
  page >= pageCount - 1 ||
  (page >= current - 1 && page <= current + 1);

const Paging = ({ current, take, count, onPagerChange }) => {
  const pageCount = Math.ceil(count / take);
  let pageButtons = [];

  pageButtons.push(
    <Button key={0} onClick={current <= 1 ? null : onPagerChange('p')}>
      Previous
    </Button>
  );

  for (let page = 1; page <= pageCount; page++) {
    if (showButton(current, page, pageCount)) {
      pageButtons.push(
        <Button
          key={page}
          color={page === current ? 'secondary' : 'primary'}
          onClick={page === current ? null : onPagerChange(page)}
        >
          {page}
        </Button>
      );
    } else {
      if (showButton(current, page - 1, pageCount))
        pageButtons.push(<span key={page}> ... </span>);
    }
  }

  pageButtons.push(
    <Button
      key={pageCount + 1}
      onClick={current >= pageCount ? null : onPagerChange('n')}
    >
      Next
    </Button>
  );

  return pageButtons;
};

Paging.propTypes = {
  current: PropTypes.number,
  take: PropTypes.number,
  count: PropTypes.number,
  onPagerChange: PropTypes.func.isRequired
};

export default Paging;
