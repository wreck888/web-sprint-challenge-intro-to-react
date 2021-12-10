import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character'

const StyledDiv = styled.div`

`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  

  // const openDetails = id => {
  //   setCurrentFriendId(id)
  // }

  // const closeDetails = () => {
  //   setCurrentFriendId(null)
  // }
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        console.log(res.data);
        setCharacters(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <StyledDiv className="App">
      <h1 className="Header">Characters</h1>
      {/* {characters.map((person, index) => (
      <Character key={`${index}`}/>
      ))
      } */}
    {characters.map((person, index) => (
       <Character key ={index} person={person}/> ))
    }
    </StyledDiv>
  );
}

export default App;
