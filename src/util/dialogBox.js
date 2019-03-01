export const createDialogModel = (open, title, content, actions) => ({
  open,
  title,
  content,
  actions
});
export const createOkCancelActions = (onOk, onCancel) => [
  {
    text: 'Ok',
    onClick: onOk
  },
  {
    text: 'Cancel',
    onClick: onCancel
  }
];
