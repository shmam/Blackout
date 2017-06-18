import React, { Component } from 'react';
import Create from './Create.js'

import './App.css';

const quote = "To be or not to be that is the question also the thing that I am entering"

class App extends Component {


  render() {
    return (
      <div className = "App">
        <Title />  
        <Controller />
      </div>
    );
  }
}


class Title extends Component { 
  render(){ 
    return(
      <h1 className = "Title"> 
        blackout.
      </h1>
    );
  }
}

class Controller extends Component{

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  renderPost(newPostString){
    console.log("Post: " + newPostString)
    var arr = this.state.posts.push(newPostString)
    console.log(this.state.posts)
    this.setState({posts: arr})
  }

  renderCreate(){
    
  }


  render(){
    var renderPost = this.renderPost.bind(this);
    var renderCreate = this.renderCreate.bind(this);
    return(
      <div className="Controller">
        <button> create. </button>
        <button> explore. </button>
        <Create words={quote} post={renderPost} reload={renderCreate}/>

      </div>
    );
  }

}



export default App;
