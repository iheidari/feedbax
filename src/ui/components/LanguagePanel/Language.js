import React from 'react';
import i18n from '../../../i18n';

const Language = ({ lang, children }) => {
  return <span onClick={() => i18n.changeLanguage(lang)}>{children}</span>;
};

export default Language;
