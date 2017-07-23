import React, { Component } from 'react';
import Create from './Create.js'
import Post from './Post.js'
import * as firebase from 'firebase';
import 'whatwg-fetch'
import './App.css';

const config = require('./config/config.js');
firebase.initializeApp(config);

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position)
});

//const colors = ['#ffb3b3','#9fbedf','#b3b3cc','#9fdf9f','#ffcc80','#cccc99','#9cb9ff','#6a8e81','#8e5b5b','#c8c1a5','#c6b5a7','#adc0b4','	#9db1bd','#bda5bc',	'#a19cb5','#f7a889','#f9d0a4','#f0debc','#f2e9af','#a4b28f','#786a94','#6c6389'];
const db = firebase.database();


class App extends Component {
  
  
  constructor(props){
    super(props);
   
    this.state = {
      quote: "{Loading...}", 
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    
  }



  componentDidMount(){
    //The .bind(then) was necessary to solve some bug where setState was not defined 
    //This is called when 
    
    const dbref = db.ref('/quotes')
    dbref.on('value', snap => {
      var quoteArr = snap.val()
      var num = Math.floor(Math.random() * (quoteArr.length));
      console.log(num)
      this.setState({quote:quoteArr[num]}) 
    })
  }

  render() {
    
    this.componentDidMount = this.componentDidMount.bind(this);
    return(
      <div className = "App">
        <Title />  
        <Controller quote={this.state.quote}/>
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
      posts: [],
      controller: "create"
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

  panelControl(){

    var renderPost = this.renderPost.bind(this);
    var renderCreate = this.renderCreate.bind(this);
    var foo = this.state.posts;
    
    if(this.state.controller === "create"){
      return(
        <div className="Controller">
        <button onClick={() => this.setState({controller: "create"})}> create. </button>
        <button onClick={() => this.setState({controller: "explore"})}> explore. </button>
        <Create words={this.props.quote} post={renderPost} reload={renderCreate}/>
        {foo.reverse().map(function(post,i){
          return(<Post value={post} key={i} />)
        })}
      </div>
      );
    }
    else if(this.state.controller === "explore"){
      return(
        <div className="Controller">
        <button onClick={() => this.setState({controller: "create"})}> create. </button>
        <button onClick={() => this.setState({controller: "explore"})}> explore. </button>
        <p> explore posts </p>
        </div>
      );
    }
  }

  render(){

    return(
      this.panelControl()
    );
  }

}



export default App;
