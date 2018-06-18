import styled from 'styled-components';

export const MainText = Component => styled(Component)`
  color: ${props => props.theme.mainLightText};
  font-family: ${props => props.theme.mainTextFontFamily};
`;

export const SecondaryText = Component => styled(Component)`
  color: ${props => props.theme.mainLightText};
  font-family: ${props => props.theme.secondaryTextFontFamily};
`;

export const Section = styled.section`
  overflow: hidden;
  width: 100%;
  min-height: 760px;
  height: 100vh;
`;