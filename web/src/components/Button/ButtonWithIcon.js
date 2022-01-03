import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'


const Button = styled.a`
    ${tw`
        inline-flex 
        items-center 
        justify-center 
        text-center
        bg-primary_100 hover:bg-primary_600 focus:bg-primary_600 active:bg-primary_600
        text-primary_600 hover:text-white focus:text-white active:text-white
        font-normal
        rounded-sm 
        px-5
        py-2
        no-underline
        cursor-pointer 
        focus:outline-none 
        transition-all 
        duration-300 
        ease-in-out
    `}
    i {
        ${tw`text-lg`}
    }
`

export default props => <Button as={props.as} type={props.type} className={props.className} href={props.href} data-modal-open={props.data}>{props.text}</Button>