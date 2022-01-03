import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const StyledModal = styled.div`
   .modal {
      &.is-open {
         ${tw`block`}
      }
      &[aria-hidden="false"] {
         .overlay {
            animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="false"] {
         .content-wrapper {
            animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="true"] {
         .overlay {
            animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="true"] {
         .content-wrapper {
            animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
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
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }

   @keyframes mmfadeOut {
      from {
         opacity: 1;
      }
      to {
         opacity: 0;
      }
   }

   @keyframes mmslideIn {
      from {
         transform: translateX(100%);
      }
      to {
         transform: translateX(0);
      }
   }

   @keyframes mmslideOut {
      from {
         transform: translateX(0);
      }
      to {
         transform: translateX(100%);
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

   // handle click
   const closeClickHandler = () => {
      MicroModal.close("modal-quote");
   };

   return (
      <div>
         <StyledModal>
            <div className="modal relative hidden z-40" id="modal-quote" aria-hidden="false">
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
                     <p className="heading-three">Are you looking for commercial or personal insurance today?</p>
                     <div className="grid grid-cols-2 gap-x-8 max-w-sm mt-12">
                        <div onClick={closeClickHandler}>
                           <ButtonSolid href="/get-commercial-insurance-quote/" text="Commercial" />
                        </div>
                        <div onClick={closeClickHandler}>
                           <ButtonGhost as="button" data="modal-personal-insurance" text="Personal" />
                        </div>
                     </div>
                     <i className="close fal fa-times" data-modal-close></i>
                  </div>
               </div>
            </div>
         </StyledModal>
      </div>
   );
};

export default Modal;
