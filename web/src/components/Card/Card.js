import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledCard = styled.section`
  .card {

  }
  .image {

  }
  .card-section {

  }
` 

const Card = ({className, id}) => {
 
  // const data = useStaticQuery(graphql`
  //   {

  //   }
  // `)
 
  return (
    <StyledCard id={id} className={className}>

    </StyledCard>
  )  
}

export default Card;
