import React, { Component } from 'react';
import Character from "./Character";
import CharacterConsumer from "../context";

class Characters extends Component {
  render() {
    return (
      <CharacterConsumer>
        {
      value => {
        const {characters} = value;

        return (
          <div style={{
            // display: "grid",
            // gridTemplateColumns: "repeat(2, .5fr)",
            // gridGap: "20px",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "80px"
          }}>
          {
          characters.map(character => {
            return (
              <Character
              key = {character.id}
              id = {character.id}
              imgSrc = {character.imgSrc}
              name = {character.name}
              alias = {character.alias}
              title = {character.title}
              allegiance = {character.allegiance}
              culture = {character.culture}
              born = {character.born}
              spouse = {character.spouse}
              issue = {character.issue}
              books = {character.books}
              />
            )
          })
          }      
      </div>
        )

      }
      }
      </CharacterConsumer>
    )


  }
}


export default Characters;