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

const FormContainer = styled.div`
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

    &.error {
      border: 1px solid red;
    }

    &:focus {
      outline: none;
    }
  }
  input {
    padding-right: 150px;
  }

  .error-message {
    position: absolute;
    font-size: 12px;
    height: 12px;
    color: red;
    top: 0;
    right: 10px;
    bottom: 0;
    margin: auto;
  }

  button {
    display: block;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.darkLight};
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
      box-shadow: ${theme.boxShadowHover};
    }

    &:focus {
      outline: none;
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
    this.state = { submitted: false };
  }


  componentDidMount = () => {
    ScrollReveal().reveal(this.refs.connect, theme.scrollRevealConfig)
    ScrollReveal().reveal(this.refs.image, theme.scrollRevealConfig)
  }

  encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  handleSubmission = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "Contact Form", ...data })
    })
      .then(() => this.setState({submitted: true}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Section bgColor={theme.colors.light} id="contact">
        <Element name="contact" />
        <Container>
          <FlexRow>
            <div ref="connect">
                {!this.state.submitted ?
                <>
                    <Title>Let's connect.</Title>
                    <Copy>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</Copy>
                  <FormContainer>
                      <Formsy name="Contact Form" onValidSubmit={this.handleSubmission} method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <div>
                          <label>Email</label>
                          <FormsyInput
                            name="email"
                            validations="isEmail"
                            validationError="This is not a valid email."
                            placeholder="Email"
                            required />
                        </div>
                        <div>
                          <label>Message</label>
                          <FormsyTextArea
                            name="message"
                            placeholder="Hey, how's it going?"
                            validationError="This is required"
                            required />
                        </div>
                        <div style={{'display':'none'}}>
                          <label>Don’t fill this out:
                            <FormsyInput
                            name="bot-field"
                            value=""
                             /></label>
                        </div>
                        <button type="submit">Send ›</button>
                      </Formsy>
                    </FormContainer>
                  </>
                  :
                  <>
                    <Title>Thanks for reaching out!</Title>
                    <Copy>I'll get back to you soon.</Copy>
                  </> }

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

