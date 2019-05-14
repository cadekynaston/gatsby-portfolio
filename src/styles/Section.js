import styled from '@emotion/styled';

const Row = styled.section`
  width: 100%;
  padding-left: .975rem;
  padding-right: .975rem;
  background-color: ${props => props.bgColor ? props.bgColor : 'white' };
`;

export default Row;
