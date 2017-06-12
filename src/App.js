import React, { Component } from 'react';
import Create from './Create.js'
import Post from './post.js'
import './App.css';

var array = ["To","be","or","not","to", "be","that","is","the","question","also","this","is","some","more","words","that","I", "am","entering"]


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: -1
    }

  }

  renderPost(newPostArray){
    console.log("new post")
    this.setState({posts: (this.state.posts+1)})
    if(this.state.posts === 0){
      return(<Post words={null}/>)
    } 
  }

  renderCreate(){
    var renderPost = this.renderPost.bind(this);
    var renderCreate = this.renderCreate.bind(this);
    var wordArray = array;
    console.log("Reloaded with a new create comp.")
    return(
      <Create words={wordArray} post={renderPost} reload={renderCreate}/>
    )
  }

  render() {
    
    return (
      <div className = "App">
        <Header />   
        <br /><br />
        <p> Click on the words to black them out </p>
          {this.renderCreate()} 
          {this.renderPost()}       
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
