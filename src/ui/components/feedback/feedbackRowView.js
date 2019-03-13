import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FeedbackLink from './FeedbackLink';
import { useTranslation } from 'react-i18next';

const Column = styled(Grid)`
  border: 1px solid black;
  padding: 5px;
`;

const FeedbackRowView = props => {
  const { t } = useTranslation();
  const fields = props.model.list.fields;
  return (
    <>
      <Column item {...fields.title.size}>
        <FeedbackLink {...props} />
      </Column>
      <Column item {...fields.description.size}>
        {props.description}
      </Column>
      <Column item {...fields.deleteAction.size} onClick={props.onDelete}>
        {t('Delete')}
      </Column>
    </>
  );
};

FeedbackRowView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default FeedbackRowView;
