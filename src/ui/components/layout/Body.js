import Styled from "styled-components";

const Body = Styled.div`
  background-color:${props => props.theme.body.background};
  width: 100%;
  height: 100%;
`;

export default Body;
