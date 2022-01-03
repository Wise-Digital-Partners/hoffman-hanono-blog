import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const Hero = ({images, children, className, position, maxHeightDesktop, maxHeightMobile}) => (

  <BackgroundImage className={className} fixed={images} maxHeightDesktop={maxHeightDesktop} maxHeightMobile={maxHeightMobile} style={{backgroundPosition: position}}>
    <div className="container">
        {children}
    </div>
  </BackgroundImage>
  
)

const StyledHero = styled(Hero)`
    ${tw`flex! items-center w-full h-150vw md:h-75vw`}
    @media (min-width: 768px) {
        max-height: ${({ maxHeightDesktop }) => { return maxHeightDesktop }};
    }
    max-height: ${({ maxHeightMobile }) => { return maxHeightMobile }};
    h1 {
        ${tw`text-white m-0`}
    }
`
export default StyledHero
