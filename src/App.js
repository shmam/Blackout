import React, { Component } from 'react';
import Create from './Create.js'
import Post from './Post.js'
import './App.css';

const colors = ['#ffb3b3','#9fbedf','#b3b3cc','#9fdf9f','#ffcc80','#cccc99','#9cb9ff','#6a8e81','#8e5b5b','#c8c1a5','#c6b5a7','#adc0b4','	#9db1bd','#bda5bc',	'#a19cb5','#f7a889','#f9d0a4','#f0debc','#f2e9af','#a4b28f','#786a94','#6c6389'];


class App extends Component {


  render() {
    const quote = "To be or not to be that is the beloved question that is being asked, but I can find no answer"
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
    var foo = this.state.posts;
    return(
      <div className="Controller">
        <button> create. </button>
        <button> explore. </button>
        <Create words={this.props.quote} post={renderPost} reload={renderCreate}/>
        {foo.reverse().map(function(post,i){
          return(<Post value={post} key={i} date={(new Date())}/>)
        })}
      </div>
    );
  }

}



export default App;
