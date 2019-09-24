import React, { Component } from "react";
import Header from "./layout/Header";
import Characters from "./components/Characters";
import AddCharacter from "./forms/AddCharacter";
import UpdateCharacter from "./forms/UpdateCharacter";
import NotFound from "./pages/NotFound";
import Contribute from "./pages/Contribute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





// https://anapioficeandfire.com/api/characters/583
class App extends Component {


  render() {

    return (

      <Router>
        <div className="container">
     
        <Header title="A Song of Ice and Fire's characters"/>

   

      <Switch>
          <Route exact path="/" component={Characters}/>
          <Route exact path="/add" component={AddCharacter}/>
          <Route exact path="/github" component={Contribute}/>
          <Route exact path="/edit/:id" component={UpdateCharacter}/>
          <Route component={NotFound}/> 
      </Switch>


        </div>
      </Router>

      );
  }

}

export default App;
