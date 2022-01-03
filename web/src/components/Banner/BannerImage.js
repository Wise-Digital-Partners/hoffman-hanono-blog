import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const Banner = ({images, children, className, position, maxHeightDesktop, maxHeightMobile}) => (

    <BackgroundImage className={className} fixed={images} maxHeightDesktop={maxHeightDesktop} maxHeightMobile={maxHeightMobile} style={{backgroundPosition: position}}>
        <div className="container">
            {children}
        </div>
    </BackgroundImage>

)

const StyledBanner = styled(Banner)`
    ${tw`flex!`}
    @media (min-width: 768px) {
        max-height: ${({ maxHeightDesktop }) => { return maxHeightDesktop }};
    }
    max-height: ${({ maxHeightMobile }) => { return maxHeightMobile }};
`
export default StyledBanner
