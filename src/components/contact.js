import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
import ScrollReveal from 'scrollreveal'
import Formsy from 'formsy-react';

import { Container, Section, theme, media } from '../styles'
import FormsyInput from './formsyInput'
import FormsyTextArea from './formsyTextArea'
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
    border: 1px solid ${theme.colors.gray};
    color: ${theme.colors.dark};
    margin-top: 5px;
    border-radius: ${theme.borderRadius};
    padding: 12px;
    font-size: 14px;
    resize: vertical;

    &:focus {
      outline: none;
    }
  }

  button {
    display: block;
    background-color: ${theme.colors.mayerPurple};
    color: ${theme.colors.light};
    border-radius: ${theme.borderRadius};
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


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false };
  }

  disableButton = () => {
    this.setState({ canSubmit: false });
  }

  enableButton = () =>  {
    this.setState({ canSubmit: true });
  }

  componentDidMount = () => {
    ScrollReveal().reveal(this.refs.form, theme.scrollRevealConfig)
    ScrollReveal().reveal(this.refs.image, theme.scrollRevealConfig)
  }


  render() {
    return (
      <Section bgColor={theme.colors.light}>
        <Element name="contact" />
        <Container>
          <FlexRow>
            <div ref="form">
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
                {/* <Formsy onValidSubmit={this.submitForm} onValid={this.enableButton} onInvalid={this.disableButton} name="Contact Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">

                  <div>
                    <label>Email</label>
                    <FormsyInput
                      name="email"
                      validations="isEmail"
                      required />
                  </div>
                  <div>
                    <label>Email</label>
                    <FormsyTextArea
                      name="message"
                      required />
                  </div>
                  <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
                </Formsy> */}
            </div>
            <ImageContainer ref="image">
                <Image filename="message.png" classes='gatsby-sbs-image' alt="Send me a message and let's connect." />
            </ImageContainer>
          </FlexRow>
        </Container>
      </Section>
    )
  }
}

export default Contact

