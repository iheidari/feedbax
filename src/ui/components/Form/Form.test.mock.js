import TextField from '@material-ui/core/TextField';

const uiModel = {
  list: {
    columns: {
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
      }
    }
  }
};

export default uiModel;
