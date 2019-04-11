import { useTranslation } from 'react-i18next';
import format from '../../../util/format';

const Cell = ({ uiModel, dataModel }) => {
  const { t } = useTranslation();
  if (uiModel.action) return t(uiModel.text);
  else {
    if (uiModel.format) {
      return format(dataModel, uiModel.format, t(uiModel.format));
    } else {
      if (dataModel) return t(dataModel);
      else return '';
    }
  }
};

export default Cell;
