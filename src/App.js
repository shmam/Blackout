import React, { Component } from 'react';
import Create from './Create.js'
import Post from './Post.js'
import './App.css';



class App extends Component {


  render() {
    const quote = "Welcome random blank user ok to to blackout wow  "
    return (
      <div className = "App">
        <Title />  
        <Controller quote={quote}/>
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
    var arr = this.state.posts
    arr.push(newPostString)
    console.log(this.state.posts)
    this.setState({posts: arr})
  }

  renderCreate(){
    
  }


  render(){
    var renderPost = this.renderPost.bind(this);
    var renderCreate = this.renderCreate.bind(this);
    var foo = this.state.posts
    return(
      <div className="Controller">
        <button> create. </button>
        <button> explore. </button>
        <Create words={this.props.quote} post={renderPost} reload={renderCreate}/>
        {foo.map(function(post,i){
          return(<Post value={post} key={i} />)
        })}
      </div>
    );
  }

}



export default App;
