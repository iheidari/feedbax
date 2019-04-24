export const validate = (validations, dataModel) => {
  const validatedDataModel = validateFields(validations, dataModel);
  //TODO: Implement form validations(validations based on more than one field)
  // const validatedDataModel = validateForm(
  //   validations,
  //   validatedFieldsDataModel
  // );

  return validatedDataModel;
};

export const isValid = validationResult => {
  for (let field in validationResult) {
    if (validationResult[field].length > 0) return false;
  }
  return true;
};

const validateFields = (validations, dataModel) => {
  let validatedModel = {};
  for (let field in validations) {
    const fieldValidations = validations[field];
    const fieldValue = dataModel[field];
    validatedModel[field] = validateField(fieldValidations, fieldValue);
  }
  return validatedModel;
};

export const validateField = (validations, value) => {
  const result = validations.reduce((result, validation) => {
    return validation.validator(value)
      ? result
      : [...result, validation.messageId];
  }, []);

  return result;
};
