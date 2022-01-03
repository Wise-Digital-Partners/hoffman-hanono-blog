import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'
// import AniLink from "gatsby-plugin-transition-link/AniLink"


const Button = styled.a`
    ${tw`
        inline-flex 
        items-center 
        justify-center 
        text-center 
        bg-primary_600 hover:bg-primary_400 focus:bg-primary_400 active:bg-primary_400
        text-white hover:text-white focus:text-white active:text-white
        font-normal
        rounded-sm 
        px-8
        py-3
        no-underline
        cursor-pointer 
        focus:outline-none 
        transition-all
        duration-300 
        ease-in-out
    `}
    min-width: 178px;
    &.is-light {
        ${tw`
            bg-white hover:bg-transparent
            text-primary_600 hover:text-white focus:text-white active:text-white
            border
            border-solid
            border-transparent hover:border-white focus:border-white active:border-white
        `} 
    }
`

export default props => <Button as={props.as} type={props.type} className={props.className} href={props.href} data-modal-open={props.data}>{props.text}</Button>