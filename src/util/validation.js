export const validate = (uiModel, dataModel) => {
  const validatedFieldsDataModel = validateFields(uiModel.fields, dataModel);
  const validatedDataMOdel = validateForm(
    uiModel.fields,
    validatedFieldsDataModel
  );
  return validatedDataMOdel;
};

export const isValid = validatedDataModel => {
  return true;
};

const validateFields = (uiFieldModel, dataModel) => {
  let validatedModel = {};
  for (let prop in dataModel) {
    let validatedData = dataModel[prop];
    const fieldModel = uiFieldModel[prop];
    if (fieldModel && fieldModel.validation) {
      fieldModel.validations.map(validation =>
        validation(validatedData) ? '' : validation.messageId
      );
    }
    validatedModel[prop] = validatedData;
  }
  return validatedModel;
};

const validateForm = (uiDataModel, dataModel) => {
  return dataModel;
};
