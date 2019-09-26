import React, { Component } from "react";
import PropTypes from "prop-types";
import CharacterConsumer from "../context";
import "./Character.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Character extends Component {
  state = {
    isVisible: false
  };

  static defaultProps = {
    id: "No Info",
    imgSrc: "No Info",
    name: "No Info",
    alias: "No Info",
    title: "No Info",
    allegiance: "No Info",
    culture: "No Info",
    born: "No Info",
    spouse: "No Info",
    issue: "No Info",
    books: "No Info"
  };



  onClickEvent = e => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  onDeleteCharacter = async (dispatch, e) => {
    const {id} = this.props;

    //DELETE Request
    await axios.delete(`https://my-json-server.typicode.com/sabina929/character-json-server/characters/${id}`);
    // Consumer Dispatch
    dispatch({
      type: "DELETE_CHARACTER",
      payload: id
    });
  };

  render() {
    // Destructuring
    const {isVisible} = this.state;
    const {id, imgSrc, name, alias, title, allegiance, culture, born, spouse, issue, books} = this.props;

    return (
      <CharacterConsumer>
        {value => {
        const {dispatch} = value;

        return (
          <div
          className="col-md-6 mb-4"
          style={{
            fontFamily: "Gothic",
            marginBottom: "50px"
          }}
          >
              <div className="card">
                <div
          className="card-header d-flex justify-content-between"
          style={
          isVisible
            ? {
              backgroundColor: "hsl(43, 77%, 35%)",
              color: "rgb(255, 231, 211)"
            }
            : null
          }
          >
                  <h4 className="d-inline" onClick={this.onClickEvent}>
                    {name}
                  </h4>
                  <i
          onClick={this.onDeleteCharacter.bind(this, dispatch)}
          className="far fa-trash-alt"
          style={{
            cursor: "pointer"
          }}
          ></i>
                </div>
                {isVisible ? (
            <div className="card-body">
                    <img
            className="mb-4 img-fluid"
            src={imgSrc}
            alt={name}
            style={{
              margin: "0 auto",
              display: "block"
            }}
            />
                    {alias ? (
              <p className="card-text">
                        <strong>Alias: </strong>
                        {alias}
                      </p>
              ) : null}
                    <p className="card-text"><strong>Title: </strong>{title}</p>
                    <p className="card-text"><strong>Allegiance: </strong>{allegiance}</p>
                    <p className="card-text"><strong>Culture: </strong>{culture}</p>
                    <p className="card-text"><strong>Born: </strong>{born}</p>
                    {issue && spouse ? (
              <p className="card-text"><strong>Spouse: </strong>{spouse}</p>
              ) : null}

                    {issue || spouse ? (
              <p className="card-text"><strong>{issue ? "Issue" : "Spouse"}: </strong>{issue || spouse}</p>
              ) : null}
                    <p className="card-text"><strong>Book(s): </strong>{books}</p>

                    <Link to={`edit/${id}`} className="btn btn-block">Update Character</Link>
                  </div>
            ) : null}
              </div>
            </div>
          );
      }}
      </CharacterConsumer>
      );
  }
}
Character.defaultProps = {
  id: "No Info",
  imgSrc: "No Info",
  name: "No Info",
  alias: "No Info",
  title: "No Info",
  allegiance: "No Info",
  culture: "No Info",
  born: "No Info",
  spouse: "No Info",
  issue: "No Info",
  books: "No Info"
};
Character.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  allegiance: PropTypes.string.isRequired,
  culture: PropTypes.string.isRequired,
  born: PropTypes.string.isRequired,
  spouse: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  books: PropTypes.string.isRequired
};
export default Character;
