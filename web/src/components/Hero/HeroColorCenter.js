import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const Hero = ({children, className, maxHeightDesktop, maxHeightMobile}) => (

  <section className={className} maxHeightDesktop={maxHeightDesktop} maxHeightMobile={maxHeightMobile}>
    <div className="container">
        {children}
    </div>
  </section>
  
)

const StyledHero = styled(Hero)`
    ${tw`flex! items-center justify-center text-center w-full h-75vw md:h-50vw`}
    @media (min-width: 768px) {
        max-height: ${({ maxHeightDesktop }) => { return maxHeightDesktop }};
    }
    max-height: ${({ maxHeightMobile }) => { return maxHeightMobile }};
    h1 {
        ${tw`text-white m-0`}
    }
`
export default StyledHero
