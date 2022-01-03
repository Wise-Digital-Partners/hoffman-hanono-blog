import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const Button = styled.a`
    ${tw`
        inline-flex
        items-center
        justify-center
        text-center
        text-primary_600 hover:text-white focus:text-white active:text-white
        font-medium
        border
        border-solid
        border-primary_600 hover:bg-primary_600 focus:bg-primary_600 active:bg-primary_600 
        font-normal
        rounded-sm
        px-6
        py-3
        no-underline
        cursor-pointer
        focus:outline-none
        transition-all
        duration-300
        ease-linear
    `}
    min-width: 178px;
    &.is-light {
        ${tw`
            text-white hover:text-primary_600 focus:text-primary_600 active:text-primary_600
            border-white hover:bg-white focus:bg-white active:bg-white
        `}
    }
`

export default props => <Button as={props.as} className={props.className} href={props.href} data-modal-open={props.data}>{props.text}</Button>