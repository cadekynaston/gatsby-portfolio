import styled from '@emotion/styled';
import media from './media';

const Row = styled.section`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${props => props.bgColor ? props.bgColor : 'white' };

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export default Row;
