import styled from '@emotion/styled';
import media from './media';

const Row = styled.section`
  width: 100%;
  padding-left: .975rem;
  padding-right: .975rem;
  background-color: ${props => props.bgColor ? props.bgColor : 'white' };

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export default Row;
