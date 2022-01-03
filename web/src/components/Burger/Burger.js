import React from 'react'
import { bool, func } from 'prop-types';
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledBurger = styled.button`
    ${tw`flex flex-col justify-between w-6 h-4 bg-transparent border-0 cursor-pointer`}
    &:focus {
        ${tw`outline-none`}
    }
    .line {
        ${tw`relative bg-black w-6 h-2px z-10 transition-all duration-300 ease-linear`}
        transform-origin: 1px;
        &:first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'translateY(2px) rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const Burger = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger