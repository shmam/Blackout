import React, { Component } from 'react';
import Create from './Create.js'
import './App.css';

var array = ["To","be","or","not","to", "be","that","is","the","question","also","this","is","some","more","words","that","I", "am","entering"]


class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        
        <br /><br />

        <Create words={array}/>
      </div>
    );
  }
}

class Header extends Component { 
  render() { 
    return(
      <div className = "Header">
        <table>
          <tr>
            <td> <Title /> </td>
            <td> <h3> Username: skhf </h3> </td>
          </tr>
        </table>
      </div>
    );
  }
}

class Title extends Component { 
  render(){ 
    return(
      <h1 className = "Title"> 
        blackout
      </h1>
    );
  }
}



export default App;
