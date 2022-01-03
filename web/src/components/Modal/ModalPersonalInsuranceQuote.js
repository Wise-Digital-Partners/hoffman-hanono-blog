import React from "react";
import MicroModal from "micromodal";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "@emotion/styled";
import tw from "twin.macro";

import PersonalInsuranceQuote from "../Form/PersonalInsuranceQuote";
import ButtonWithIcon from "../Button/ButtonWithIcon";

const StyledModal = styled.div`
    .modal {
        &.is-open {
            ${tw`block`}
        }
        &[aria-hidden="false"] {
            .overlay {
                animation: mmfadeIn .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        &[aria-hidden="false"] {
            .content-wrapper {
                animation: mmslideIn .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        &[aria-hidden="true"] {
            .overlay {
                animation: mmfadeOut .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        &[aria-hidden="true"] {
            .content-wrapper {
                animation: mmslideOut .5s cubic-bezier(0, 0, .2, 1);
            }
        }
        .content-wrapper,
        .overlay {
            will-change: transform;
        }
        .close {
            ${tw`absolute top-0 right-0 mr-8 mt-8 w-12 h-12 rounded-full flex items-center justify-center border border-solid border-gray-200 bg-transparent cursor-pointer transition-all duration-300 ease-linear`}
            &:hover,
            &:focus,
            &:active {
                ${tw`bg-primary_600 text-white`}
            }
            @media (max-width: 767px) {
                ${tw`w-8 h-8 mt-12`}
            }
        } 
    }
    @keyframes mmfadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes mmfadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    @keyframes mmslideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }

    @keyframes mmslideOut {
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
    }
}
`;

const Modal = () => {
   if (typeof window !== "undefined") {
      MicroModal.init({
         openTrigger: "data-modal-open",
         closeTrigger: "data-modal-close",
         disableFocus: true,
         disableScroll: true,
         awaitOpenAnimation: true,
         awaitCloseAnimation: true,
      });
   }

   return (
      <div>
         <StyledModal>
            <div className="modal relative hidden z-50" id="modal-personal-insurance" aria-hidden="false">
               <div
                  className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-75 outline-none"
                  tabIndex="-1"
                  data-modal-close
               >
                  <div
                     className="content-wrapper bg-white w-full h-screen overflow-auto max-w-3xl ml-auto py-24 px-6 md:px-20"
                     role="dialog"
                     aria-modal="true"
                  >
                     <header className="mb-8">
                        <p className="heading-three">Get a Personal Insurance Quote</p>
                        <p>
                           Protect what matters to you with our comprehensive coverage. Get your free quote today! Need a quote for commercial
                           insurance? Click{" "}
                           <AniLink fade to="/get-commercial-insurance-quote/">
                              here
                           </AniLink>
                           .
                        </p>
                     </header>
                     <div className="flex items-center mb-16">
                        <ButtonWithIcon
                           className="gtm-phone-number"
                           href="tel:+1-619-420-1861"
                           text={[<i className="fas fa-phone mr-2 "></i>, "(619) 420-1861"]}
                        />
                     </div>
                     <PersonalInsuranceQuote />
                     <i className="close fal fa-times" data-modal-close></i>
                  </div>
               </div>
            </div>
         </StyledModal>
      </div>
   );
};

export default Modal;
