import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Paging from '../ui/components/Paging';
import DialogeBox from '../ui/components/DialogBox';

storiesOf('Paging', module).add('simple one', () => (
  <Paging
    current={3}
    count={19}
    take={3}
    onPagerChange={page => action(`page: ${page}`)}
  />
));

storiesOf('DialogeBox', module).add('simple one', () => (
  <DialogeBox
    title={'test title'}
    open={true}
    actions={[
      { text: 'Ok', onClick: action('ok clicked'), color: 'primary' },
      { text: 'Cancel', onClick: action('cancel clicked'), color: 'secondary' }
    ]}
  >
    <span>Content of the dialog box is here</span>
  </DialogeBox>
));

// ---demo--- need to be removed

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
  ));
