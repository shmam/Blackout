import React, { Component } from 'react';
import './App.css';

var words = ["To","be","or","not","to", "be","that","is","the","question","also","this","is","some","more","words","that","I", "am","entering"]

class Create extends Component{ 
    constructor(props){
        super(props)
        this.state = {
            poem: {words}, 
            color: 'white',
        }
    }
    
    removeWord(index){
        this.setState({poem: words.splice(index,1)})
        console.log(words)
    }

    changeColor(){
        console.log("Beep")
        this.setState({color:'black'})

    }
    
    render(){ 
        return(
            <div className = "Create">
                {words.map(function(word,index){
                    return <Word 
                        key={index}
                        value={word}
                        setStyle={{
                            backgroundColor: this.state.color,
                        }}
                        onClick = {() => this.changeColor()}
                    />
                })}             
            </div>
        );

    }
}

class Word extends Component{
    
    render(){
        return(
            <div className = "Word">
                {this.props.value}
            </div>
        );
    }
}

export default Create