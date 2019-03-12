import React from 'react';
import Styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import LanguagePanel from '../LanguagePanel/LanguagePanel';

const StledBlock = Styled.div`
  height: 75px;
  padding: 5px;
`;

const Header = () => {
  const { t } = useTranslation();
  return (
    <StledBlock>
      {t('welcome-to-react')} <LanguagePanel />
    </StledBlock>
  );
};

export default Header;
