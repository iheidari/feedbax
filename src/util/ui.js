import React from 'react';

export const getControllerByModel = (
  name,
  uiModel,
  dataModel,
  onModelChange,
  t
) => {
  const {
    properties: { label, ...controlProperties }
  } = uiModel;
  let toRet = React.createElement(uiModel.control, {
    id: name,
    label: t(label),
    ...controlProperties,
    value: dataModel,
    onChange: onModelChange(name)
  });
  return toRet;
};
