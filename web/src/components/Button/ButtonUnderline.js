import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const Button = styled.a`
    ${tw`relative inline-block text-gray-900 text-xs font-semibold tracking-wide uppercase pb-2 cursor-pointer focus:outline-none `}
    letter-spacing: 0.97px;
    &:after {
        content: '';
        ${tw`absolute w-8 bottom-0 left-0 bg-primary_600 h-2px transition-all duration-500 ease-in-out`}
    }
    &:hover, 
    &:active,
    &:focus {
        &:after {
            ${tw`w-full`}
        }
    }
`

export default props => <Button className={props.className} href={props.href} data-modal-open={props.data}>{props.text}</Button>