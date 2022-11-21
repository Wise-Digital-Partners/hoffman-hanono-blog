import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

const Hero = ({ images, children, className, position, maxHeightDesktop, maxHeightMobile }) => (
   <section className="pt-0 mb-20 lg:pt-8 md:mb-32">
      <div className="container">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0 lg:gap-x-24 items-center">
            <div className="row-start-2 lg:row-start-1">{children}</div>
            <div className="row-start-1 lg:row-start-1 relative">
               <BackgroundImage
                  className={className}
                  fixed={images}
                  maxHeightDesktop={maxHeightDesktop}
                  maxHeightMobile={maxHeightMobile}
                  style={{ backgroundPosition: position }}
               />
            </div>
         </div>
      </div>
   </section>
);

const StyledHero = styled(Hero)`
   ${tw`w-full w-100vw lg:w-full h-100vw lg:h-75vw transform -translate-x-4 lg:translate-x-0`}
   @media (min-width: 768px) {
      max-height: ${({ maxHeightDesktop }) => {
         return maxHeightDesktop;
      }};
   }
   max-height: ${({ maxHeightMobile }) => {
      return maxHeightMobile;
   }};
`;
export default StyledHero;
