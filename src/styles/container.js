import styled from '@emotion/styled';
import theme from './theme';
import media from './media';

const Container = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.maxWidth};

  ${media.medium} {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  ${media.small} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export default Container;
