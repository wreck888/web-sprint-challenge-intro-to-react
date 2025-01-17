// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
// import Details from './components/Details';

const StyledDiv = styled.div`
display: flex;
border: 2px solid black;
border-radius: 8px;
justify-content: space-between;
flex-wrap: wrap;
padding: 1rem;
width; 100%;

`
const StyledDiv2 = styled.div`
display: flex;
border-radius: 8px;
justify-content: center;
flex-wrap: wrap;
width: 100%;
background-image: url('https://images.pexels.com/photos/6793711/pexels-photo-6793711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
color: #FFE81F;
border: 2px solid #FFE81F;
margin-top: 2%;
`
const StyledH2 = styled.h2`
display:flex;
width: 50%;
text-align: left;
align-content: center;
Font-family: fantasy;
letter-spacing: .5rem;
color: #FFE81F;

`

const StyledButton = styled.button`
background-image: url('https://cdn.pixabay.com/photo/2017/08/09/20/42/abstract-2615764_960_720.jpg');
border: 2px solid #FFE81F;
border-radius: 8px;
color: #FFE81F;
height: 5rem;
font-family: fantasy;
background-size: cover;
`
const StyledPara = styled.p`
font-weight: bold;
`

const Character = (props) => {
    const [showText, setShowText] = useState(false);


  const onClick = () => {
      if (showText === false) {
        return setShowText(true);
    } else if (showText === true) {
        return setShowText(false)
    }
}
  const Text = () => 
    <StyledDiv2>
        <StyledPara>
        Name: {props.person.name}<br/>
        Brith Year: {props.person.birth_year}<br/>
        Gender: {props.person.gender}<br/>
        Height: {props.person.height}<br/>
        Mass: {props.person.mass}<br/>
        Hair Color: {props.person.hair_color}<br/>
        </StyledPara>
      </StyledDiv2>;


    console.log(props)
    return (
        <StyledDiv className='friend'>
            <StyledH2>{props.person.name}</StyledH2>
            <StyledButton onClick={onClick}>Character Info</StyledButton>
            <>
            {showText ? <Text /> : null}
            </>
        </StyledDiv>
  )
}


export default Character;