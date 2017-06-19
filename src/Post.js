import React, { Component } from 'react';
import './App.css';


class Post extends Component{
    
    render(){
        return(
            <div className="Post">
                {"'" + this.props.value + "'"}

                <a className="twitter-share-button"  href="https://twitter.com/intent/tweet?text=Hello%20world"> tweet. </a> 
           </div>
        );
    }
}

export default Post