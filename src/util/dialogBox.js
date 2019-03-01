export const createDialogModel = (title, content, actions) => ({
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
