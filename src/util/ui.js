import React from 'react';

export const getControllerByModel = (name, uiModel, value, onModelChange) => {
  const { properties: controlProperties } = uiModel;
  let toRet = React.createElement(uiModel.control, {
    id: name,
    ...controlProperties,
    value: value,
    onChange: onModelChange(name)
  });
  return toRet;
};
