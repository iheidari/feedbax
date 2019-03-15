import TextField from '@material-ui/core/TextField';
import { required } from '../../../util/customValidator';

const uiModel = {
  list: {
    fields: {
      title: { text: 'Title', tooltip: '', size: { xs: 3 }, sortable: true },
      description: {
        text: 'Description',
        tooltip: '',
        size: { xs: 7 },
        sortable: false
      },
      deleteAction: { text: '', tooltip: '', size: { xs: 2 }, sortable: false }
    }
  },
  form: {
    fields: {
      title: {
        control: TextField,
        properties: {
          required: true,
          error: true,
          helperText: 'helper',
          label: 'Title',
          margin: 'normal',
          variant: 'outlined'
        },
        size: { xs: 12 },
        validation: [{ validator: required, messageId: 'isRequired' }]
      },
      description: {
        control: TextField,
        properties: {
          helperText: ' ',
          label: 'Description',
          variant: 'outlined',
          multiline: true
        },
        size: { xs: 12 },
        validation: []
      }
    }
  }
};

export default uiModel;
