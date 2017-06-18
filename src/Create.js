import React, { Component } from 'react';
import './App.css';


class Create extends Component{ 
    constructor(props){
        super(props)
        this.state = {
            post: [],
            removed: [],
        }
    }
    
    removeWord(i,value){
        console.log("removed " + value);

        var foo = this.state.removed;
        foo.push(value);
        this.setState({
            removed: foo
        })
        //console.log(this.state.removed)
       
        
    }

    addWord(i,value){
        console.log("added " + value + " at index " + i);
        var foo = this.state.removed;
        foo.splice(foo.indexOf(value),1);
        this.setState({
            removed: foo
        })
        //console.log(this.state.removed)

    }

    generatePost(){
        var thingsToRemove = this.state.removed
        var newPost = this.props.words.split(" ")
        for(var i=0; i < thingsToRemove.length; i++){
            newPost.splice(newPost.indexOf(thingsToRemove[i]),1)
        }
        //pushes new post up to app layer to render
        //console.log(newPost.join(" "))
        this.props.post(newPost.join(" "));
    }


    render(){ 

        //Binding the functions used in this parent component that will be passed to the child as props 
        var removeWord = this.removeWord.bind(this);
        var addWord = this.addWord.bind(this);

        var array = this.props.words.split(" ")

        return(
            <div className = "Create">
                
                
                {array.map(function(word,i){
                    return <Word 
                        keyVal={i}
                        key={i}
                        value={word}
                        remove={removeWord}
                        add={addWord}
                    />
                })} 
                <br/>
                <button onClick={() => this.generatePost()}> post </button> 
                
            </div>
        );

    }
}

class Word extends Component{
    
    constructor(props){
        super(props);
        this.state = {background: 'white'}
    }

    handleClick(){
        if(this.state.background === 'white'){
            this.props.remove(this.props.keyVal,this.props.value)
            this.setState({background: 'black'})
            
        }
        else{
            this.props.add(this.props.keyVal,this.props.value)
            this.setState({background: 'white'})
        }
    }

    render(){
        return(
            <div onClick = {() => this.handleClick()} className = "Word"
                style={{background: this.state.background}}>
                {this.props.value}
            </div>
        );
    }
}

export default Create