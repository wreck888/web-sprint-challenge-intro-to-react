// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
border: 2px solid black;
border-radius: 8px;
justify-content: space-between;
flex-wrap: wrap;


`

const Character = (props) => {
    console.log(props)
    return (
        <StyledDiv className='friend'>
            <h2>{props.person.name}</h2>
            <h3>{props.person.birth_year}</h3>
        </StyledDiv>
  )
}

export default Character;