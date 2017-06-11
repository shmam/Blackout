import React, { Component } from 'react';
import './App.css';


class Create extends Component{ 
    constructor(props){
        super(props)
        const arr = this.props.words
        this.state = {
            status: arr,
            post: arr,
        }
    }
    
    removeWord(i,value){
        console.log("removed " + value);
        var u = this.state.post.indexOf(value)
        this.setState({post: this.state.post.splice(u+1,1)})
        console.log(this.state.post)
    }

    addWord(i,value){
        console.log("added " + value + " at index " + i);
}

    render(){ 

        //Binding the functions used in this parent component that will be passed to the child as props 
        var removeWord = this.removeWord.bind(this);
        var addWord = this.addWord.bind(this);
        return(
            <div className = "Create">
                
 
                {this.props.words.map(function(word,i){
                    return <Word 
                        keyVal={i}
                        key={i}
                        value={word}
                        remove={removeWord}
                        add={addWord}
                    />
                })}  

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