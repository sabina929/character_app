import React, { Component } from "react";
import axios from "axios";


// https://my-json-server.typicode.com/sabina929/character-json-server/characters

const CharacterContext = React.createContext();

// Provider, Consumer


// REDUCER 
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CHARACTER":
      return {
        ...state,
        characters: state.characters.filter(character => action.payload !== character.id)
      }
    case "ADD_CHARACTER":
      return {
        ...state,
        characters: [...state.characters, action.payload]
      }
    case "UPDATE_USER":
      return {
        ...state,
        characters: state.characters.map(character => character.id === action.payload.id ? action.payload : character)
      }
    default:
      return state
  }
}

// https://anapioficeandfire.com/api/characters?page=59&pageSize=10

// https://awoiaf.westeros.org/images/thumb/3/36/John_Picacio_Arya.jpg/250px-John_Picacio_Arya.jpg

export class CharacterProvider extends Component {

  state = {
    characters: [],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  componentDidMount = async () => {
    const response = await axios.get("https://my-json-server.typicode.com/sabina929/character-json-server/characters");
    // console.log(response);
    this.setState({
      characters: response.data
    })
  }

  render() {
    return (
      <CharacterContext.Provider value={this.state}>
            {this.props.children}
       </CharacterContext.Provider>
    )
  }
}


const CharacterConsumer = CharacterContext.Consumer;

export default CharacterConsumer;