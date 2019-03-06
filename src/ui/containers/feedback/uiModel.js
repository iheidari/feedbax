import TextField from '@material-ui/core/TextField';

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
          label: 'Title',
          tooltip: '',
          margin: 'normal',
          variant: 'outlined'
        },
        size: { xs: 12 },
        validation: [
          { name: 'isRequired', validator: 123, messageId: 'isRequired' }
        ]
      },
      description: {
        control: TextField,
        properties: {
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
