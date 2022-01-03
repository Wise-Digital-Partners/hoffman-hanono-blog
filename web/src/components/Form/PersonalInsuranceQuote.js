import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
   return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const StyledForm = styled.div`
   form {
      ${tw`flex flex-wrap`}
   }
   .field {
      ${tw`mb-6 w-full`}
   }
   .label {
      ${tw`block text-sm font-bold text-gray-900 mb-2`}
   }
   input[type="text"],
  input[type="tel"],
  input[type="email"],
  /* textarea  */
  select {
      ${tw`w-full px-4 py-3 bg-white border border-solid border-gray-200 rounded-sm`}
      &:focus {
         outline-color: #4d90fe;
      }
   }
   select {
      ${tw`h-12 appearance-none cursor-pointer`}
   }
   .select-wrapper {
      ${tw`relative`}
      &:after {
         content: "\f078";
         font-family: "Font Awesome 5 Pro";
         ${tw`absolute font-normal transform translate-y-3 -translate-x-10`}
      }
   }
`;

export default class Form extends Component {
   constructor(props) {
      super(props);
      this.state = { isValidated: false };
   }

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state,
         }),
      })
         .then(
            () =>
               (document.getElementById("quote-form-ajax-response").innerHTML =
                  "Thank you for your submission! We will get in touch with you shortly."),
            form.remove(),
            (window.dataLayer = window.dataLayer || []),
            window.dataLayer.push({
               event: "personalInsuranceQuoteFormSubmission",
            })
         )
         .catch((error) => alert(error));
   };

   render() {
      return (
         <StyledForm>
            <div id="quote-form-ajax-response"></div>
            <form
               name="Personal Insurance Quote"
               method="post"
               action=""
               data-netlify="true"
               data-netlify-honeypot="bot-field"
               onSubmit={this.handleSubmit}
            >
               {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
               <input type="hidden" name="form-name" value="Personal Insurance Quote" />
               <div hidden>
                  <label>
                     Don’t fill this out: <input name="bot-field" onBlur={this.handleChange} />
                  </label>
               </div>

               <div className="field">
                  <label className="label" htmlFor={"name"}>
                     Full Name
                  </label>
                  <input type={"text"} name={"name"} onBlur={this.handleChange} id={"name"} required={true} />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
                  <div className="field">
                     <label className="label" htmlFor="email">
                        Email Address
                     </label>
                     <input type="email" name="email" onBlur={this.handleChange} id="email" required={true} />
                  </div>
                  <div className="field">
                     <label className="label" htmlFor="phone">
                        Phone Number
                     </label>
                     <input type="tel" name="phone" onBlur={this.handleChange} id="phone" required={true} />
                  </div>
               </div>

               <div className="field">
                  <label className="label" htmlFor="what-type-of-insurance-do-you-need">
                     What type of insurance do you need?
                  </label>
                  <div className="select-wrapper">
                     <select name="what-type-of-insurance-do-you-need" onBlur={this.handleChange} required={true}>
                        <option value=""></option>
                        <option value="Home">Home</option>
                        <option value="Auto">Auto</option>
                        <option value="Umbrella">Umbrella</option>
                        <option value="Landlord">Landlord</option>
                        <option value="Recreational Vehicle">Recreational Vehicle</option>
                        <option value="Boat & Watercraft">Boat & Watercraft</option>
                        <option value="Life">Life</option>
                        <option value="Family Medical">Family Medical</option>
                     </select>
                  </div>
               </div>
               <div className="mt-2">
                  <ButtonSolid as="button" type="submit" text="Get a Quote" />
               </div>
            </form>
         </StyledForm>
      );
   }
}
