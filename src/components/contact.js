import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'

import { Container, Section, theme, media } from '../styles'
import Image from './image'

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 25px;
`;

const Copy = styled.h5`
  color: ${theme.colors.dark};
  font-size: 22px;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: ${theme.colors.mayerPurple};
    text-decoration: underline;
  }


  ${media.medium} {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 100%;
`

const StyledForm = styled.form`
  width: 100%;
  margin-top: 20px;

  div {
    width: 100%;
    display: column;
    flex-direction: row;
    margin-bottom: 15px;
  }

  label {
    color: ${theme.colors.darkLight};
    font-size: 12px;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    max-width: 100%;
    border: 1px solid ${theme.colors.darkLight};
    color: ${theme.colors.dark};
    margin-top: 5px;
    border-radius: 5px;
    padding: 12px;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  button {
    display: block;
    background-color: ${theme.colors.mayerPurple};
    color: ${theme.colors.light};
    border-radius: 5px;
    padding: 12px 20px;
    box-shadow: ${theme.boxShadow};
    transition: ${theme.transition};
    font-size: 16px;
    border: 0;
    width: 200px;
    margin-left: auto;
    &:hover {
      cursor: pointer;
      color: ${theme.colors.light};
      box-shadow: ${theme.boxShadowHover};
    }

    ${media.medium} {
      margin-bottom: 20px;
    }

    ${media.small} {
      width: 100%;
    }
  }
`


const Projects = ({ data }) => {

  const { frontmatter, html } = data[0].node;

  return (
    <Section bgColor={theme.colors.light}>
      <Element name="contact" />
      <Container>
        <FlexRow>
          <div>
            <Title>Let's Connect.</Title>
            <Copy>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</Copy>
            <StyledForm name="Contact Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <label>Email</label><input type="email" name="email" placeholder="Email"  />
              </div>
              <div>
                <label>Message</label><textarea name="message"  placeholder="Hey, how's it going?" rows="3"></textarea>
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </StyledForm>
          </div>
          <ImageContainer>
            <Image filename="message.png" classes='gatsby-sbs-image' alt="Send me a message and let's connect." />
          </ImageContainer>
        </FlexRow>
      </Container>
    </Section>
  )

}


export default Projects


