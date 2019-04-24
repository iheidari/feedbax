import TextField from '@material-ui/core/TextField';
import DatePicker from '../../components/basic/DatePicker';
import Checkbox from '@material-ui/core/Checkbox';
import { required } from '../../../util/customValidator';

const uiModel = {
  list: {
    fields: {
      title: {
        linkable: true,
        text: 'Title',
        tooltip: '',
        size: { xs: 3 },
        sortable: true
      },
      description: {
        text: 'Description',
        tooltip: '',
        size: { xs: 6 },
        sortable: false
      },
      date: {
        text: 'Date',
        size: { xs: 2 },
        sortable: true,
        format: 'date-format'
      },
      deleteAction: {
        text: 'Delete',
        tooltip: '',
        size: { xs: 1 },
        sortable: false,
        action: 'onDelete'
      }
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
        validations: [{ validator: required, messageId: 'isRequired' }]
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
        validations: []
      },
      date: {
        control: DatePicker,
        properties: {
          helperText: ' ',
          label: 'Date',
          variant: 'outlined'
        },
        size: { xs: 12 },
        validations: []
      },
      isPublic: {
        control: Checkbox,
        properties: {
          helperText: ' ',
          label: 'Public'
        }
      }
    }
  },
  validations: {
    title: [{ validator: required, messageId: 'isRequired' }],
    description: []
  }
};

export default uiModel;
