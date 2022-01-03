import React from "react";
import { bool } from "prop-types";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledOffCanvas = styled.nav`
    ${tw`bg-gray-100 fixed left-0 w-full h-screen pt-12 pb-32 px-6 z-10 overflow-y-scroll transition-transform duration-500 ease-in-out`}
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
`;

const OffCanvas = ({ children, open, ...props }) => {
   const isHidden = open ? true : false;

   if (typeof window !== "undefined") {
      if (open) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
      }
   }

   return (
      <StyledOffCanvas open={open} aria-hidden={!isHidden} {...props}>
         {children}
      </StyledOffCanvas>
   );
};

StyledOffCanvas.propTypes = {
   open: bool.isRequired,
};

export default OffCanvas;
