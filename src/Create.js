import React, { Component } from 'react';
import './App.css';

class Create extends Component{ 
    
    getInitialState(){
        return {active: null}
    }

    blacken(position){

    }
    
    render(){ 
        return(
            <div className = "Create">
                <p> Make a new poem bitch </p>
                <Word value="this" 
                    style = {{background: this.blacken(0)}}
                    onClick = {() => this.toggle(0)}
                />
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