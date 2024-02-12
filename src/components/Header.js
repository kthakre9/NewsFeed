import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
border-bottom: 1px solid black;
line-height: 40px;
height: 40px;
background-color: white;
position: sticky; top: 0;
z-index: 1;

h1 {
  margin: 0;
}
`

const LanguageWrapper = styled.div`
:first-child::after {
  content: "/";
}
cursor: pointer;
`

export const Header = ({ data }) => {
  const { date, image, link } = data;
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderWrapper role="banner">
      <span>
        {date}
      </span>
      <>
        <a href={link}>
          <h1>
            <img src={image?.url} alt={image?.title} />
          </h1>
        </a>
      </>
      <>
        <LanguageWrapper>
          <span style={{ fontWeight: i18n.resolvedLanguage === 'en' ? 'bold' : 'normal' }}
            onClick={() => changeLanguage('en')}>ENG </span>

          <span style={{ fontWeight: i18n.resolvedLanguage === 'es' ? 'bold' : 'normal' }}
            onClick={() => changeLanguage('es')}> ESP</span>
        </LanguageWrapper>
      </>
    </HeaderWrapper>
  )
}