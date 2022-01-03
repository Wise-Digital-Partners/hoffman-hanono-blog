import React, { Component } from 'react'
import styled from '@emotion/styled';
// import tw from 'twin.macro'

import ButtonSolid from '../Button/ButtonSolid';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const StyledForm = styled.div`
  form {
    display: flex;
    flex-wrap: nowrap;
    max-width: 330px;
    @media (max-width: 767px){
      margin: 0 auto 45px;
    }
  }
  .field {
    flex-basis: 100%;
  }
  label {
    display: none;
  }
  input {
    width: 100%;
    height: 54px;
    padding: 13px 16px;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
    border: none;
    /* background-color: ${variables.colorWhite}; */
  }
  button {
    padding: 10px;
    border-radius: 0 4px 4px 0;
    min-width: auto;
    font-size: 22px;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ajax-response {
    /* color: ${variables.colorWhite}; */
    font-size: 14px;
  }
`

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
    .then(() =>
      document.getElementById('newsletter-form-ajax-response').innerHTML = "Thanks for subscribing!",
      form.remove(),
      window.dataLayer = window.dataLayer || [],
      window.dataLayer.push({
        'event': 'newsletterFormSubmission'
      })  
    )
    .catch(error => alert(error))  

  }
  
  render() {
    return (
      <StyledForm>
        <div id="newsletter-form-ajax-response" className="ajax-response"></div>
        <form
        name="Newsletter"
        method="post"
        action=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="Newsletter" />
        <div hidden>
            <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onBlur={this.handleChange} />
            </label>
        </div>
         
        <div className="field">
            <label className="label" htmlFor={'email'}>Email</label>
            <div className="control">
            <input
                className="input"
                type={'email'}
                name={'email'}
                onBlur={this.handleChange}
                id={'email'}
                required={true}
                placeholder={'Your Email'}
            />
            </div>
        </div>
        <ButtonSolid as="button" type="submit" text={<i className='far fa-chevron-right'></i>}/>
        </form>
      </StyledForm>
    )
  }
}