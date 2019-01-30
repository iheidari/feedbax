import Styled from "styled-components";

const Content = Styled.div`
  width:${props => props.theme.content.width};
  background-color: ${props => props.theme.content.background};
  margin: 0 auto;
`;

export default Content;
