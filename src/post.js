import React, { Component } from 'react';
import './App.css';


class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            likes: 0
        }
    }

    mapWords(){
        if(this.props.words.length === 0){
            return(<p> nothing to see here </p>)
        }
        else{
            var string = this.props.words.join(' ');
            return(
                <p>{string}</p>
            )
        }
    }

    render(){
        return(
            <div className="Post">
                {this.mapWords}
            </div>
        );
    }
}

export default Post; 