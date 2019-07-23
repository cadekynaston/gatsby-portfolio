import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'

import { Container, Section, theme, media } from '../styles'
import message from '../images/message.svg'

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 25px;
`;

const ContactImage = styled.img`

  width: 90%;

  ${media.mediumUp} {
    padding-left: 20px;
    max-width: 40%;
    max-height: 400px;
  }
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: ${theme.colors.mayerPurple};
    text-decoration: underline;
  }


  ${media.small} {
    flex-direction: column;
  }
`

const StyledForm = styled.form`
  width: 100%;
  margin-top: 20px;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    align-items: center;
  }

  label {
    width: 100px;
    color: ${theme.colors.darkLight};
  }

  input,
  textarea {
    width: 100%;
    max-width: 100%;
    border: 1px solid ${theme.colors.darkLight};
    color: ${theme.colors.darkLight};
    /* box-shadow: ${theme.boxShadow}; */
    border-radius: 5px;
    padding: 12px 20px;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  button {
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
            <Title>Get in Touch.</Title>
            <h4>I'd love to hear from you if you have any questions or if you just feel like saying hi!</h4>
            <StyledForm name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
              <div>
                <label>Name</label><input type="text" name="name" placeholder="Name" />
              </div>
              <div>
                <label>Email</label><input type="email" name="email" placeholder="Email"  />
              </div>
              <div>
                <label>Message</label><textarea name="message"></textarea>
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </StyledForm>
          </div>
          <ContactImage src={message} alt="" />
        </FlexRow>
      </Container>
    </Section>
  )

}


export default Projects


