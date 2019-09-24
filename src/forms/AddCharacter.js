import React, { Component } from 'react';
import './AddCharacter.css';
import posed from "react-pose";
import CharacterConsumer from "../context";
import axios from "axios";

// var uniqid = require('uniqid');

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block"
    },
    transition: {
      duration: 180
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none"
    },
    transition: {
      duration: 180
    }
  }
});

class AddCharacter extends Component {
  state = {
    visible: false,
    imgSrc: "",
    name: "",
    alias: "",
    title: "",
    allegiance: "",
    culture: "",
    born: "",
    spouse: "",
    issue: "",
    books: "",
    error: false
  }

  changeVisibilty = (e) => {
    this.setState({
      visible: !this.state.visible
    })
  }




  validateForm = () => {
    const {imgSrc, name, alias, title, allegiance, culture, born, spouse, issue, books} = this.state;
    if (imgSrc === "" || name === "" || alias === "" || title === "" || allegiance === "" || culture === "" || born === "" || spouse === "" || issue === "" || books === "") {
      return false;
    }
    return true;
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addCharacter = async (dispatch, e) => {
    e.preventDefault();
    // console.log("test");
    const {imgSrc, name, alias, title, allegiance, culture, born, spouse, issue, books} = this.state;
    const newCharacter = {
      // id: uniqid(),
      imgSrc,
      name,
      alias,
      title,
      allegiance,
      culture,
      born,
      spouse,
      issue,
      books
    }


    if (!this.validateForm()) {
      this.setState({
        error: true
      })

      return;
    }
    //POST Request
    const response = await axios.post("http://localhost:3004/characters", newCharacter);

    dispatch({
      type: "ADD_CHARACTER",
      // payload: newCharacter
      payload: response.data
    })
    // console.log(newCharacter);


    //Redirect
    this.props.history.push("/");
  }


  render() {
    const {visible, imgSrc, name, alias, title, allegiance, culture, born, spouse, issue, books, error} = this.state;

    return (
      <CharacterConsumer>
            {
      value => {
        const {dispatch} = value;

        return (

          <div className="col-md-12 mb-4" style={{
            marginTop: "80px",
            fontFamily: "Gothic"
          }}>
          <button onClick={this.changeVisibilty} className="btn btn-block mb-4">{visible ? "Hide Form" : "Show Form"}</button>
          
          <Animation pose={visible ? "visible" : "hidden"}>
          <div className="card">
                <div className="card-header">
                    <h4>Add Character Form</h4>
                </div>
                <div className="card-body">

                  {
          error ? <div className="alert alert-danger">Please, enter all informations.</div> : null
          }
                    <form onSubmit={this.addCharacter.bind(this, dispatch)}>
                        <div className="form-group">
                           <label htmlFor="name">Name</label>
                           <input type="text" name="name" id="name" value={name} onChange={this.changeInput} placeholder="Enter name" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="imgSrc">Image URL</label>
                           <input type="text" name="imgSrc" id="imgSrc" value={imgSrc} onChange={this.changeInput} placeholder="Enter image URL" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="alias">Alias</label>
                           <input type="text" name="alias" id="alias" value={alias} onChange={this.changeInput} placeholder="Enter alias" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="title">Title</label>
                           <input type="text" name="title" id="title" value={title} onChange={this.changeInput} placeholder="Enter title" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="allegiance">Allegiance</label>
                           <input type="text" name="allegiance" id="allegiance" value={allegiance} onChange={this.changeInput} placeholder="Enter allegiance" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="culture">Culture</label>
                           <input type="text" name="culture" id="culture" value={culture} onChange={this.changeInput} placeholder="Enter culture" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="born">Born</label>
                           <input type="text" name="born" id="born" value={born} onChange={this.changeInput} placeholder="Enter born" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="spouse">Spouse</label>
                           <input type="text" name="spouse" id="spouse" value={spouse} onChange={this.changeInput} placeholder="Enter spouse" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="issue">Issue</label>
                           <input type="text" name="issue" id="issue" value={issue} onChange={this.changeInput} placeholder="Enter issue" className="form-control"/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="books">Books</label>
                           <input type="text" name="books" id="books" value={books} onChange={this.changeInput} placeholder="Enter books" className="form-control"/>
                        </div>

                        <button type="submit" className="btn btn-block">Add Character</button>
                    </form>
                </div>
          </div>
          </Animation>
      </div>
        )
      }
      }
        </CharacterConsumer>
    )







  }
}

export default AddCharacter;